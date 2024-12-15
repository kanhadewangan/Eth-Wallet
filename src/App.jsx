import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { WalletOptions } from './WalletOptions'
import { Account } from './Account'
import { SendTransaction } from './SendTransaction'



const queryClient = new QueryClient()

function App() {
  return (
<>
    <h1>ETH Adapter</h1>

    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <WalletOptions />
        <Account  />
        <SendTransaction />
      </QueryClientProvider> 
    </WagmiProvider>
    </>
  )
}


export default App;