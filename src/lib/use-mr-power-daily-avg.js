import { useEffect, useState } from 'react'

export default function useMinerReportPowerDailyAverage () {
  const [avgPowerReport, setAvgPowerReport] = useState()

  useEffect(() => {
    let state = { canceled: false }
    async function run () {
      try {
        if (state.canceled) return
        // const url = 'https://bafzbeiehszmgeygov7bqchfmhh5zxtmn6xyt26ufyhw5k6tuy23h2w4ngm.ipns.dweb.link/miner-power-daily-average-latest.json'
        const url = 'https://hub.textile.io/thread/bafkwblbznyqkmqx5l677z3kjsslhxo2vbbqh6wluunvvdbmqattrdya/buckets/bafzbeiehszmgeygov7bqchfmhh5zxtmn6xyt26ufyhw5k6tuy23h2w4ngm/miner-power-daily-average-latest.json'
        const response = await fetch(url)
        if (state.canceled) return
        setAvgPowerReport(await response.json())
      } catch (e) {
        console.error('useMinerReportPowerDailyAverage exception', e)
      }
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [])

  return avgPowerReport
}
