import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Landing.module.css";
import Link from "next/link";

export default function Home() {
   function leftchangeBackground(e) {
    const right = document.querySelector(".Landing_right__XteyY");
    const headright = document.querySelector(".Landing_right__XteyY h1");
    const left = document.querySelector(".Landing_left__t2dm2");
    const headleft = document.querySelector(".Landing_left__t2dm2 h1");
    const container = document.querySelector(".Landing_container__MoEnB");

    right.style.width = "25%";
    left.style.width = "75%";
    headright.style.fontSize = '3rem';
    headleft.style.fontSize = '4rem'
  }
  function rightchangeBackground(e) {
    const right = document.querySelector(".Landing_right__XteyY");
    const headright = document.querySelector(".Landing_right__XteyY h1");
    const left = document.querySelector(".Landing_left__t2dm2");
    const headleft = document.querySelector(".Landing_left__t2dm2 h1");
    const container = document.querySelector(".Landing_container__MoEnB");

    right.style.width = "75%";
    left.style.width = "25%";
    headleft.style.fontSize='3rem';
    headright.style.fontSize='4rem';
    
  }
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={styles.logoSection}>
          <h2 className={styles.logoHeading}>CRYPTO EXCHANGER</h2>
        </div>
        <div
          className={`${styles.split} ${styles.left}`}
          onMouseEnter={leftchangeBackground}
        >
          <h1>MarketPlace</h1>
          <Link href="/marketPlace">
            <button className={styles.btn}>Visit Now</button>
          </Link>
        </div>

        <div
          className={`${styles.split} ${styles.right}`}
          onMouseEnter={rightchangeBackground}
        >
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
