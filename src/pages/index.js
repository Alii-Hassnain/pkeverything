import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from 'components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PkEverything</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <NavBar />
      </div>

      <Script
        src="https://kit.fontawesome.com/8a40a6fca5.js"
        crossOrigin="anonymous"
      />
    </>
  );
}
