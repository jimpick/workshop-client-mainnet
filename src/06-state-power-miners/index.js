import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { useImmer } from 'use-immer'
import ip from 'ip'
import PQueue from 'p-queue'
import BigNumber from 'bignumber.js'
import prettyBytes from 'pretty-bytes'
import throttle from 'lodash.throttle'
import useLotusClient from '../lib/use-lotus-client'
// import useMiners from '../lib/use-miners-all'
import useMiners from '../lib/use-miners'
import { api, secure } from '../config'

function formatSectorSize (size) {
  switch (size) {
    case 536870912:
      return '512M'
    case 34359738368:
      return '32G'
    case 2048:
      return '2K'
    default:
      return size
  }
}

function GeoName ({ geo }) {
  if (!geo) return null
  return (
    <span>
      {' '}
      {geo.country && geo.country.names && geo.country.names.en}{' '}
      {geo.city && geo.city.names && geo.city.names.en}
    </span>
  )
}
export default function StatePowerMiners ({ appState, updateAppState }) {
  const { selectedNode, filterNonRoutable } = appState
  const client = useLotusClient(selectedNode, 'node')
  const [miners, annotations] = useMiners(client)
  const [minerPower, updateMinerPower] = useImmer({})
  const [minerInfo, updateMinerInfo] = useImmer({})
  const [minerAddrs, updateMinerAddrs] = useImmer({})
  const [minerAddrsUpdates] = useState([])
  const [ipLookupList, updateIpLookupList] = useImmer([])
  const [minersScanned, setMinersScannedUnthrottled] = useState(0)
  const [ipScanQueue] = useState(new PQueue({ concurrency: 3 }))
  const [ipScanJobs] = useState({})

  const setMinersScanned = useCallback(
    throttle(setMinersScannedUnthrottled, 250),
    [setMinersScannedUnthrottled]
  )

  const processMinerAddrsUpdates = useCallback(
    throttle(() => {
      updateMinerAddrs(draft => {
        console.log('Jim1', draft, minerAddrsUpdates.length)
        for (const update of minerAddrsUpdates) {
          update(draft)
        }
        minerAddrsUpdates.length = 0
      })
    }, 1000),
    [updateMinerAddrs, minerAddrsUpdates]
  )

  const sortedMinersByName = useMemo(() => {
    return (
      miners &&
      [...miners].sort((a, b) => {
        return Number(a.slice(1)) - Number(b.slice(1))
      })
    )
  }, [miners])
  const sortedMinersByPower = useMemo(() => {
    return (
      miners &&
      [...miners].sort((a, b) => {
        if (minerPower[a] && !minerPower[b]) return -1
        if (minerPower[b] && !minerPower[a]) return 1
        if (minerPower[a] && minerPower[b]) {
          /* Use this when Safari supports BigInt
        const powerA = BigInt(minerPower[a].QualityAdjPower)
        const powerB = BigInt(minerPower[b].QualityAdjPower)
        */
          const powerA = BigNumber(minerPower[a].QualityAdjPower)
          const powerB = BigNumber(minerPower[b].QualityAdjPower)
          const compare = powerB.minus(powerA)
          if (compare.isPositive()) return 1
          if (compare.isNegative()) return -1
        }
        return Number(b.slice(1)) - Number(a.slice(1))
      })
    )
  }, [miners, minerPower])

  // Scan miners to collect miner power
  useEffect(() => {
    let state = {
      canceled: false,
      minerPowerUpdates: [],
      minerInfoUpdates: [],
      ipLookupListUpdates: []
    }
    if (!sortedMinersByName) return
    async function run () {
      if (state.canceled) return
      state.count = 0
      const queue = new PQueue({ concurrency: 1 })

      const processMinerPowerUpdates = throttle(() => {
        updateMinerPower(draft => {
          for (const update of state.minerPowerUpdates) {
            update(draft)
          }
        })
        state.minerPowerUpdates.length = 0
      }, 2000)

      const processMinerInfoUpdates = throttle(() => {
        updateMinerInfo(draft => {
          for (const update of state.minerInfoUpdates) {
            update(draft)
          }
        })
        state.minerInfoUpdates.length = 0
      }, 2000)

      const processIpLookupListUpdates = throttle(() => {
        updateIpLookupList(draft => {
          for (const update of state.ipLookupListUpdates) {
            update(draft)
          }
        })
        state.ipLookupListUpdates.length = 0
      }, 3000)

      for (const miner of sortedMinersByName) {
        queue.add(async () => {
          console.log('Miner Power', miner)
          setMinersScanned(++state.count)
          const result = await client.stateMinerPower(miner, [])
          if (state.canceled) return
          console.log(
            'Miner power result',
            miner,
            result.MinerPower.QualityAdjPower
          )
          state.minerPowerUpdates.push(draft => {
            draft[miner] = result.MinerPower
            draft['total'] = result.TotalPower
          })
          processMinerPowerUpdates()
          const minerInfo = await client.stateMinerInfo(miner, [])
          const { PeerId: peerId, SectorSize: sectorSize } = minerInfo
          if (state.canceled) return
          state.minerInfoUpdates.push(draft => {
            if (!draft[miner]) {
              draft[miner] = {}
            }
            const minerData = draft[miner]
            minerData.sectorSize = sectorSize
            minerData.peerId = peerId
          })
          processMinerInfoUpdates()
          // if (result.MinerPower.QualityAdjPower !== '0') {
          state.ipLookupListUpdates.push(draft => {
            draft.push(miner)
          })
          processIpLookupListUpdates()
          await new Promise(resolve => setTimeout(resolve, 1000))
        })
      }
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [
    client,
    sortedMinersByName,
    updateMinerPower,
    updateMinerInfo,
    updateIpLookupList,
    setMinersScanned
  ])

  // Process ipLookupList
  useEffect(() => {
    let state = {
      canceled: false
      // minerAddrsUpdates: [],
    }

    /*
    const processMinerAddrsUpdates = throttle(() => {
      updateMinerAddrs(draft => {
        console.log('Jim1', draft)
        for (const update of state.minerAddrsUpdates) {
          update(draft)
        }
      })
      state.minerAddrsUpdates.length = 0
    }, 1000)
    */

    async function run () {
      if (state.canceled) return
      console.log('Process ipLookupList, length', ipLookupList.length)
      for (const miner of ipLookupList) {
        if (!ipScanJobs[miner]) {
          console.log('Adding job for IP lookup', miner)
          ipScanJobs[miner] = async () => {
            console.log('Scanning IP', miner)
            minerAddrsUpdates.push(draft => {
              console.log('Jim2 add', miner)
              draft[miner] = {
                state: 'scanning',
                start: Date.now()
              }
            })
            console.log('Jim4', minerAddrsUpdates.length)
            processMinerAddrsUpdates()
            await new Promise(resolve => setTimeout(resolve, 5000))
            minerAddrsUpdates.push(draft => {
              console.log('Jim3 update', miner)
              draft[miner].state = 'scanned'
              draft[miner].end = Date.now()
            })
            console.log('Jim5', minerAddrsUpdates.length)
            processMinerAddrsUpdates()
            console.log('Done scanning IP', miner)
          }
          ipScanQueue.add(ipScanJobs[miner])
          //const [minerAddrs, updateMinerAddrs] = useImmer({})
        }
        /*
        queue.add(async () => {
          if (minerIpProcessed[miner]) return
          console.log('Miner IP Lookup', miner)
          const minerInfoData = await client.stateMinerInfo(miner, [])
          const { PeerId: peerId, SectorSize: sectorSize } = minerInfoData
          if (state.canceled) return
          updateMinerInfo(draft => {
            if (!draft[miner]) {
              draft[miner] = {}
            }
            const minerData = draft[miner]
            minerData.sectorSize = sectorSize
            minerData.peerId = peerId
            minerData.addrsLoading = true
          })
          const ips = new Set()
          let addrsError
          try {
            console.log('Find peers', miner, peerId)
            console.log('Jim ipLookupList findPeers', miner)
            if (state.canceled) return
            const findPeer = await client.netFindPeer(peerId)
            if (state.canceled) return
            console.log('Jim findPeer', miner, peerId, findPeer)
            for (const maddr of findPeer.Addrs) {
              console.log(`  ${maddr}`)
              const match = maddr.match(/^\/ip4\/(\d+\.\d+\.\d+\.\d+)/)
              if (match) {
                const ipv4Address = match[1]
                if (!ip.isPrivate(ipv4Address)) {
                  console.log(`    ${ipv4Address}`)
                  ips.add(ipv4Address)
                }
              }
            }
          } catch (e) {
            console.warn('Exception finding peer', miner, e.message)
            addrsError = e.message
          }
          const geoIp = {}
          for (const ipAddr of ips) {
            if (state.canceled) return
            try {
              const url =
                (secure ? 'https://' : 'http://') +
                `${api}/geoip/ipv4/${ipAddr}`
              const response = await fetch(url)
              geoIp[ipAddr] = await response.json()
            } catch (e) {
              console.error(`GeoIP error`, e)
            }
          }
          if (state.canceled) return
          updateMinerInfo(draft => {
            if (!draft[miner]) {
              draft[miner] = {}
            }
            const minerData = draft[miner]
            minerData.addrs = []
            for (const ipAddr of ips) {
              console.log('geoip', ipAddr, geoIp[ipAddr])
              minerData.addrs.push({
                ip: ipAddr,
                geo: geoIp[ipAddr]
              })
            }
            if (addrsError) {
              minerData.addrsError = addrsError
            }
            delete minerData.addrsLoading
          })
          processed.add(miner)
          console.log('Jim ipLookupList processed', miner)
          // await new Promise(resolve => setTimeout(resolve, 100))
        })
        */
      }
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [client, ipLookupList, updateMinerInfo])

  const now = Date.now()
  let nonRoutableCount = 0
  let ipLookupPendingCount = 0
  const activeIpLookups = []
  const filteredMiners =
    sortedMinersByPower &&
    sortedMinersByPower.filter(miner => {
      // if (miner === 't01000') return true
      if (!minerPower[miner] || !minerInfo[miner]) return false
      /*
      if (minerPower[miner] && minerPower[miner].QualityAdjPower === '0')
        return false
        */
      if (minerInfo[miner] && !minerAddrs[miner]) {
        ipLookupPendingCount++
        return false
      }
      if (minerInfo[miner] && minerAddrs[miner]) {
        const { state, start } = minerAddrs[miner]
        if (state === 'scanning') {
          activeIpLookups.push({
            miner,
            start,
            elapsed: now - start
          })
          return false
        }
      }
      if (
        filterNonRoutable &&
        minerInfo[miner] &&
        minerInfo[miner].addrsError
      ) {
        nonRoutableCount++
        return false
      }
      return true
    })
  activeIpLookups.sort(({ start: a }, { start: b }) => a - b)

  return (
    <div>
      {miners && minersScanned !== miners.length && (
        <div style={{ marginBottom: '1rem' }}>
          Scanning {minersScanned} of {miners.length} miners
        </div>
      )}
      <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <label>
          <input
            type='checkbox'
            checked={filterNonRoutable}
            onChange={() => {
              updateAppState(draft => {
                draft.filterNonRoutable = !filterNonRoutable
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          Filter non-routable miners
        </label>
      </div>
      {activeIpLookups.length > 0 && (
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          {activeIpLookups.map(({ miner, elapsed }) => (
            <div key={miner}>
              IP Lookup: {miner} {(elapsed / 1000).toFixed(1)}s
            </div>
          ))}
        </div>
      )}
      {ipLookupPendingCount > 0 && (
        <div>{ipLookupPendingCount} pending IP lookups</div>
      )}
      {nonRoutableCount > 0 && <div>{nonRoutableCount} non-routable</div>}
      <table className='minerPower' style={{marginTop: '1rem'}}>
        <tbody>
          {filteredMiners &&
            filteredMiners.map((miner, i) => (
              <React.Fragment key={miner}>
                <tr>
                  <td>{i + 1}.</td>
                  <td>
                    <a
                      href={`https://filscan.io/#/address/detail?address=${miner}`}
                    >
                      {miner}
                    </a>
                  </td>
                  <td>
                    {minerInfo[miner] && (
                      <span>
                        {' '}
                        {formatSectorSize(minerInfo[miner].sectorSize)}
                      </span>
                    )}
                  </td>
                  <td>
                    {minerPower[miner] &&
                      prettyBytes(Number(minerPower[miner].QualityAdjPower))}
                  </td>
                  <td>{annotations[miner] && annotations[miner]}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    {minerInfo[miner] && minerInfo[miner].peerId && (
                      <a
                        href={`https://filscan.io/#/stats/peer?peer_id=${minerInfo[miner].peerId}`}
                      >
                        {minerInfo[miner].peerId.slice(-3)}
                      </a>
                    )}
                  </td>
                  <td colSpan='2'>
                    {minerInfo[miner] && minerInfo[miner].addrs && (
                      <ul>
                        {minerInfo[miner].addrs.map((addr, i) => (
                          <li key={i}>
                            {addr.ip}
                            <GeoName geo={addr.geo} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {minerInfo[miner] &&
                      minerInfo[miner].addrs &&
                      minerInfo[miner].addrs.length === 0 && (
                        <ul>
                          <li>
                            {minerInfo[miner].addrsError ? (
                              <span style={{ color: 'red' }}>
                                {minerInfo[miner].addrsError}
                              </span>
                            ) : (
                              <span style={{ color: 'red' }}>
                                No IPv4 addresses found
                              </span>
                            )}
                          </li>
                        </ul>
                      )}
                    {minerInfo[miner] && !minerInfo[miner].addrs && (
                      <ul>
                        <li>
                          {minerInfo[miner].addrsLoading ? (
                            <span style={{ color: 'green' }}>
                              Finding IPs...
                            </span>
                          ) : (
                            <span style={{ color: 'blue' }}>
                              Pending IP lookup
                            </span>
                          )}
                        </li>
                      </ul>
                    )}
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  )
}
