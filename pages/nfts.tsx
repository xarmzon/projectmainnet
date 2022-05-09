import React from 'react'
import Footer from '../components/Sections/Footer'
import Header from '../components/Sections/Header'
import Newsletter from '../components/Sections/Newsletter'

const NFTsPage = () => {
  return (
    <>
      <Header showHeroAndPoweredBy={false} />
      {/* <Wallets /> */}
      <Newsletter />
      <Footer />
    </>
  )
}

export default NFTsPage
