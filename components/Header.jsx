import Image from "next/image";
import Search from "../assets/svg/search";
import gstyles from "../styles/Glassmorphism.module.css";
// import { ConnectButton } from 'web3uikit'
import { useContext } from "react";
import Link from "next/link";
// import { CoinMarketContext } from '../context/context'

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

<<<<<<< HEAD
          <Link href="/contactus">
            <div className={styles.navItem}>
              <div className={styles.navLink}>Contact Us</div>
            </div>
          </Link>
=======
        */}

          <div className={styles.navItem}>
            <div className={styles.navLink}>Teams</div>
          </div>
          {/* 
          <div className={styles.navItem}>
            <div className={styles.navLink}>Products</div>
            <div className={styles.badge} />
          </div> */}

          <div className={styles.navItem}>
            <div className={styles.navLink}>Contact Us</div>
          </div>
>>>>>>> 43fc75755abdd1e1a5c4cd5d0d1fd16071aef935
        </nav>

        <div className="flex items-center">
          {/* <ConnectButton /> */}
          <div className={styles.inputContainer}>
            <Search />
            <input className={styles.input} placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
