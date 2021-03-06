import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/css'
import { poweredBy } from '../../utils/constants'
import Image from 'next/image'

const PoweredBy = () => {
  return (
    <div className="mw-contents mx-auto mt-5  max-w-[90%]  flex-col rounded-md border-[1px] border-white/20 py-2 sm:p-5">
      <div className="mb-4 px-8 text-center text-xs sm:text-base lg:text-lg">
        Easily import your existing wallets with 12/18/24-word recovery phrase
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="text-center sm:w-[60%] sm:flex-shrink-0 sm:text-left md:w-[55%]">
          {/* <h3 className="text-gradient2 mb-2 text-sm font-bold sm:text-xl lg:text-3xl xl:text-4xl">
            POWERED BY
          </h3> */}
          <p className="bg-lg1 bg-clip-text text-sm font-semibold text-transparent sm:text-base md:text-xl lg:text-2xl">
            Made possible with your favourites cryptocurrencies
          </p>
        </div>
        <div className="mt-4 overflow-hidden pl-7 sm:w-[40%] sm:pl-1 md:w-[45%]">
          <Swiper
            slidesPerView={3}
            spaceBetween={3}
            modules={[Autoplay]}
            autoplay={true}
            loop={true}
          >
            {poweredBy.map((d, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-10 w-10 md:h-14 md:w-14">
                  <Image
                    src={`/poweredby/${d}.png`}
                    layout="fill"
                    objectFit="contain"
                    alt={`${d} image`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PoweredBy
