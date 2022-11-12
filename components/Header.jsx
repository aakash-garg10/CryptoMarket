import Image from "next/image";
import Search from "../assets/svg/search";
import gstyles from "../styles/Glassmorphism.module.css";
import { ConnectButton } from 'web3uikit'
import { useContext } from "react";
import Link from "next/link";
// import { CoinMarketContext } from '../context/context'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import axios from 'axios';

const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[25px]; `,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#ffffff40] ml-5`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
  connectBtn:`bg-white-500 color-blue`
};

const Header = () => {

    const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { push } = useRouter();

    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });
        const userData = { address: account, chain: chain.id, network: 'evm' };
        const { data } = await axios.post('/api/auth/request-message', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const message = data.message;
        const signature = await signMessageAsync({ message });

        // redirect user after success authentication to '/user' page
        const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
        /**
         * instead of using signIn(..., redirect: "/user")
         * we get the url from callback and push it to the router to avoid page refreshing
         */
        push(url);
    };

  //   const { getQuote } = useContext(CoinMarketContext)
  return (
    <div className={`${styles.header} ${gstyles.glassdesign}`}>
      {/* <div className={styles.header}> */}
      <Image
        alt="logoImage"
        // src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        src="/logo.jpeg"
        width={220}
        height={220}
      />

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <Link href="/marketPlace">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Market</div>
              <div className={styles.badge} />
            </div>
          </Link>

          {/* <div className={styles.navItem} onClick={getQuote}> */}
          <Link href="/exchangeCoin">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Exchange</div>
            </div>
          </Link>

          <Link href="/team">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Team</div>
            </div>
          </Link>

          <Link href="/contactus">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Contact Us</div>
            </div>
          </Link>
        </nav>

        <div className="flex items-center">
        <button onClick={() => handleAuth()}>Connect Wallet</button>
          <div className={styles.inputContainer} >
            <Search />
            <input className={styles.input} placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
