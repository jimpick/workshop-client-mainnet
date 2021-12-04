import React, { useEffect, useState, useMemo } from 'react'
import copy from 'clipboard-copy'
import delay from 'delay'
import useLotusClient from '../lib/use-lotus-client'
import useWatchDefaultWallet from '../lib/use-watch-default-wallet'
//import useMiners from '../lib/use-miners'
import annotations from '../annotations'
import DealList from '../08-deals/deal-list'

export default function ProposeDeal ({ appState, updateAppState }) {
  const {
    selectedNode,
    filterNewMiners,
    filterRetestMiners,
    filterSealingMiners,
    filterActiveMiners,
    filterDialMiners,
    filterErrorMiners,
    filterBackoffMiners,
    filterMinMiners,
    filterStuckMiners,
    filterBusyMiners,
    filterRejectedMiners,
    filterNonRoutable
  } = appState
  const client = useLotusClient(selectedNode, 'node')
  // const [miners, annotations] = useMiners(client)
  const miners = Object.keys(annotations)
  const balance = useWatchDefaultWallet({ client, updateAppState })
  const [objectUrlAttribute, setObjectUrlAttribute] = useState()
  const [status, setStatus] = useState()
  const {
    versionInfo,
    cid,
    importedNode,
    defaultWalletAddress,
    capture: { width, height },
    deals
  } = appState
  const blockDelay = versionInfo && versionInfo.BlockDelay
  // const epochPrice = '2500'
  // const epochPrice = '976562'
  // const epochPrice = '2000000'
  const epochPrice = '20000000'
  // const epochPrice = '20000'

  const dealMiners = useMemo(() => {
    const dealMiners = new Set()
    if (!deals) return dealMiners
    for (const { miner } of deals) {
      dealMiners.add(miner)
    }
    return dealMiners
  }, [deals])

  const nonDelistedMiners = useMemo(() => {
    if (miners) {
      return miners.filter(
        miner =>
          !annotations[miner].match(/^delist/) &&
          !annotations[miner].match(/^skip/) &&
          !annotations[miner].match(/^nopeer/)
      )
    }
    return miners
  }, [miners])

  const filteredMiners = useMemo(() => {
    const miners = nonDelistedMiners
    if (filterNewMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^new/))
    }
    if (filterRetestMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^retest/))
    }
    if (filterSealingMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^sealing/))
    }
    if (filterActiveMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^active/))
    }
    if (filterDialMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/dial/i))
    }
    if (filterErrorMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^error/i))
    }
    if (filterBackoffMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^backoff/i))
    }
    if (filterMinMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^min-/i))
    }
    if (filterStuckMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^stuck/i))
    }
    if (filterBusyMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^busy/i))
    }
    if (filterRejectedMiners && miners) {
      return miners.filter(miner => annotations[miner].match(/^rejected/i))
    }
    if (filterNonRoutable && miners) {
      return miners.filter(miner => annotations[miner].match(/^xnr/i))
    }
    return miners
  }, [
    nonDelistedMiners,
    filterNewMiners,
    filterRetestMiners,
    filterSealingMiners,
    filterActiveMiners,
    filterDialMiners,
    filterErrorMiners,
    filterBackoffMiners,
    filterMinMiners,
    filterStuckMiners,
    filterBusyMiners,
    filterNonRoutable
  ])

  useEffect(() => {
    const objectUrl = URL.createObjectURL(appState.capture.blob)
    setObjectUrlAttribute({ src: objectUrl })
    return () => {
      setObjectUrlAttribute(null)
      URL.revokeObjectURL(objectUrl)
    }
  }, [appState.capture])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Propose a Storage Deal</h2>
      <h4>1. Imported image to node #{importedNode}</h4>
      <div style={{ display: 'flex' }}>
        <div style={{ border: '1px solid black', height }}>
          <img alt='' width={width} height={height} {...objectUrlAttribute} />
        </div>
        <div style={{ padding: '1rem' }}>
          <div>{appState.capture.blob.size} bytes</div>
          <button
            onClick={() => {
              updateAppState(draft => {
                delete draft.capture
                delete draft.cid
                delete draft.importedNode
              })
            }}
          >
            Retake
          </button>
        </div>
      </div>
      <h4>2. A few more details to include in our storage deal proposal</h4>
      <div style={{ textAlign: 'left', fontSize: '80%' }}>
        <div>
          CID:{' '}
          <span style={{ fontSize: '70%' }}>
            {cid} {cid && <button onClick={copyCid}>Copy</button>}
            <br />
          </span>
          <span style={{ fontSize: '70%' }}>
            Generated by hashing your file, same as IPFS CID
            <br />
            <br />
          </span>
        </div>
        <div>
          Wallet address:{' '}
          <span style={{ fontSize: '50%' }}>{defaultWalletAddress}</span>
        </div>
        <div>
          Balance: {typeof balance !== 'undefined' && balance.toFil()} FIL
        </div>
      </div>
      <h4>3. Click a miner to propose a deal</h4>
      <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        Filters:
        <label>
          <input
            type='checkbox'
            checked={filterNewMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterNewMiners = !filterNewMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'new'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterRetestMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterRetestMiners = !filterRetestMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'retest'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterActiveMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterActiveMiners = !filterActiveMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'active'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterSealingMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterSealingMiners = !filterSealingMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'sealing'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterMinMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterMinMiners = !filterMinMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'min-*'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterStuckMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterStuckMiners = !filterStuckMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'stuck'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterBusyMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterBusyMiners = !filterBusyMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'busy'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterErrorMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterErrorMiners = !filterErrorMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'error'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterBackoffMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterBackoffMiners = !filterBackoffMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'backoff'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterRejectedMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterRejectedMiners = !filterRejectedMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'rejected'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterDialMiners}
            onChange={() => {
              updateAppState(draft => {
                draft.filterDialMiners = !filterDialMiners
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'dial'
        </label>
        <label>
          <input
            type='checkbox'
            checked={filterNonRoutable}
            onChange={() => {
              updateAppState(draft => {
                draft.filterNonRoutable = !filterNonRoutable
              })
            }}
            style={{ marginLeft: '1rem' }}
          />
          'xnr'
        </label>
      </div>
      {filteredMiners && dealMiners && (
        <div>
          Miners: {filteredMiners.filter(miner => dealMiners.has(miner)).length}{' '}
          / {filteredMiners.length}{' '}
          <button onClick={() => proposeBatch(10)}>Propose 10</button>
          <button onClick={() => proposeBatch(100)}>Propose 100</button>
          <button onClick={() => proposeBatch(1000)}>Propose 1000</button>
          <button onClick={() => proposeBatch(10000)}>Propose 10,000</button>
        </div>
      )}
      <div style={{ maxHeight: '15rem', overflowY: 'scroll', width: '70vw' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {filteredMiners &&
            filteredMiners.map(miner => {
              return (
                <button
                  key={miner}
                  style={{ width: '20rem', height: '4rem' }}
                  onClick={() => proposeDeal(miner)}
                >
                  {dealMiners.has(miner) ? (
                    <strike>
                      {miner}: {annotations[miner]}
                    </strike>
                  ) : (
                    <span>
                      {miner}: {annotations[miner]}
                    </span>
                  )}
                </button>
              )
            })}
        </div>
      </div>
      <div>{status}</div>
      <br />
      <h4>Deals we've made for this data:</h4>
      <DealList
        client={client}
        appState={appState}
        updateAppState={updateAppState}
        cid={cid}
      />
    </div>
  )

  async function copyCid () {
    console.log('Copying to clipboard', cid)
    await copy(cid)
    console.log('Copied.')
  }

  async function proposeDeal (targetMiner) {
    const dataRef = {
      Data: {
        TransferType: 'graphsync',
        Root: {
          '/': cid
        },
        PieceCid: null,
        PieceSize: 0
      },
      Wallet: defaultWalletAddress,
      Miner: targetMiner,
      EpochPrice: epochPrice,
      MinBlocksDuration: (200 * 24 * 60 * 60) / blockDelay,
      FastRetrieval: true,
      VerifiedDeal: false
    }
    setStatus(`Proposing to ${targetMiner} ...`)
    try {
      const result = await client.clientStartDeal(dataRef)
      const { '/': proposalCid } = result
      setStatus(`Proposed! ${targetMiner}`)
      updateAppState(draft => {
        draft.proposalCid = proposalCid
        if (!draft.deals) {
          draft.deals = []
        }
        draft.deals.push({
          type: 'camera',
          proposalCid,
          date: Date.now(),
          fromNode: selectedNode,
          miner: targetMiner,
          cid
          // FIXME: Block height
          // FIXME: Local blob, size
        })
      })
    } catch (e) {
      setStatus(`Error ${targetMiner}: ` + e.message)
      console.log('Exception', targetMiner, e)
    }
  }

  async function proposeBatch (num) {
    const candidates = filteredMiners.filter(miner => !dealMiners.has(miner))
    if (candidates.length > num) {
      candidates.length = num
    }
    for (const miner of candidates) {
      await proposeDeal(miner)
      await delay(1000)
    }
  }
}
