import { useEffect, useState } from 'react'
import annotations from '../annotations'

export default function useMiners (client) {
  const [miners, setMiners] = useState()

  useEffect(() => {
    if (!client) return
    let state = { canceled: false }
    ;(async function run () {
      if (state.canceled) return
      /*
      const result = await client.stateListMiners([])
      */
      // Whitelisted
      const result = Object.keys(annotations)
      if (state.canceled) return
      setMiners(result)
    })()
    return () => { state.canceled = true }
  }, [client])

  return [miners, annotations]
}
