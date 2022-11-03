import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const marketPlace = () => {
  return (
   <div className="min-h-screen">
    <Header />
    <div className="mt-10"></div>
    {/* Trending */}
    <div className="mt-20"></div>
    {/* CoinTable */}
   </div>
  )
}

export default marketPlace


