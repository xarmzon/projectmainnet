import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Wallets from '../components/Wallets'

const WalletsPage = () => {
  return (
    <>
      <Header showHeroAndPoweredBy={false} />
      <Wallets />
      <Newsletter />
      <Footer />
    </>
  )
}

export default WalletsPage
