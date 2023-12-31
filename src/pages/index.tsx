import { Home } from 'components/home/Home'
import Head from 'next/head'

export default function Main() {
  return (
    <>
      <Head>
        <title>AstroHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
