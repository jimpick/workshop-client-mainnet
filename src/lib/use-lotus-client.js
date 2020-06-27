import { useEffect, useState } from 'react'
// import { LotusRPC } from '@filecoin-shipyard/lotus-client-rpc'
import { LotusRPC } from '../lotus-client-rpc.js'
import { BrowserProvider } from '@filecoin-shipyard/lotus-client-provider-browser'
import { testnet } from '@filecoin-shipyard/lotus-client-schema'
import { api, secure } from '../config'

export default function useLotusClient (nodeNumber, nodeOrMiner) {
  const [client, setClient] = useState()

  useEffect(() => {
    const wsUrl =
      (secure ? 'wss://' : 'ws://') +
      api +
      `/${nodeNumber}/${nodeOrMiner}/rpc/v0`
    const provider = new BrowserProvider(wsUrl, {
      token: async () => {
        const tokenUrl =
          (secure ? 'https://' : 'http://') +
          api +
          `/${nodeNumber}/testplan/` +
          (nodeOrMiner === 'node' ? '.lotus' : '.lotusstorage') +
          '/token'
        const response = await fetch(tokenUrl)
        return await response.text()
      }
    })
    let client
    try {
      client = new LotusRPC(provider, { schema: testnet.fullNode })
      setClient(client)
    } catch (e) {
      console.warn('use-lotus-client new client error', e)
    }
    return () => client.destroy({ noErrors: true })
  }, [nodeNumber, nodeOrMiner])

  return client
}
