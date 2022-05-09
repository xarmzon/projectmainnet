import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { DEFAULT_SEO } from '../utils/constants'
import { useEffect, useState } from 'react'
import aos from 'aos'
import { Toaster } from 'react-hot-toast'
import PageLoader from '../components/Loader/PageLoader'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loadingPage, setLoadingPage] = useState<boolean>(false)

  useEffect(() => {
    const startPageLoading = () => setLoadingPage(true)
    const stopPageLoading = () => setLoadingPage(false)

    router.events.on('routeChangeStart', startPageLoading)
    router.events.on('routeChangeComplete', stopPageLoading)
    router.events.on('routeChangeError', stopPageLoading)

    return () => {
      router.events.off('routeChangeStart', startPageLoading)
      router.events.off('routeChangeComplete', stopPageLoading)
      router.events.off('routeChangeError', stopPageLoading)
    }
  }, [router])
  useEffect(() => {
    aos.init()

    window.addEventListener('load', aos.refresh)
  }, [])
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      {loadingPage && <PageLoader />}
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
