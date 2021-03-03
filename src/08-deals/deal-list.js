import React, { useEffect, useState } from 'react'
import useMiners from '../lib/use-miners'
import { format, formatDistance } from 'date-fns'
import copy from 'clipboard-copy'
import annotations from '../annotations-mainnet'
import annotations128mibUnverified from '../annotations-mainnet-128mib-unverified'
import dealStateNames from './deal-state-names'

function DealHistory ({ dealHistoryData, height }) {
  if (!dealHistoryData || !height) return null
  const now = Date.now()

  return (
    <table style={{ fontSize: '70%' }}>
      <tbody>
        {dealHistoryData.map((record, i) => {
          return (
            <tr key={i}>
              <td>{dealStateNames[record[0]]}</td>
              <td>{blocks(i)}</td>
              <td>{timeElapsed(i)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  function blocks (i) {
    const start = dealHistoryData[i][1]
    const end =
      i < dealHistoryData.length - 1 ? dealHistoryData[i + 1][1] : height
    return `${start} (${end - start} blocks)`
  }

  function timeElapsed (i) {
    const start = dealHistoryData[i][2]
    const end = i < dealHistoryData.length - 1 ? dealHistoryData[i + 1][2] : now
    return (
      `${format(start, 'kk:mm:ss')} ` +
      `(${formatDistance(start, end, { includeSeconds: true })})`
    )
  }
}

export default function DealList ({ client, appState, cid, filterErrors }) {
  const [now, setNow] = useState(Date.now())
  const [height, setHeight] = useState()

  useEffect(() => {
    const state = { canceled: false }
    if (!client) return
    async function run () {
      if (state.canceled) return
      const { Height: height } = await client.chainHead()
      if (state.canceled) return
      setHeight(height)
      setNow(Date.now())
      setTimeout(run, 1000)
    }
    run()
    return () => {
      state.canceled = true
    }
  }, [client])

  if (!appState.deals) return null
  const { dealData, dealHistory } = appState

  let deals = cid
    ? appState.deals.filter(deal => deal.cid === cid)
    : [...appState.deals]
  deals.sort(({ date: a }, { date: b }) => b - a)

  const filteredDeals = deals.filter(deal => {
    if (!filterErrors) return true
    const { proposalCid } = deal
    const data = dealData && dealData[proposalCid]
    const clientDealStatus = data && data.clientDealStatus
    const dealState = clientDealStatus && clientDealStatus.State
    return dealState !== 26
  })

  const allRetrieveScripts = []
  return (
    <div>
      {filteredDeals.map((deal, i) => {
        const { proposalCid, fromNode, miner, date, cid: cidDeal, type } = deal
        const data = dealData && dealData[proposalCid]
        const clientDealStatus = data && data.clientDealStatus
        // const dealState = clientDealStatus && clientDealStatus.State
        const dealMessage = clientDealStatus && clientDealStatus.Message
        const dealHistoryData = dealHistory && dealHistory[proposalCid]
        // if (filterErrors && dealState === 22) return null
        const retrieveScript =
          clientDealStatus &&
          dealStateNames[clientDealStatus.State] === 'Active' &&
          `(TIMESTAMP=\`date +%s\`; /usr/bin/time timeout -k 11m 10m ` +
            `lotus client retrieve --miner=${miner} ${cidDeal} ` +
            `/home/lotus1/downloads/${miner}-` +
            `${clientDealStatus && clientDealStatus.DealID}-$TIMESTAMP.jpg ` +
            `2>&1 | tee /home/lotus1/downloads/${miner}-` +
            `${clientDealStatus && clientDealStatus.DealID}-$TIMESTAMP.log); ` +
            `sleep 5`
        if (retrieveScript) {
          allRetrieveScripts.push(retrieveScript)
        }

        let prefix = '??'
        let annotation = '??'
        let altAnnotation = '??'
        if (type === 'camera') {
          prefix = 'Camera'
          annotation = annotations[miner]
          altAnnotation = annotations128mibUnverified[miner]
        }
        if (type === '128mibUnverified') {
          prefix = '128M-U'
          annotation = annotations128mibUnverified[miner]
          altAnnotation = annotations[miner]
        }
        return (
          <div key={proposalCid} style={{ marginBottom: '1rem' }}>
            <div>
              {i + 1}. {prefix}: Node #{fromNode} {'->'} Miner {miner}
              {annotation && <span> ({annotation})</span>}
            </div>
            <div style={{ fontSize: '50%' }}>
              <div>
                Type: {type} Date: {new Date(date).toString()}
              </div>
              <div>
                Alternate: {altAnnotation}
              </div>
              {!cid && (
                <div>
                  CID: {cidDeal} <button onClick={copyCid}>Copy</button>
                </div>
              )}
              <div>Proposal CID: {proposalCid}</div>
              <div>Deal ID: {clientDealStatus && clientDealStatus.DealID}</div>
              <div>Size: {clientDealStatus && clientDealStatus.Size}</div>
              <div>
                Last update:{' '}
                {data && formatDistance(data.updatedAtTime, now) + ' ago'}
              </div>
              {dealMessage && <div>Message: {dealMessage}</div>}
            </div>
            <DealHistory dealHistoryData={dealHistoryData} height={height} />
            {retrieveScript && (
              <div>
                <details>
                  <summary>Retrieve Script</summary>
                  <pre>{retrieveScript}</pre>
                  <button onClick={copyShellRetrieve}>Copy to Clipboard</button>
                </details>
              </div>
            )}
          </div>
        )

        async function copyCid () {
          console.log('Copying to clipboard', cidDeal)
          await copy(cidDeal)
          console.log('Copied.')
        }
        async function copyShellRetrieve () {
          console.log('Copying to clipboard', retrieveScript)
          await copy(retrieveScript)
          console.log('Copied.')
        }
      })}
      <div>
        <details>
          <summary>All Retrieve Scripts</summary>
          <pre>{allRetrieveScripts.join('\n')}</pre>
          <button onClick={copyShellAllRetrieve}>Copy to Clipboard</button>
        </details>
      </div>
    </div>
  )
  async function copyShellAllRetrieve () {
    console.log('Copying to clipboard', allRetrieveScripts)
    await copy(allRetrieveScripts.join('\n'))
    console.log('Copied.')
  }
}
