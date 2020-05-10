import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'
import useLotusClient from '../lib/use-lotus-client'
// import useMiners from '../lib/use-miners-all'
import useMiners from '../lib/use-miners'

export default function StatePowerMiners ({ appState }) {
  const { selectedNode } = appState
  const client = useLotusClient(selectedNode, 'node')
  const [miners, annotations] = useMiners(client)
  const [minerPower, updateMinerPower] = useImmer({})
  const sortedMiners = miners && [...miners].sort((a, b) => {
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
        updateMinerPower(draft => {
          draft[miner] = result.MinerPower
          draft['total'] = result.TotalPower
        })
      }
    })()
    return () => {
      state.canceled = true
    }
  }, [client, miners, updateMinerPower])

  return (
    <div>
      <ul>
        {sortedMiners &&
          sortedMiners.map(miner => (
            <li key={miner}>
              {miner}: {minerPower[miner] && minerPower[miner].QualityAdjPower}
              {annotations[miner] && <span> ({annotations[miner]})</span>}
            </li>
          ))}
      </ul>
    </div>
  )
}
