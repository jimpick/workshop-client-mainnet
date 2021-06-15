import { useEffect, useState } from 'react'

export default function useMinerReportInfoSubset () {
  const [minerReportInfo, setMinerReportInfo] = useState()

  useEffect(() => {
    let state = { canceled: false }
    async function run () {
      try {
        if (state.canceled) return
        const url = 'https://hub.textile.io/thread/bafkwblbznyqkmqx5l677z3kjsslhxo2vbbqh6wluunvvdbmqattrdya/buckets/bafzbeigscdljg5a32b4toh6jkz4h3dczusqd6s3mkt3h5nbwtqmbqmh6mu/miner-info-subset-latest.json'
        const response = await fetch(url)
        if (state.canceled) return
        setMinerReportInfo(await response.json())
      } catch (e) {
        console.error('useMinerReportInfoSubset exception', e)
      }
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [])

  return minerReportInfo
}
