/* global BigInt */

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
      if (minerInfo[a] && !minerInfo[b]) return -1
      if (minerInfo[b] && !minerInfo[a]) return 1
      if (minerInfo[a] && minerInfo[b]) {
        const powerA = BigInt(minerInfo[a].power.QualityAdjPower)
        const powerB = BigInt(minerInfo[b].power.QualityAdjPower)
        const compare = powerB - powerA
        if (compare > 0) return 1
        if (compare < 0) return -1
      }
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
      <table className="minerPower">
        <tbody>
          {sortedMiners &&
            sortedMiners.map(miner => (
              <tr key={miner}>
                <td>{miner}</td>
                <td>
                  {minerInfo[miner] && (
                    <span>
                      {' '}
                      {formatSectorSize(minerInfo[miner].sectorSize)}
                    </span>
                  )}
                </td>
                <td>
                  {minerInfo[miner] && minerInfo[miner].power.QualityAdjPower}
                </td>
                <td>{annotations[miner] && annotations[miner]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
