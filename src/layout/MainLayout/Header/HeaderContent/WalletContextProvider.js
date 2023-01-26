
import * as web3 from '@solana/web3.js'
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';
require('@solana/wallet-adapter-react-ui/styles.css');

const WalletContextProvider = ({ children }) => {
  const endpoint = web3.clusterApiUrl('devnet')
	const wallets = [
		new walletAdapterWallets.PhantomWalletAdapter(),
		new walletAdapterWallets.SolflareWalletAdapter()
	]

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets}>
				<WalletModalProvider>
					{children}
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	)
}

export default WalletContextProvider