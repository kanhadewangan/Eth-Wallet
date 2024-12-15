import * as React from 'react'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button style={{ margin: "5px"}} key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
      
    </button>
  ))
}