import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-[95%] flex-col items-center space-y-3 pt-2 text-center sm:mb-12 sm:max-w-[90%] sm:space-y-6 md:max-w-full md:flex-row-reverse md:px-8 md:text-left lg:mt-8">
      <div className="relative h-52 w-full sm:h-72 md:h-96 md:w-1/2 md:flex-shrink-0 xl:h-[480px]">
        <Image
          src={'/images/cube.png'}
          layout="fill"
          alt="Box Image"
          objectFit="contain"
        />
      </div>
      <div className="flex w-full flex-col items-center space-y-3 sm:space-y-6 md:w-1/2 md:flex-shrink-0 md:items-start">
        <h1 className="text-gradient text-2xl font-bold capitalize tracking-wider md:leading-snug lg:text-4xl xl:text-5xl xl:leading-[1.4]">
          Unify all your wallet accounts without giving up your privacy or
          security.
        </h1>
        <p className="text-sm font-light tracking-wider sm:text-base lg:text-xl xl:text-2xl">
          A modern app that allow you to import and manage all of your crypto
          wallets account in one place.
        </p>
        <Link href={'#wallets'}>
          <a className="max-w-max cursor-pointer rounded-xl bg-linear2 py-2 px-5 font-semibold uppercase tracking-wide transition-all duration-[300ms] hover:bg-linear4 lg:py-4 lg:px-8 xl:text-2xl">
            Connect Now
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Hero
