import { NextSeo } from 'next-seo'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Wallets from '../components/Wallets'

const WalletsPage = () => {
  return (
    <>
      <NextSeo title="Easily Manage your Wallets" />
      <Header showHeroAndPoweredBy={false} />
      <Wallets />
      <Newsletter />
      <Footer />
    </>
  )
}

export default WalletsPage
