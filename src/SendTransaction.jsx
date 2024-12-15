
import './Account.css'
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

export function SendTransaction() {
    const { data: hash, sendTransaction } = useSendTransaction()

    async function sendTx() {
        const to = document.getElementById("to").value;
        const value = document.getElementById("value").value;
        sendTransaction({ to, value: parseEther(value) });
    }

    
    return (
    <>
 <div className='card'>
    <div className="file">
    <div>
      <input id="to" placeholder=" Wallet-Address..." required  />
      <br />
      <input id="value" placeholder="0.05"  required />
      <br />
      <button onClick={sendTx}  className='button'>Send</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </div>
</div>
</div>
   </> )
}