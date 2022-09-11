import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Landing.module.css";
import Link from "next/link";

export default function Home() {
  // const left = document.querySelector('.left')
  // const right = document.querySelector('.right')
  // const container = document.querySelector('.container')

  // left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
  // left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

  // right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
  // right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.split} ${styles.left}`}>
          <h1>MarketPlace</h1>

          <Link href="/marketPlace">
            <button className={styles.btn}>Visit Now</button>
          </Link>
        </div>
        <div className={`${styles.split} ${styles.right}`}>
          <h1>Exchange Coin</h1>
          <Link href="/exchangeCoin">
            <button className={styles.btn}>Visit Now</button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 4rem;
            color: #fff;
            position: absolute;
            left: 50%;
            top: 20%;
            transform: translateX(-50%);
            white-space: nowrap;
          }

          button {
            text-decoration: none;
            position: absolute;
            border: none;
            font-size: 14px;
            font-family: inherit;
            color: #fff;
            width: 9em;
            height: 3em;
            line-height: 2em;
            text-align: center;
            background: linear-gradient(
              90deg,
              #03a9f4,
              #f441a5,
              #ffeb3b,
              #03a9f4
            );
            background-size: 300%;
            border-radius: 30px;
            z-index: 1;
            border: none;
          }

          button:hover {
            animation: ani 8s linear infinite;
            border: none;
          }
          @keyframes ani {
            0% {
              background-position: 0%;
            }
          
            100% {
              background-position: 400%;
            }
          }

          button:before {
            content: "";
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            z-index: -1;
            background: linear-gradient(
              90deg,
              #03a9f4,
              #f441a5,
              #ffeb3b,
              #03a9f4
            );
            background-size: 400%;
            border-radius: 35px;
            transition: 1s;
          }

          button:hover::before {
            filter: blur(20px);
          }

          button:active {
            background: linear-gradient(
              32deg,
              #03a9f4,
              #f441a5,
              #ffeb3b,
              #03a9f4
            );
          }
          @media (max-width: 800px) {
            h1 {
              font-size: 2rem;
              top: 30%;
            }
          }
        `}
      </style>
    </>
  );
}
