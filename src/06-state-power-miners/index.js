import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { useImmer } from 'use-immer'
import ip from 'ip'
import PQueue from 'p-queue'
import BigNumber from 'bignumber.js'
import bytes from 'bytes-iec'
import throttle from 'lodash.throttle'
import { get as idbGet, set as idbSet } from 'idb-keyval'
import copy from 'clipboard-copy'
import { formatRelative } from 'date-fns'
import useLotusClient from '../lib/use-lotus-client'
// import useMiners from '../lib/use-miners-all'
import useMiners from '../lib/use-miners'
import baiduCities from '../lib/baidu-cities'
import { api, secure } from '../config'

const quickMode = true

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

function BaiduCity ({ geoBaidu }) {
  if (!geoBaidu.content || !geoBaidu.content.address_detail) return null
  const {
    city,
    city_code: cityCode,
    province
  } = geoBaidu.content.address_detail
  if (baiduCities[cityCode]) {
    return baiduCities[cityCode]
  }
  return `${province} ${city} (${cityCode})`
}
function GeoName ({ geo, geo2, geoBaidu }) {
  if (!geo) return null
  return (
    <div style={{ marginLeft: '1rem' }}>
      GeoLite2: {geo.country && geo.country.names && geo.country.names.en}{' '}
      {geo.city && geo.city.names && geo.city.names.en}
      {geo2 && (
        <>
          <br />
          GeoIP2: {geo2.country &&
            geo2.country.names &&
            geo2.country.names.en}{' '}
          {geo2.city && geo2.city.names && geo2.city.names.en}
        </>
      )}
      {geoBaidu && (
        <>
          <br />
          Baidu: China <BaiduCity geoBaidu={geoBaidu} />
        </>
      )}
    </div>
  )
}

function Addrs ({
  minerAddrsRecord,
  miner,
  updateMinerAddrs,
  genesisCid,
  peerId
}) {
  const { addrs, timeGeoIp2, timeBaidu } = minerAddrsRecord
  let china = false
  for (const addr of addrs) {
    if (
      (addr.geo &&
        addr.geo.country &&
        addr.geo.country.names &&
        addr.geo.country.names.en === 'China') ||
      (addr.geo2 &&
        addr.geo2.country &&
        addr.geo2.country.names &&
        addr.geo2.country.names.en === 'China')
    ) {
      china = true
      break
    }
  }
  return (
    <div>
      <ul>
        {addrs.map((addr, i) => (
          <li key={i}>
            <div style={{ display: 'flex' }}>
              <div>{addr.ip}</div>
              <GeoName
                geo={addr.geo}
                geo2={addr.geo2}
                geoBaidu={addr.geoBaidu}
              />
            </div>
          </li>
        ))}
      </ul>
      {!timeGeoIp2 && <button onClick={getGeoIP2}>Get GeoIP2 Data</button>}
      {!timeBaidu && china && (
        <button onClick={getBaidu}>Get Baidu Data</button>
      )}
    </div>
  )

  async function getGeoIP2 () {
    const geoIp2 = {}
    const now = Date.now()
    for (const { ip: ipAddr } of addrs) {
      try {
        const url =
          (secure ? 'https://' : 'http://') +
          `${api}/geoip/ipv4-via-api/${ipAddr}`
        const response = await fetch(url)
        geoIp2[ipAddr] = await response.json()
      } catch (e) {
        console.error(`GeoIP2 error`, e)
      }
    }
    const key = `peerId:${genesisCid}:${peerId}`
    const cacheRecord = await idbGet(key)
    cacheRecord.timeGeoIp2 = now
    for (const addrRecord of cacheRecord.addrs) {
      const ipAddr = addrRecord.ip
      if (geoIp2[ipAddr]) {
        addrRecord.geo2 = geoIp2[ipAddr]
      }
    }
    await idbSet(key, cacheRecord)
    updateMinerAddrs(draft => {
      draft[miner].timeGeoIp2 = now
      for (const addr of draft[miner].addrs) {
        if (geoIp2[addr.ip]) {
          addr.geo2 = geoIp2[addr.ip]
        }
      }
    })
  }

  async function getBaidu () {
    const geoBaidu = {}
    const now = Date.now()
    let count = 0
    for (const { ip: ipAddr } of addrs) {
      try {
        const url =
          (secure ? 'https://' : 'http://') +
          `${api}/geoip/ipv4-via-baidu/${ipAddr}`
        const response = await fetch(url)
        const result = await response.json()
        console.log('geoBaidu', miner, ipAddr, result)
        if (result.status === 0) {
          geoBaidu[ipAddr] = result
          count++
        }
      } catch (e) {
        console.error(`GeoBaidu error`, e)
      }
    }
    if (count === 0) return
    const key = `peerId:${genesisCid}:${peerId}`
    const cacheRecord = await idbGet(key)
    cacheRecord.timeBaidu = now
    for (const addrRecord of cacheRecord.addrs) {
      const ipAddr = addrRecord.ip
      if (geoBaidu[ipAddr]) {
        addrRecord.geoBaidu = geoBaidu[ipAddr]
      }
    }
    await idbSet(key, cacheRecord)
    updateMinerAddrs(draft => {
      draft[miner].timeBaidu = now
      for (const addr of draft[miner].addrs) {
        if (geoBaidu[addr.ip]) {
          addr.geoBaidu = geoBaidu[addr.ip]
        }
      }
    })
  }
}

export default function StatePowerMiners ({ appState, updateAppState }) {
  const {
    selectedNode,
    genesisCid,
    minerCacheInvalidate,
    queryAllMinersWithAnnotations
  } = appState
  const client = useLotusClient(selectedNode, 'node')
  const [nonRoutableSet] = useState(
    JSON.parse(localStorage.getItem('nonRoutableSet')) || {}
  )
  const [height, setHeight] = useState()
  const [tipsetKey, setTipsetKey] = useState(null)
  const [totalPower, setTotalPower] = useState()
  const [miners, annotations] = useMiners(client, tipsetKey)
  const [minerPower, updateMinerPower] = useImmer({})
  const [minerInfo, updateMinerInfo] = useImmer({})
  const [minerAddrs, updateMinerAddrs] = useImmer({})
  const [minerAddrsUpdates] = useState([])
  const [ipLookupList, updateIpLookupList] = useImmer([])
  const [minersScanned, setMinersScannedUnthrottled] = useState(0)
  const [ipScanQueue] = useState(new PQueue({ concurrency: 10 }))
  const [ipScanJobs] = useState({})
  const [nonRoutableSetUpdated, setNonRoutableSetUpdated] = useState(false)

  const setMinersScanned = useCallback(
    throttle(setMinersScannedUnthrottled, 1000),
    [setMinersScannedUnthrottled]
  )

  const processMinerAddrsUpdates = useCallback(
    throttle(
      () => {
        updateMinerAddrs(draft => {
          for (const update of minerAddrsUpdates) {
            update(draft)
          }
          minerAddrsUpdates.length = 0
        })
      },
      quickMode ? 1000 : 2000
    ),
    [updateMinerAddrs, minerAddrsUpdates]
  )

  const filteredNonRoutableMiners = useMemo(() => {
    return (
      miners &&
      [...miners].filter(
        miner =>
          !nonRoutableSet[miner] ||
          (queryAllMinersWithAnnotations && annotations[miner])
      )
    )
  }, [miners, nonRoutableSet, queryAllMinersWithAnnotations, annotations])

  const filteredAnnotationKeys = useMemo(() => {
    return (
      annotations &&
      [...Object.keys(annotations)].filter(
        miner =>
          !nonRoutableSet[miner] ||
          (queryAllMinersWithAnnotations && annotations[miner])
      )
    )
  }, [annotations, nonRoutableSet, queryAllMinersWithAnnotations])

  const sortedMinersByName = useMemo(() => {
    return (
      filteredNonRoutableMiners &&
      [...filteredNonRoutableMiners].sort((a, b) => {
        return Number(a.slice(1)) - Number(b.slice(1))
      })
    )
  }, [filteredNonRoutableMiners])

  const sortedMinersByPower = useMemo(() => {
    return (
      filteredNonRoutableMiners &&
      [...filteredNonRoutableMiners].sort((a, b) => {
        const powerA = minerPower[a]
          ? BigNumber(minerPower[a].QualityAdjPower)
          : BigNumber(0)
        const powerB = minerPower[b]
          ? BigNumber(minerPower[b].QualityAdjPower)
          : BigNumber(0)
        const compare = powerA.minus(powerB)
        if (compare.isPositive() && !compare.isZero()) return -1
        if (compare.isNegative()) return 1
        return Number(a.slice(1)) - Number(b.slice(1))
      })
    )
  }, [filteredNonRoutableMiners, minerPower])

  // Get Height/Tipset
  useEffect(() => {
    let state = {
      canceled: false
    }
    if (!client) return
    async function run () {
      if (state.canceled) return
      const { Cids: tipsetKey, Height: height } = await client.chainHead()
      setHeight(height)
      setTipsetKey(tipsetKey)
      const result = await client.stateMinerPower('<empty>', tipsetKey)
      setTotalPower(result.TotalPower)
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [client])

  // Scan miners to collect miner power
  useEffect(() => {
    let state = {
      canceled: false,
      minerPowerUpdates: [],
      minerInfoUpdates: [],
      ipLookupListUpdates: []
    }
    if (!sortedMinersByName || !tipsetKey) return
    async function run () {
      if (state.canceled) return
      state.count = 0
      const queue = new PQueue({ concurrency: 20 })

      const processMinerPowerUpdates = throttle(
        () => {
          updateMinerPower(draft => {
            for (const update of state.minerPowerUpdates) {
              update(draft)
            }
          })
          state.minerPowerUpdates.length = 0
        },
        quickMode ? 1000 : 30000
      )

      const processMinerInfoUpdates = throttle(
        () => {
          updateMinerInfo(draft => {
            for (const update of state.minerInfoUpdates) {
              update(draft)
            }
          })
          state.minerInfoUpdates.length = 0
        },
        quickMode ? 1000 : 30000
      )

      const processIpLookupListUpdates = throttle(
        () => {
          updateIpLookupList(draft => {
            for (const update of state.ipLookupListUpdates) {
              update(draft)
            }
          })
          state.ipLookupListUpdates.length = 0
        },
        quickMode ? 1000 : 15000
      )

      // Process in reverse order to make discovery of new miners more quick
      const reversed = sortedMinersByName
        .reverse()
        .filter(miner => !annotations[miner])
      const processingOrder = [...filteredAnnotationKeys, ...reversed]
      for (const miner of processingOrder) {
        queue.add(async () => {
          // console.log('Miner Power', miner)
          setMinersScanned(++state.count)
          const result = await client.stateMinerPower(miner, tipsetKey)
          if (state.canceled) return
          const sectorCount = await client.stateMinerSectorCount(
            miner,
            tipsetKey
          )
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
          const minerInfo = await client.stateMinerInfo(miner, tipsetKey)
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
    annotations,
    filteredAnnotationKeys,
    updateMinerPower,
    updateMinerInfo,
    updateIpLookupList,
    setMinersScanned,
    tipsetKey
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
          const cacheRecord = await idbGet(`peerId:${genesisCid}:${peerId}`)
          // console.log('Jim cacheRecord', miner, cacheRecord)
          if (
            cacheRecord &&
            (!minerCacheInvalidate ||
              !minerCacheInvalidate[miner] ||
              cacheRecord.time > minerCacheInvalidate[miner])
            // Number(miner.slice(1)) > 210000
          ) {
            minerAddrsUpdates.push(draft => {
              draft[miner] = {
                state: 'scanned',
                start: cacheRecord.time,
                end: cacheRecord.time,
                timeGeoIp2: cacheRecord.timeGeoIp2,
                timeBaidu: cacheRecord.timeBaidu
              }
              if (cacheRecord.error) {
                draft[miner].error = cacheRecord.error
                if (!draft.newNonRoutableSet) {
                  draft.newNonRoutableSet = {}
                  draft.newNonRoutableSetCount = 0
                }
                if (!nonRoutableSet[miner]) {
                  draft.newNonRoutableSet[miner] = true
                  draft.newNonRoutableSetCount++
                }
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
          const oldCacheRecord = cacheRecord
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
                  if (!ip.isPrivate(ipv4Address) && ipv4Address !== '0.0.0.0') {
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
            if (oldCacheRecord) {
              const { previous, ...rest } = oldCacheRecord
              if (previous) {
                cacheRecord.previous = [rest, ...previous]
              } else {
                cacheRecord.previous = [rest]
              }
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
            idbSet(`peerId:${genesisCid}:${peerId}`, cacheRecord)
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
    if (quickMode) {
      function tick () {
        // For UI
        minerAddrsUpdates.push(draft => {
          draft['tick'] = Date.now()
        })
        processMinerAddrsUpdates()
        if (!state.canceled) setTimeout(tick, 1000)
      }
      tick()
    }
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
    genesisCid,
    nonRoutableSet,
    minerCacheInvalidate
  ])

  const now = Date.now()
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
      return true
    })
  activeIpLookups.sort(({ start: a }, { start: b }) => a - b)

  if (!height || !totalPower) {
    return (
      <div>
        <h1>Miners</h1>
        Loading...
      </div>
    )
  }

  const routableMiners =
    filteredMiners &&
    filteredMiners.map(miner => {
      let lng, lat
      if (!minerAddrs[miner].addrs) return null
      for (const addr of minerAddrs[miner].addrs) {
        const { geo, geo2, geoBaidu } = addr
        if (geoBaidu && geoBaidu.content && geoBaidu.content.point) {
          lng = geoBaidu.content.point.x
          lat = geoBaidu.content.point.y
          break
        } else if (geo2 && geo2.location) {
          lng = geo2.location.longitude
          lat = geo2.location.latitude
          break
        } else if (geo && geo.location) {
          lng = geo.location.longitude
          lat = geo.location.latitude
          break
        }
      }

      if (lng && lat) {
        return {
          miner,
          annotation: annotations[miner],
          longitude: Number(lng),
          latitude: Number(lat)
        }
      } else {
        return null
      }
    })

  return (
    <div>
      <h1>Miners: Height {height}</h1>
      <div>
        <h3>
          RawBytePower:{' '}
          {bytes(Number(totalPower.RawBytePower), { mode: 'binary' })}
        </h3>
        <h3>
          QualityAdjPower:{' '}
          {bytes(Number(totalPower.QualityAdjPower), { mode: 'binary' })}
        </h3>
      </div>
      {!miners && <div>Loading miner list...</div>}
      {miners && minersScanned !== sortedMinersByName.length && (
        <div style={{ marginBottom: '1rem' }}>
          Scanning {minersScanned} of {sortedMinersByName.length} miners,{' '}
          {miners.length} total
        </div>
      )}
      {miners && minersScanned === sortedMinersByName.length && (
        <div style={{ marginBottom: '1rem' }}>
          Scanned {sortedMinersByName.length} monitored miners of{' '}
          {miners.length} total
        </div>
      )}
      {miners && minerAddrs && (
        <div>
          New non-routable set: {minerAddrs.newNonRoutableSetCount}
          <button
            style={{ marginLeft: '1rem', marginRight: '1rem' }}
            onClick={() => {
              const fixedNonRoutableSet = {}
              for (const miner in nonRoutableSet) {
                // if (Number(miner.slice(1)) > 210000) continue
                fixedNonRoutableSet[miner] = nonRoutableSet[miner]
              }
              localStorage.setItem(
                'nonRoutableSet',
                JSON.stringify({
                  ...fixedNonRoutableSet,
                  ...minerAddrs.newNonRoutableSet
                })
              )
              setNonRoutableSetUpdated(true)
            }}
          >
            Update
          </button>
          {nonRoutableSetUpdated && 'Updated! Will be used on next reload.'}
        </div>
      )}
      <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <label>
          <input
            type='checkbox'
            checked={queryAllMinersWithAnnotations}
            onChange={() => {
              updateAppState(draft => {
                draft.queryAllMinersWithAnnotations = !queryAllMinersWithAnnotations
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          All miners with annotations
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
                    {bytes(Number(minerPower[miner].QualityAdjPower), {
                      mode: 'binary'
                    })}
                    ) - {minerPower[miner].sectorCountPSet} Sectors
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
                        {bytes(Number(minerPower[miner].QualityAdjPower), {
                          mode: 'binary'
                        })}{' '}
                        {minerPower[miner].RawBytePower !== '0' &&
                          Number(minerPower[miner].QualityAdjPower) /
                            Number(minerPower[miner].RawBytePower) +
                            'x'}{' '}
                        - {minerPower[miner].sectorCountPSet} sectors
                      </>
                    )}
                  </td>
                  <td>
                    {annotations[miner] ? (
                      annotations[miner]
                    ) : (
                      <span style={{ color: 'magenta' }}> No annotation</span>
                    )}
                  </td>
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
                    {minerAddrs[miner] &&
                      minerAddrs[miner].addrs &&
                      minerInfo[miner].peerId && (
                        <>
                          <Addrs
                            miner={miner}
                            minerAddrsRecord={minerAddrs[miner]}
                            updateMinerAddrs={updateMinerAddrs}
                            genesisCid={genesisCid}
                            peerId={minerInfo[miner].peerId}
                          />
                          <span>
                            {formatRelative(minerAddrs[miner].end, now) + ' '}
                          </span>
                          <button
                            onClick={() => {
                              updateAppState(draft => {
                                if (!draft.minerCacheInvalidate) {
                                  draft.minerCacheInvalidate = {}
                                }
                                draft.minerCacheInvalidate[miner] = Date.now()
                              })
                            }}
                          >
                            Invalidate
                          </button>
                        </>
                      )}
                    {minerAddrs[miner] && minerAddrs[miner].error && (
                      <>
                        <ul>
                          <li>
                            <span style={{ color: 'red' }}>
                              {minerAddrs[miner].error}
                            </span>
                          </li>
                        </ul>
                        <span>
                          {formatRelative(minerAddrs[miner].end, now) + ' '}
                        </span>
                        <button
                          onClick={() => {
                            updateAppState(draft => {
                              if (!draft.minerCacheInvalidate) {
                                draft.minerCacheInvalidate = {}
                              }
                              draft.minerCacheInvalidate[miner] = Date.now()
                            })
                          }}
                        >
                          Invalidate
                        </button>
                      </>
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
      <h2>Routable JSON</h2>
      <details>
        <button onClick={copyRoutableMiners}>Copy to Clipboard</button>
        <pre>{JSON.stringify(routableMiners, null, 2)}</pre>
      </details>
    </div>
  )

  async function copyRoutableMiners () {
    console.log('Copying to clipboard', routableMiners)
    await copy(JSON.stringify(routableMiners, null, 2))
    console.log('Copied.')
  }
}
