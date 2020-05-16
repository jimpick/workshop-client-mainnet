import { useEffect, useState } from 'react'
import LotusRPC from '@filecoin-shipyard/lotus-client-rpc'
import BrowserProvider from '@filecoin-shipyard/lotus-client-provider-browser'
// import schema from '@filecoin-shipyard/lotus-client-schema/prototype/testnet-v3'
import schema from '../schema'
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
    const client = new LotusRPC(provider, { schema })
    setClient(client)
    return () => {
      client.destroy()
    }
  }, [nodeNumber, nodeOrMiner])

  return client
}
