import '../styles/globals.css'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { DEFAULT_SEO } from '../utils/constants'
import { useEffect } from 'react'
import aos from 'aos'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    aos.init()

    window.addEventListener('load', aos.refresh)
  }, [])
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
