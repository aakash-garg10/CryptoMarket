import Image from "next/image";
import Search from "../assets/svg/search";
import gstyles from "../styles/Glassmorphism.module.css";
import { ConnectButton } from 'web3uikit'
import { useContext } from "react";
import Link from "next/link";
// import { CoinMarketContext } from '../context/context'
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import axios from 'axios';

const styles = {
  navLink: `text-white flex mx-[10px]`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  nav: `flex justify-center items-center gap-[20px]`,
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[25px]; `,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#ffffff40]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
  cursorPointer: `mr-5 cursor-pointer`,
};

const Header = () => {

  const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();

    const handleAuth = async () => {
        //disconnects the web3 provider if it's already active
        if (isConnected) {
            await disconnectAsync();
        }
        // enabling the web3 provider metamask
        const { account, chain } = await connectAsync({ connector: new InjectedConnector() });

        const userData = { address: account, chain: chain.id, network: 'evm' };
        // making a post request to our 'request-message' endpoint
        const { data } = await axios.post('/api/auth/request-message', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const message = data.message;
        // signing the received message via metamask
        const signature = await signMessageAsync({ message });

        console.log(signature)
    };

  //   const { getQuote } = useContext(CoinMarketContext)
  return (
    <div className={`${styles.header} ${gstyles.glassdesign}`}>
      {/* <div className={styles.header}> */}
      <Image
        alt="logoimage"
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
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
