import Image from 'next/image'
import React from 'react'
import { APP_NAME } from '../../../utils/constants'

const About = () => {
  return (
    <section
      id="about"
      className="container my-10 flex flex-col justify-center bg-ab bg-cover py-8 md:px-5"
    >
      <div className="mx-auto flex w-full max-w-[90%] flex-col space-y-5 md:max-w-full">
        <h2 className="mb-2 text-center text-2xl font-bold sm:text-2xl lg:text-4xl xl:text-4xl">
          Get To Know Us
        </h2>
        <div className="flex flex-col sm:space-y-5 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="w-full text-center md:w-1/2 md:flex-shrink-0 md:text-left">
            <p className="text-sm font-light leading-normal sm:text-base md:text-base lg:text-lg xl:text-2xl">
              We powered next generation application for blockchain and
              cryptocurrency asset management which enables you to manually or
              automatically sync your crypto wallets accounts into a single
              platform.
            </p>
            <p className="mt-3 text-sm font-light leading-normal sm:text-base md:text-base lg:text-lg xl:text-2xl">
              One combined view for all of the transaction histories across all
              of your accounts.
            </p>
          </div>
          <div className="w-full md:w-[45%] md:flex-shrink-0">
            <div className="relative h-52 w-full md:h-36 lg:h-44 xl:h-48">
              <Image
                src={`/images/view-dashboard.png`}
                layout="fill"
                objectFit="contain"
                alt="view-dashboard image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
