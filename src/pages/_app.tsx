
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import { useState } from 'react'
import { Menu } from '../components/Menu'
function MyApp({ Component, pageProps }: AppProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <GlobalStyle />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Header  setIsMenuOpen={setIsMenuOpen}/>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
