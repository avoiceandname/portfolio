import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/Footer'
import Header from '../src/Header'
import Main from '../src/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="text-white bg-black">
      {/* <NextSeo
      title="Kat Miller"
      description="Kat Miller: Unexpected Joy"
      canonical="https://nine4-1.vercel.app/"
      openGraph={{
        url: "https://nine4-1.vercel.app/",
      }}
    /> */}
      <Head>
        <title>Kat Miller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
