import React from 'react'
import Hero from '../../Hero'
import Navbar from '../../Navbar/Navbar'
import PoweredBy from '../../PoweredBy'

interface IHeader {
  showHeroAndPoweredBy?: boolean
}
const Header = ({ showHeroAndPoweredBy = true }: IHeader) => {
  return (
    <header
      className={`container w-full overflow-hidden ${
        showHeroAndPoweredBy
          ? 'bg-hero1 bg-[length:100%_780px] bg-no-repeat pb-8 md:bg-cover'
          : ''
      }`}
      id="home"
    >
      <Navbar />
      {showHeroAndPoweredBy && (
        <>
          <Hero />
          <PoweredBy />
        </>
      )}
    </header>
  )
}

export default Header
