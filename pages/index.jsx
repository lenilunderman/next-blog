import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title> Home </title>
    </Head>
    <div>
      <h1 className={styles.title}> Homepage </h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      
      <Link href="/blogs">
        <a  className={styles.btn}> See all blog listing</a>
      </Link>
      
    </div>
    </>
  )
}
