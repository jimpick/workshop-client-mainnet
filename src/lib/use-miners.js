import { useEffect, useState } from 'react'
import annotations from '../annotations'

export default function useMiners (client) {
  const [miners, setMiners] = useState()

  useEffect(() => {
    if (!client) return
    let state = { canceled: false }
    async function run () {
      if (state.canceled) return
      const result = await client.stateListMiners([])
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
  }, [client])

  return [miners, annotations]
}
