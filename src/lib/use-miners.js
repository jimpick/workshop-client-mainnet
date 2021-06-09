import { useEffect, useState } from 'react'
import annotations from '../annotations'

export default function useMiners (client, tipsetKey, enabled) {
  const [miners, setMiners] = useState()

  useEffect(() => {
    if (!enabled) return
    if (!client) return
    if (tipsetKey === null) return
    let state = { canceled: false }
    async function run () {
      if (state.canceled) return
      const result = await client.stateListMiners(tipsetKey ? tipsetKey : [])
      // Whitelisted
      // const result = Object.keys(annotations)
      const resultSet = new Set(result)
      const annotated = []
      for (const miner in annotations) {
        if (resultSet.has(miner)) {
          annotated.push(miner)
        }
      }
      const notAnnotated = result
        .filter(miner => !annotations[miner])
        // .slice(0, 2000)
      // const notAnnotated = []
      if (state.canceled) return
      setMiners([...annotated, ...notAnnotated])
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [client, tipsetKey, enabled])

  return [miners, annotations]
}
