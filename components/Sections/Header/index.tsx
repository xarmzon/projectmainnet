import React from 'react'
import Hero from '../../Hero'
import Navbar from '../../Navbar/Navbar'
import PoweredBy from '../../PoweredBy'

const Header = () => {
  return (
    <header className="bg-hero bg-cover pb-8" id="home">
      <div className="rcontainer">
        <Navbar />
        <Hero />
        <PoweredBy />
      </div>
    </header>
  )
}

export default Header
