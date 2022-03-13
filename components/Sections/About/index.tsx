import Image from 'next/image'
import React from 'react'
import { APP_NAME } from '../../../utils/constants'

const About = () => {
  return (
    <section
      id="about"
      className="sm:center mb-5 flex min-h-[70vh] flex-col justify-center bg-about bg-cover pb-5 sm:min-h-[40vh] sm:bg-[length:700px_350px] sm:bg-no-repeat md:bg-[length:800px_350px] lg:bg-contain lg:bg-repeat-x"
    >
      <div className="rcontainer flex flex-col">
        <div className="text-center md:mb-6">
          <h2 className="xl:4xl mb-2 text-xl font-bold sm:text-2xl lg:text-4xl">
            Why {APP_NAME}?{' '}
          </h2>
          <p className="font-roboto text-xs font-light leading-normal sm:mx-auto sm:max-w-lg sm:text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg xl:max-w-3xl xl:text-2xl">
            We powered next generation application for blockchain and
            cryptocurrency asset management which enables you to manually or
            automatically sync your crypto wallets accounts into a single
            platform.
          </p>
        </div>
        <div className="mt-5 flex flex-col-reverse justify-center text-center sm:flex-row sm:items-center sm:text-left">
          <div className="sm:w-1/2">
            <div className="relative h-32 w-full md:h-36 lg:h-44 xl:h-48">
              <Image
                src={`/images/view-dashboard.png`}
                layout="fill"
                objectFit="contain"
                alt="view-dashboard image"
              />
            </div>
          </div>
          <div className="mb-3 flex-shrink-0 sm:mb-0 sm:w-1/2 sm:pl-4 lg:pl-0">
            <h3 className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              View All Your Transactions
            </h3>
            <p className="text-sm font-light sm:mx-auto sm:max-w-sm md:mx-0 md:text-lg lg:text-xl">
              One combined view for all of the transaction histories across all
              of your accounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
