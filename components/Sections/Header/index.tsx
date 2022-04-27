import React from 'react'
import Hero from '../../Hero'
import Navbar from '../../Navbar/Navbar'
import PoweredBy from '../../PoweredBy'

const Header = () => {
  return (
    <header className="w-full bg-ab bg-cover pb-8" id="home">
      <Navbar />
      <Hero />
      <PoweredBy />
    </header>
  )
}

export default Header
