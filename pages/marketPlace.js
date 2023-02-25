import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Trending from '../components/Trending'
import CMCtable from '../components/cmc-table/cmcTable'

const marketPlace = () => {
  return (
   <div className="min-h-screen">
    <Header />
    <div className="mt-10"></div>
    <Trending/>
    <div className="mt-16"></div>
    <CMCtable/>
   </div>
  )
}
//random tezt
export default marketPlace


