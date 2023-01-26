// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import WalletContextProvider from './WalletContextProvider';

// ==============================|| HEADER - CONTENT ||============================== //
import { Chat } from '@pushprotocol/uiweb';
import Utils from 'utils/utils';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    return (
        <>
            {!matchesXs && <Search />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

            <Notification />
            <WalletContextProvider>
                <WalletMultiButton/>
            </WalletContextProvider>
            
            
            <Chat
                account={Utils.getMyAddress()} //user address
                supportAddress="0x2C0a5B16b9C51ac466ee50baF95b6176Fb9f2b36" //support address
                apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
                env="staging"
            />
            {!matchesXs && <Profile />}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
