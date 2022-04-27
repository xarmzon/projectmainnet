import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="flex flex-col items-center space-y-5 pt-8 text-center">
      <h1 className="text-gradient text-2xl font-bold capitalize tracking-wider md:text-4xl md:leading-snug lg:text-5xl xl:text-6xl xl:leading-[1.4]">
        Unify all your wallet accounts without giving up your privacy or
        security.
      </h1>
      <p className="text-xs font-light tracking-wider sm:text-base md:text-lg lg:text-xl">
        A modern app that allow you to import and manage all of your crypto
        wallets account in one place.
      </p>
      <Link href={'#wallets'}>
        <a className="max-w-max cursor-pointer rounded-xl bg-linear2 py-2 px-5 font-semibold uppercase tracking-wide transition-all duration-[300ms] hover:bg-linear4">
          Connect Now
        </a>
      </Link>
    </section>
  )
}

export default Hero
