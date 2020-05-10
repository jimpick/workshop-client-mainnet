import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'
import useLotusClient from '../lib/use-lotus-client'
// import useMiners from '../lib/use-miners-all'
import useMiners from '../lib/use-miners'

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

export default function StatePowerMiners ({ appState }) {
  const { selectedNode } = appState
  const client = useLotusClient(selectedNode, 'node')
  const [miners, annotations] = useMiners(client)
  const [minerInfo, updateMinerInfo] = useImmer({})
  const sortedMiners =
    miners &&
    [...miners].sort((a, b) => {
      return Number(a.slice(1)) - Number(b.slice(1))
    })

  useEffect(() => {
    let state = { canceled: false }
    if (!miners) return
    ;(async function run () {
      if (state.canceled) return
      for (const miner of miners) {
        const result = await client.stateMinerPower(miner, [])
        if (state.canceled) return
        const minerInfo = await client.stateMinerInfo(miner, [])
        updateMinerInfo(draft => {
          if (!draft[miner]) {
            draft[miner] = {}
          }
          const minerData = draft[miner]
          minerData.power = result.MinerPower
          minerData.sectorSize = minerInfo.SectorSize
          draft['total'] = result.TotalPower
        })
      }
    })()
    return () => {
      state.canceled = true
    }
  }, [client, miners, updateMinerInfo])

  return (
    <div>
      <ul>
        {sortedMiners &&
          sortedMiners.map(miner => (
            <li key={miner}>
              {miner}
              {minerInfo[miner] && (
                <span> {formatSectorSize(minerInfo[miner].sectorSize)}</span>
              )}
              :
              {minerInfo[miner] && (
                <span> {minerInfo[miner].power.QualityAdjPower}</span>
              )}
              {annotations[miner] && <span> ({annotations[miner]})</span>}
            </li>
          ))}
      </ul>
    </div>
  )
}
