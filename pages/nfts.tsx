import { NextSeo } from 'next-seo'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import NFts from '../components/NFTs'

const NFTsPage = () => {
  return (
    <>
      <NextSeo title="Easily Manage your NFTs" />
      <Header showHeroAndPoweredBy={false} />
      <NFts />
      <Newsletter />
      <Footer />
    </>
  )
}

export default NFTsPage
