import Image from 'next/image'
import Link from 'next/link'
import { BiUser, BiWallet } from 'react-icons/bi'
import { menuItems } from '../../utils/constants'
import Stats from './Stats'

const Hero = () => {
  return (
    <section className="mx-auto mb-10 flex max-w-[95%] flex-col items-center space-y-3 pt-2 text-center sm:mb-12 sm:max-w-[90%] sm:flex-row-reverse sm:text-left md:max-w-full md:px-8 lg:mt-8">
      <div className="relative h-52 w-full sm:ml-2 sm:h-72 sm:w-[45%] md:h-96 md:flex-shrink-0 xl:h-[480px]">
        <Image
          src={'/images/cube_img.png'}
          layout="fill"
          alt="Box Image"
          objectFit="contain"
        />
      </div>
      <div className="flex w-full flex-col items-center space-y-3 sm:w-[55%] sm:flex-shrink-0 sm:items-start sm:space-y-10 lg:space-y-14">
        <div className="mb-3 sm:-mb-4 sm:mt-8">
          <div className="flex h-5 w-full items-center overflow-hidden rounded-full bg-primary-blue3/70 py-4 text-sm sm:h-10 md:text-base">
            <div className="flex min-h-[50px] min-w-[50px] items-center bg-lg2">
              <span className="hidden md:flex md:h-[40px] md:items-center md:p-4">
                WEB3.0
              </span>
            </div>
            <span className="bg-lg3 bg-clip-text pl-3 pr-4 font-semibold text-transparent">
              PEOPLE-POWERED NETWORKS.
            </span>
          </div>
        </div>
        <div className="">
          <h1 className="text-gradient text-3xl font-bold capitalize tracking-wider md:text-4xl md:leading-snug md:tracking-normal lg:text-6xl xl:leading-[1.4]">
            <span className="bg-lg1 bg-clip-text text-transparent">
              See the future.
            </span>
            <br />
            <span className="">
              Transact with <br />
              confidence.
            </span>
          </h1>
          <p className="mt-4 text-sm font-light tracking-wider sm:text-base lg:mt-6 lg:text-lg">
            A modern app that allow you to import and manage all of your crypto
            wallets account in one place.
          </p>
        </div>
        <div className="flex space-x-8 sm:space-x-5">
          <Link href={menuItems[1].link}>
            <a className="max-w-max cursor-pointer rounded-xl bg-lg2 py-2 px-5 font-semibold uppercase tracking-wide transition-all duration-[300ms] hover:bg-lg3 lg:py-4 lg:px-8 xl:text-2xl">
              {menuItems[1].name}
            </a>
          </Link>
          <Link href={menuItems[2].link}>
            <a className="flex w-28 cursor-pointer items-center justify-center rounded-xl bg-lg3 py-2 px-5 font-semibold uppercase tracking-wide transition-all duration-[300ms] hover:bg-lg2 lg:py-4 lg:px-8 xl:text-2xl">
              {menuItems[2].name}
            </a>
          </Link>
        </div>
        <div className="flex w-full flex-row items-center justify-center space-x-5 py-4 md:justify-start">
          <Stats
            className="!bg-lg2 !text-gray-100"
            text="Users"
            count={2000}
            icon={<BiUser />}
          />
          <Stats
            className="!bg-lg3 !text-gray-100"
            text="Wallets"
            count={70}
            icon={<BiWallet />}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
