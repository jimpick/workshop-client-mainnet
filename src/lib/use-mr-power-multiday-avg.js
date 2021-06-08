import { useEffect, useState } from 'react'

export default function useMinerReportPowerMultidayAverage () {
  const [avgPowerReport, setAvgPowerReport] = useState()

  useEffect(() => {
    let state = { canceled: false }
    async function run () {
      try {
        if (state.canceled) return
        const url = 'https://hub.textile.io/thread/bafkwblbznyqkmqx5l677z3kjsslhxo2vbbqh6wluunvvdbmqattrdya/buckets/bafzbeicdqsds5fkmmcrtkyg3uf6zk5t3bralisswrdh5wlo25przr23pqq/miner-power-multiday-average-latest.json'
        const response = await fetch(url)
        if (state.canceled) return
        setAvgPowerReport(await response.json())
      } catch (e) {
        console.error('useMinerReportPowerMultidayAverage exception', e)
      }
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [])

  return avgPowerReport
}
