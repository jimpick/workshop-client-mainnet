import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div>
      <h2>Home</h2>
      <p>
        Workshop Client - Testnet/Interopnet edition
      </p>
      <p>
        Looking for <Link to='/examples'>simpler code examples</Link>?
      </p>
    </div>
  )
}
