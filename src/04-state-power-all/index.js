import React, { useEffect, useState } from 'react'
import bytes from 'bytes-iec'
import useLotusClient from '../lib/use-lotus-client'

export default function StatePowerAll ({ appState }) {
  const { selectedNode } = appState
  const client = useLotusClient(selectedNode, 'node')
  const [totalPower, setTotalPower] = useState()

  useEffect(() => {
    if (!client) return
    setTotalPower('Loading...')
    ;(async function run () {
      const result = await client.stateMinerPower('<empty>', [])
      setTotalPower(result.TotalPower)
    })()
  }, [client])

  let content
  if (
    !totalPower ||
    typeof totalPower.RawBytePower === 'undefined' ||
    typeof totalPower.QualityAdjPower === 'undefined'
  ) {
    content = <div>Loading...</div>
  } else {
    content = (
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
    )
  }
  return <div>{content}</div>
}
