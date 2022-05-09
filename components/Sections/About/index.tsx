import Image from 'next/image'
import React from 'react'
import { ABOUT_DATA, APP_NAME } from '../../../utils/constants'

const About = () => {
  return (
    <section
      id="about"
      className="my-10 min-h-screen bg-ab2 bg-cover bg-center py-8 md:px-5"
    >
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center space-y-8 p-5 sm:max-w-lg sm:space-y-12 md:max-w-xl lg:max-w-6xl">
        {ABOUT_DATA.map((item, i) => (
          <div
            className={`flex flex-col text-center ${
              i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:items-center lg:text-left`}
            key={i}
          >
            <div className="space-y-5 lg:w-1/2">
              <h3 className="text-2xl font-semibold sm:text-3xl lg:text-[40px] lg:leading-[1.3]">
                <span className="">{item.heading1} </span>
                <span className="bg-lg1 bg-clip-text text-transparent">
                  {item.heading2}
                </span>
              </h3>
              <p className="font-light leading-relaxed lg:text-lg">
                {item.description}
              </p>
            </div>

            <div className="relative h-52 sm:h-64 md:h-72 lg:w-1/2">
              <Image
                src={`/images/${item.image}.png`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                alt={`${item.image} image`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
