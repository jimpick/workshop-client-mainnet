import React from 'react'
import DealList from './deal-list'
import useLotusClient from '../lib/use-lotus-client'

export default function Deals ({ appState, updateAppState }) {
  const { deals, selectedNode, filterErrors } = appState
  const client = useLotusClient(selectedNode, 'node')
  return (
    <div>
      <h1>Deals</h1>
      {deals && deals.length > 0 && (
        <>
          <button
            style={{ height: '2rem', marginBottom: '1rem' }}
            onClick={clearAll}
          >
            Clear
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
          </label>
        </>
      )}
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
}
