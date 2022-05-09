import type { NextPage } from 'next'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
