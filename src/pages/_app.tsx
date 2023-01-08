import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return <>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
  </>
}
