import React from 'react'
import Hero from '../../Hero'
import Navbar from '../../Navbar/Navbar'
import PoweredBy from '../../PoweredBy'

const Header = () => {
  return (
    <header
      className="w-full overflow-hidden bg-hero1 bg-[length:100%_780px] bg-no-repeat pb-8 md:bg-cover"
      id="home"
    >
      <Navbar />
      <Hero />
      <PoweredBy />
    </header>
  )
}

export default Header
