import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useImmer } from 'use-immer'
import { formatDistance } from 'date-fns'
import useLotusClient from '../lib/use-lotus-client'
import useWatchDefaultWallet from '../lib/use-watch-default-wallet'
import useScanNodesForCid from './use-scan-nodes-for-cid'
import { api, secure, downloadDir } from '../config'

export default function Retrieve ({ appState, updateAppState }) {
  const { cid } = useParams()
  const [found, scanningState] = useScanNodesForCid({ appState, cid })
  const [formCid, setFormCid] = useState(cid || '')
  const [retrievals, updateRetrievals] = useImmer({})
  const history = useHistory()
  const { selectedNode, defaultWalletAddress } = appState
  const client = useLotusClient(selectedNode, 'node')
  const balance = useWatchDefaultWallet({ client, updateAppState })

  useEffect(() => {
    setFormCid(cid || '')
  }, [cid])

  let content
  if (!found || found.length === 0) {
    content = null
  } else {
    content = (
      <div>
        {found.map((entry, i) => {
          if (entry.local) {
            return <div key={i}>Node #{entry.node}: Imported locally</div>
          } else {
            return (
              <div key={i}>
                Node #{entry.node}: Via miner {' '}
                {entry.remoteOffer.MinerPeer.Address}
                <div style={{ fontSize: '70%', margin: '0.5rem 1rem' }}>
                  Retrieval Price: {entry.remoteOffer.MinPrice}
                  <br />
                  <button
                    style={{ marginTop: '0.3rem' }}
                    onClick={retrieveAsJpeg}
                  >
                    Retrieve as JPEG
                  </button>
                  {retrievals[i] && (
                    <>
                      <div>State: {retrievals[i].state}</div>
                      {retrievals[i].error && (
                        <div>Error: {retrievals[i].error.message}</div>
                      )}
                      {retrievals[i].url && (
                        <div>
                          <img src={retrievals[i].url} alt='retrieved' />
                          <div>
                            Elapsed time:{' '}
                            {formatDistance(
                              retrievals[i].startTime,
                              retrievals[i].endTime,
                              { includeSeconds: true }
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )

            async function retrieveAsJpeg () {
              console.log('Retrieve as Jpeg', i, entry)
              /* Sample from CLI
                [
                  {
                    "Root": {
                      "/": "QmTpua3DsQvNiLMQYq2jNHuoULc9aCyf7orrPEJ4ArkWay"
                    },
                    "Piece": null,
                    "Size": 2048,
                    "Total": "4096",
                    "UnsealPrice": "0",
                    "PaymentInterval": 1048576,
                    "PaymentIntervalIncrease": 1048576,
                    "Client": "t3q32u43bpqph75drafx3uzz7vyilnmpxnfornt4ioswg4rnbyv324xv4nzdoueowujkp5ruusplpex67daswa",
                    "Miner": "t0100",
                    "MinerPeer": {
                      "Address": "t01000",
                      "ID": "12D3KooWAz5EG6omp5qJ2ZwUMrDFDqnQfkvxfqUjWFMqLyg9hCXF",
                      "PieceCID": {
                        "/": "baga6ea4seaqprbncq7j72kda536tffedf6rycximtxt5l45kjavfirjvek4eypq"
                      }
                    }
                  },
                  {
                    "Path": "/root/downloads/test2.jpg",
                    "IsCAR": false
                  }
                ]
              */
              const randomId = Math.floor(
                Math.random() * Number.MAX_SAFE_INTEGER
              )
              const o = entry.remoteOffer
              const startTime = Date.now()
              const retrievalOffer = {
                Root: o.Root,
                Piece: null,
                Size: o.Size,
                Total: o.MinPrice,
                UnsealPrice: o.UnsealPrice,
                PaymentInterval: o.PaymentInterval,
                PaymentIntervalIncrease: o.PaymentIntervalIncrease,
                Client: defaultWalletAddress,
                Miner: o.Miner,
                MinerPeer: o.MinerPeer
              }
              const fileRef = {
                Path: `${downloadDir}/${cid}-${randomId}.jpg`,
                IsCAR: false
              }
              try {
                console.log('Jim clientRetrieve', retrievalOffer, fileRef)
                updateRetrievals(draft => {
                  draft[i] = {
                    state: 'retrieving',
                    startTime
                  }
                })
                const result = await client.clientRetrieve(
                  retrievalOffer,
                  fileRef
                )
                console.log('Retrieve result', result)
                const endTime = Date.now()
                updateRetrievals(draft => {
                  draft[i] = {
                    state: 'success',
                    startTime,
                    endTime,
                    url:
                      (secure ? 'https://' : 'http://') +
                      `${api}/${selectedNode}/testplan/downloads/` +
                      `${cid}-${randomId}.jpg`
                  }
                })
              } catch (e) {
                console.error('Retrieve error', e)
                const errorTime = Date.now()
                updateRetrievals(draft => {
                  draft[i] = {
                    state: 'error',
                    errorTime,
                    error: e
                  }
                })
              }
            }
          }
        })}
      </div>
    )
  }

  return (
    <div>
      <h1>Retrieve</h1>
      <div>
        {cid && (
          <>
            <div style={{ marginBottom: '1rem' }}>
              CID: <span style={{ fontSize: '70%' }}>{cid}</span>
            </div>
            <div>
              Wallet address:{' '}
              <span style={{ fontSize: '50%' }}>{defaultWalletAddress}</span>
            </div>
            <div>
              Balance: {typeof balance !== 'undefined' && balance.toFil()} FIL
            </div>
          </>
        )}
        {!cid && (
          <>
            <span>CID:</span>
            <input
              type='text'
              spellCheck='false'
              value={formCid}
              onChange={e => {
                setFormCid(e.target.value)
                updateRetrievals(draft => {
                  draft = {}
                })
                history.push(`/retrieve`)
              }}
              style={{ width: '90%' }}
            ></input>
          </>
        )}
      </div>
      {!cid && (
        <button onClick={() => history.push(`/retrieve/${formCid}`)}>
          Find and Download
        </button>
      )}
      {scanningState && (
        <div style={{ padding: '1rem' }}>
          {scanningState.state === 'scanning' && (
            <>
              Scanning {scanningState.currentNode} of {scanningState.numNodes}{' '}
              nodes...
            </>
          )}
          {scanningState.state === 'finished' && (
            <>Scanned {scanningState.numNodes} nodes</>
          )}
        </div>
      )}
      {content}
    </div>
  )
}
