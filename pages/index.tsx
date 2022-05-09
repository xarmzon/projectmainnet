import type { NextPage } from 'next'
import About from '../components/Sections/About'
import Footer from '../components/Sections/Footer'
import Header from '../components/Sections/Header'
import Newsletter from '../components/Sections/Newsletter'
import Wallets from '../components/Sections/Wallets'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      {/* <Wallets /> */}
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
