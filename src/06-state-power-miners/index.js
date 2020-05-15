import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { useImmer } from 'use-immer'
import ip from 'ip'
import PQueue from 'p-queue'
import BigNumber from 'bignumber.js'
import prettyBytes from 'pretty-bytes'
import throttle from 'lodash.throttle'
import { get as idbGet, set as idbSet } from 'idb-keyval'
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
    case 68719476736:
      return '64G'
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
  // const { selectedNode, filterNonRoutable: filterNonRoutableRaw } = appState
  const { selectedNode, filterNonRoutable, genesisCid } = appState
  const client = useLotusClient(selectedNode, 'node')
  const [miners, annotations] = useMiners(client)
  const [minerPower, updateMinerPower] = useImmer({})
  const [minerInfo, updateMinerInfo] = useImmer({})
  const [minerAddrs, updateMinerAddrs] = useImmer({})
  const [minerAddrsUpdates] = useState([])
  const [ipLookupList, updateIpLookupList] = useImmer([])
  const [minersScanned, setMinersScannedUnthrottled] = useState(0)
  const [ipScanQueue] = useState(new PQueue({ concurrency: 8 }))
  const [ipScanJobs] = useState({})
  const [, updateTicker] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      updateTicker(Date.now())
    }, 1000)
  }, [])

  // const undefinedToFalse = value => (typeof val === 'undefined' ? false : value)
  // const filterNonRoutable = undefinedToFalse(filterNonRoutableRaw)
  // const filterNonRoutable = filterNonRoutableRaw

  const setMinersScanned = useCallback(
    throttle(setMinersScannedUnthrottled, 1000),
    [setMinersScannedUnthrottled]
  )

  const processMinerAddrsUpdates = useCallback(
    throttle(() => {
      updateMinerAddrs(draft => {
        for (const update of minerAddrsUpdates) {
          update(draft)
        }
        minerAddrsUpdates.length = 0
      })
    }, 2000),
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
      const queue = new PQueue({ concurrency: 20 })

      const processMinerPowerUpdates = throttle(() => {
        updateMinerPower(draft => {
          for (const update of state.minerPowerUpdates) {
            update(draft)
          }
        })
        state.minerPowerUpdates.length = 0
      }, 30000)

      const processMinerInfoUpdates = throttle(() => {
        updateMinerInfo(draft => {
          for (const update of state.minerInfoUpdates) {
            update(draft)
          }
        })
        state.minerInfoUpdates.length = 0
      }, 30000)

      const processIpLookupListUpdates = throttle(() => {
        updateIpLookupList(draft => {
          for (const update of state.ipLookupListUpdates) {
            update(draft)
          }
        })
        state.ipLookupListUpdates.length = 0
      }, 30000)

      for (const miner of sortedMinersByName) {
        queue.add(async () => {
          // console.log('Miner Power', miner)
          setMinersScanned(++state.count)
          const result = await client.stateMinerPower(miner, [])
          if (state.canceled) return
          const sectorCount = await client.stateMinerSectorCount(miner, [])
          if (state.canceled) return
          if (
            result.MinerPower.QualityAdjPower !== '0' ||
            sectorCount.Sset > 0 ||
            sectorCount.Pset > 0
          ) {
            console.log(
              'Miner power result, sectors (p/s)',
              miner,
              result.MinerPower.QualityAdjPower,
              sectorCount.Sset,
              sectorCount.Pset
            )
          }
          state.minerPowerUpdates.push(draft => {
            draft[miner] = {
              ...result.MinerPower,
              sectorCountSSet: sectorCount.Sset,
              sectorCountPSet: sectorCount.Pset
            }
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
            draft.push({
              miner,
              peerId,
              power: Number(result.MinerPower.QualityAdjPower),
              sset: Number(sectorCount.Sset)
            })
          })
          processIpLookupListUpdates()
          // await new Promise(resolve => setTimeout(resolve, 100))
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
    const state = {
      existingJobs: 0,
      jobsAdded: 0,
      highPriorityJobs: 0,
      cacheHits: 0,
      cacheAttempts: 0,
      start: Date.now(),
      nextProgressUpdate: Date.now() + 1000,
      canceled: false
    }
    async function run () {
      console.log('Process ipLookupList, length', ipLookupList.length)
      for (const { miner, peerId, power, sset } of ipLookupList) {
        if (state.canceled) return
        const now = Date.now()
        if (now > state.nextProgressUpdate) {
          state.nextProgressUpdate = now + 1000
          const {
            existingJobs,
            jobsAdded,
            highPriorityJobs,
            cacheHits,
            cacheAttempts,
            start
          } = state
          const elapsed = now - start
          console.log(
            `Progress ipLookupList, ` +
              `${elapsed / 1000}s: ` +
              `${existingJobs + jobsAdded + cacheHits} of ${
                ipLookupList.length
              } processed, ` +
              `${existingJobs} existing, ` +
              `${jobsAdded} jobs added ` +
              `(${highPriorityJobs} high priority), ` +
              `${cacheHits} / ${cacheAttempts} cache hits`
          )
        }
        if (ipScanJobs[miner]) {
          state.existingJobs++
        } else {
          state.cacheAttempts++
          const cacheRecord = await idbGet(`minerAddrs:${genesisCid}:${miner}`)
          // console.log('Jim cacheRecord', miner, cacheRecord)
          if (cacheRecord) {
            minerAddrsUpdates.push(draft => {
              draft[miner] = {
                state: 'scanned',
                start: cacheRecord.time,
                end: cacheRecord.time
              }
              if (cacheRecord.error) {
                draft[miner].error = cacheRecord.error
              }
              if (cacheRecord.addrs) {
                draft[miner].addrs = cacheRecord.addrs
              }
            })
            processMinerAddrsUpdates()
            state.cacheHits++
            ipScanJobs[miner] = true
            continue
          }
          // console.log('Adding job for IP lookup', miner)
          ipScanJobs[miner] = async () => {
            // console.log('Scanning IP', miner, power)
            minerAddrsUpdates.push(draft => {
              draft[miner] = {
                state: 'scanning',
                start: Date.now()
              }
            })
            processMinerAddrsUpdates()

            const ips = new Set()
            let addrsError
            try {
              // console.log('Find peers', miner, peerId)
              // console.log('Jim ipLookupList findPeers', miner)
              const findPeer = await client.netFindPeer(peerId)
              // console.log('Jim findPeer', miner, peerId, findPeer)
              for (const maddr of findPeer.Addrs) {
                console.log(`  ${maddr}`)
                const match = maddr.match(/^\/ip4\/(\d+\.\d+\.\d+\.\d+)/)
                if (match) {
                  const ipv4Address = match[1]
                  if (!ip.isPrivate(ipv4Address)) {
                    console.log(`    ${ipv4Address}`)
                    ips.add(ipv4Address)
                  }
                  // FIXME: IPv6
                }
              }
            } catch (e) {
              console.warn('Exception finding peer', miner, e.message)
              addrsError = e.message
            }
            const geoIp = {}
            for (const ipAddr of ips) {
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
            // await new Promise(resolve => setTimeout(resolve, 5000))
            minerAddrsUpdates.push(draft => {
              draft[miner].state = 'scanned'
              draft[miner].end = Date.now()
              if (addrsError) {
                draft[miner].error = addrsError
              } else {
                draft[miner].addrs = []
                for (const ipAddr of ips) {
                  console.log('geoip', ipAddr, geoIp[ipAddr])
                  draft[miner].addrs.push({
                    ip: ipAddr,
                    geo: geoIp[ipAddr]
                  })
                }
              }
            })
            const cacheRecord = {
              time: Date.now()
            }
            if (addrsError) {
              cacheRecord.error = addrsError
            } else {
              cacheRecord.addrs = []
              for (const ipAddr of ips) {
                cacheRecord.addrs.push({
                  ip: ipAddr,
                  geo: geoIp[ipAddr]
                })
              }
            }
            idbSet(`minerAddrs:${genesisCid}:${miner}`, cacheRecord)
            processMinerAddrsUpdates()
            console.log('Done scanning IP', miner)
          }
          const priority = power > 0 || sset > 0 ? 1 : 0
          ipScanQueue.add(ipScanJobs[miner], { priority })
          state.jobsAdded++
          if (priority) {
            state.highPriorityJobs++
          }
        }
      }
      state.end = Date.now()
    }
    run()
    return () => {
      state.canceled = true
      const {
        existingJobs,
        jobsAdded,
        highPriorityJobs,
        cacheHits,
        cacheAttempts,
        start,
        end
      } = state
      const now = Date.now()
      const elapsed = end ? end - start : now - start
      const elapsedWindow = now - start
      console.log(
        `Processed ipLookupList, ` +
          `${existingJobs + jobsAdded + cacheHits} of ${
            ipLookupList.length
          } processed ` +
          `in ${elapsed}ms of ${elapsedWindow}ms, ` +
          `${existingJobs} existing, ` +
          `${jobsAdded} jobs added ` +
          `(${highPriorityJobs} high priority), ` +
          `${cacheHits} / ${cacheAttempts} cache hits`
      )
    }
  }, [
    client,
    ipLookupList,
    updateMinerInfo,
    ipScanJobs,
    ipScanQueue,
    minerAddrsUpdates,
    processMinerAddrsUpdates,
    genesisCid
  ])

  const now = Date.now()
  let nonRoutableCount = 0
  let ipLookupPendingCount = 0
  const activeIpLookups = []
  const filteredMiners =
    sortedMinersByPower &&
    sortedMinersByPower.filter(miner => {
      // if (miner === 't01000') return true
      if (!minerPower[miner] || !minerInfo[miner]) return false
      if (minerInfo[miner] && !minerAddrs[miner]) {
        ipLookupPendingCount++
        return false
      }
      if (
        minerPower[miner] &&
        minerPower[miner].QualityAdjPower === '0' &&
        minerPower[miner].sectorCountSSet === 0 &&
        (!minerAddrs[miner] || minerAddrs[miner].error)
      )
        return false
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
      if (filterNonRoutable && minerAddrs[miner] && minerAddrs[miner].error) {
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
              IP Lookup: {miner}{' '}
              {minerPower[miner] &&
                (minerPower[miner].QualityAdjPower !== '0' ||
                  minerPower[miner].sectorCountSSet > 0 ||
                  minerPower[miner].sectorCountPSet > 0) && (
                  <>
                    (Power{' '}
                    {prettyBytes(Number(minerPower[miner].QualityAdjPower))}) -{' '}
                    {minerPower[miner].sectorCountPSet} Sectors
                  </>
                )}{' '}
              {(elapsed / 1000).toFixed(1)}s
            </div>
          ))}
          {ipLookupPendingCount > 0 && (
            <div style={{ marginLeft: '1rem' }}>
              + {ipLookupPendingCount} waiting IP lookups
            </div>
          )}
        </div>
      )}
      {nonRoutableCount > 0 && <div>{nonRoutableCount} non-routable</div>}
      <table className='minerPower' style={{ marginTop: '1rem' }}>
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
                    {minerPower[miner] && (
                      <>
                        {prettyBytes(Number(minerPower[miner].QualityAdjPower))}{' '}
                        - {minerPower[miner].sectorCountPSet} sectors
                      </>
                    )}
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
                    {minerAddrs[miner] && minerAddrs[miner].addrs && (
                      <ul>
                        {minerAddrs[miner].addrs.map((addr, i) => (
                          <li key={i}>
                            {addr.ip}
                            <GeoName geo={addr.geo} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {minerAddrs[miner] && minerAddrs[miner].error && (
                      <ul>
                        <li>
                          <span style={{ color: 'red' }}>
                            {minerAddrs[miner].error}
                          </span>
                        </li>
                      </ul>
                    )}
                    {minerAddrs[miner] &&
                      minerAddrs[miner].addrs &&
                      minerAddrs[miner].addrs.length === 0 && (
                        <ul>
                          <li>
                            <span style={{ color: 'red' }}>
                              No IPv4 addresses found
                            </span>
                          </li>
                        </ul>
                      )}
                    {minerAddrs[miner] &&
                      minerAddrs[miner].state === 'scanning' && (
                        <ul>
                          <li>
                            <span style={{ color: 'green' }}>
                              Finding IPs...
                            </span>
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
