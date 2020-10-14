import { useEffect, useState, useMemo } from 'react'
import { useImmer } from 'use-immer'
import useLotusClient from './use-lotus-client'

const interval = 30 * 1000
const expireAfter = 7 * 24 * 60 * 60 * 1000 // 7 days

const terminalStates = new Set([
  // go-fil-markets/storagemarket/dealstatus.go
  26 // StorageDealError
])

export default function useDealMonitor ({ appState, updateAppState }) {
  const { deals, dealData } = appState
  const [currentNode, setCurrentNode] = useState(0)
  const [ticker, setTicker] = useState(0)
  const [terminated, updateTerminated] = useImmer({})
  const [checkSet, updateCheckset] = useImmer({})
  const client = useLotusClient(currentNode, 'node')

  useEffect(() => {
    updateTerminated(draft => {
      if (!dealData) return
      for (const proposalCid in dealData) {
        const { clientDealStatus } = dealData[proposalCid]
        const { State: state } = clientDealStatus
        if (terminalStates.has(state)) {
          draft[proposalCid] = true
        }
      }
    })
  }, [dealData, updateTerminated])

  /*
  const checkSet = useMemo(() => {
    // console.log('Jim terminated', terminated)
    const checkSet = new Set()
    checkSet.add(0)
    checkSet.add(1) // Slingshot deals
    if (deals) {
      const now = Date.now()
      for (const deal of deals) {
        const { proposalCid, date, fromNode } = deal
        console.log(
          'Checking deal',
          terminated[proposalCid] && 'Terminated',
          deal
        )
        if (date + expireAfter > now && !terminated[proposalCid]) {
          checkSet.add(fromNode)
        }
      }
    }
    console.log('checkSet', checkSet)

    return checkSet
  }, [deals, terminated])
  */

  useEffect(() => {
    updateCheckset(draft => {
      draft[0] = true
      draft[1] = true
    })
  }, [deals, terminated])

  useEffect(() => {
    let state = { canceled: false }
    async function run () {
      const nodes = Object.keys(checkSet)
      if (nodes.length > 0) {
        for (const node of nodes) {
          if (state.canceled) return
          console.log('Checking node', node)
          setCurrentNode(node)
          setTicker(Date.now())
          await new Promise(resolve => setTimeout(resolve, interval))
        }
      } else {
        await new Promise(resolve => setTimeout(resolve, interval))
      }
      run()
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [checkSet])

  useEffect(() => {
    console.log('Run', ticker, client)
    let state = { canceled: false }
    if (!client) return
    async function run () {
      console.log('Worker', client, state.canceled)
      if (state.canceled) return
      try {
        const now = Date.now()
        const { Height: height } = await client.chainHead()
        console.log('Worker2', height, state.canceled)
        if (state.canceled) return
        console.log('Jim clientListDeals', currentNode)
        const clientDeals = await client.clientListDeals()
        console.log('Jim clientListDeals done', clientDeals.length, currentNode, Math.floor((Date.now() - now) / 1000) + 's')
        // console.log('Jim clientListDeals', clientDeals)
        // console.log('Jim clientListDeals', clientDeals)
        updateAppState(draft => {
          if (!draft.dealData) {
            draft.dealData = {}
          }
          for (const deal of clientDeals) {
            // console.log('Deal', deal)
            const {
              ProposalCid: { '/': proposalCid }
            } = deal
            draft.dealData[proposalCid] = {
              clientDealStatus: deal,
              updatedAtHeight: height,
              updatedAtTime: now
            }
            if (!draft.dealHistory) {
              draft.dealHistory = {}
            }
            if (!draft.dealHistory[proposalCid]) {
              draft.dealHistory[proposalCid] = []
            }
            const dealHistory = draft.dealHistory[proposalCid]
            let previous =
              dealHistory.length > 0
                ? dealHistory[dealHistory.length - 1]
                : [null, null, null]
            const previousState = previous[0]
            const currentState = deal.State
            if (currentState !== previousState) {
              dealHistory.push([currentState, height, now])
            }
          }
        })
      } catch (e) {
        console.warn('ClientListDeals error', e)
      }
      if (state.canceled) return
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [client, ticker, updateAppState])
}
