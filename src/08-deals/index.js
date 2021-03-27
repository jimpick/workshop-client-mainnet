import React from 'react'
import DealList from './deal-list'
import useLotusClient from '../lib/use-lotus-client'

export default function Deals ({ appState, updateAppState }) {
  const { deals, dealData, selectedNode, filterErrors } = appState
  const client = useLotusClient(selectedNode, 'node')
  return (
    <div>
      <h1>Deals</h1>
      <>
        <button
          style={{ height: '2rem', marginBottom: '1rem' }}
          onClick={clearAll}
        >
          Clear
        </button>
        <button
          style={{ height: '2rem', marginBottom: '1rem' }}
          onClick={clear128mibUnverified}
        >
          Clear 128M-U
        </button>
        <button
          style={{ height: '2rem', marginBottom: '1rem' }}
          onClick={clear128mibVerified}
        >
          Clear 128M-V
        </button>
        <label>
          <input
            type='checkbox'
            checked={filterErrors}
            onChange={() => {
              updateAppState(draft => {
                draft.filterErrors = !filterErrors
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          Filter errors
        </label>{' '}
        <button
          style={{ height: '2rem', marginBottom: '1rem' }}
          onClick={import128mibUnverified}
        >
          Import 128M-U Deals
        </button>
        <button
          style={{ height: '2rem', marginBottom: '1rem' }}
          onClick={import128mibVerified}
        >
          Import 128M-V Deals
        </button>
      </>
      {deals && <p>{deals.length} deals</p>}
      <DealList
        client={client}
        appState={appState}
        filterErrors={filterErrors}
      />
    </div>
  )

  function clearAll () {
    updateAppState(draft => {
      draft.deals = []
      draft.dealData = {}
      draft.dealHistory = {}
    })
  }

  function clear128mibUnverified () {
    updateAppState(draft => {
      const newDeals = []
      for (const deal of draft.deals) {
        const { type } = deal
        if (type !== '128mib-unverified') {
          newDeals.push(deal)
        }
      }
      draft.deals = newDeals
    })
  }

  function clear128mibVerified () {
    updateAppState(draft => {
      const newDeals = []
      for (const deal of draft.deals) {
        const { type } = deal
        if (type !== '128mib-verified') {
          newDeals.push(deal)
        }
      }
      draft.deals = newDeals
    })
  }

  async function import128mibUnverified () {
    console.log('Jim import 128M-U deals')
    const baseUrl =
      'https://raw.githubusercontent.com/jimpick/filecoin-wiki-test/master/'
    const urls = [
      'wiki-small-blocks-combined-128/deals/f0252068.json',
    ]
    let deals128mibUnverified = []
    for (const url of urls) {
      const resp = await fetch(baseUrl + url)
      const newDeals = await resp.json()
      deals128mibUnverified = deals128mibUnverified.concat(newDeals)
    }
    console.log('Jim 128mib unverified deals', deals128mibUnverified)
    console.log('Jim dealData', dealData)
    let existingProposalCids
    if (deals) {
      existingProposalCids = new Set(deals.map(deal => deal.proposalCid))
    } else {
      existingProposalCids = new Set()
    }
    console.log('Jim existingProposalCids', existingProposalCids)
    updateAppState(draft => {
      if (!draft.deals) {
        draft.deals = []
      }
      for (const { miner, wikiFile, dealCid, cid } of deals128mibUnverified) {
        if (!existingProposalCids.has(dealCid)) {
          console.log('Add:', miner, wikiFile, dealCid, dealData[dealCid])
          if (dealData[dealCid]) {
            draft.deals.push({
              type: '128mib-unverified',
              proposalCid: dealCid,
              date: new Date(dealData[dealCid].clientDealStatus.CreationTime),
              fromNode: 1,
              miner: miner,
              cid,
              wikiFile
            })
          } else {
            console.log(
              'Deal data not found, skipping',
              miner,
              wikiFile,
              dealCid
            )
          }
        }
      }
    })
  }

  async function import128mibVerified () {
    console.log('Jim import 128M-V deals')
    const baseUrl =
      'https://raw.githubusercontent.com/jimpick/filecoin-wiki-test/master/'
    const urls = [
      'wiki-small-blocks-combined-128-verified/deals/f0421499.json',
    ]
    let deals128mibVerified = []
    for (const url of urls) {
      const resp = await fetch(baseUrl + url)
      const newDeals = await resp.json()
      deals128mibVerified = deals128mibVerified.concat(newDeals)
    }
    console.log('Jim 128mib verified deals', deals128mibVerified)
    console.log('Jim dealData', dealData)
    let existingProposalCids
    if (deals) {
      existingProposalCids = new Set(deals.map(deal => deal.proposalCid))
    } else {
      existingProposalCids = new Set()
    }
    console.log('Jim existingProposalCids', existingProposalCids)
    updateAppState(draft => {
      if (!draft.deals) {
        draft.deals = []
      }
      for (const { miner, wikiFile, dealCid, cid } of deals128mibVerified) {
        if (!existingProposalCids.has(dealCid)) {
          console.log('Add:', miner, wikiFile, dealCid, dealData[dealCid])
          if (dealData[dealCid]) {
            draft.deals.push({
              type: '128mib-verified',
              proposalCid: dealCid,
              date: new Date(dealData[dealCid].clientDealStatus.CreationTime),
              fromNode: 1,
              miner: miner,
              cid,
              wikiFile
            })
          } else {
            console.log(
              'Deal data not found, skipping',
              miner,
              wikiFile,
              dealCid
            )
          }
        }
      }
    })
  }
}
