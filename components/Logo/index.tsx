import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { APP_NAME } from '../../utils/constants'

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center justify-center space-x-2">
        <div className="relative h-[30px] w-[30px] overflow-hidden md:h-[40px] md:w-[40px]">
          <Image
            src="/images/logo_w.png"
            layout="fill"
            alt={`${APP_NAME} LOGO`}
            objectFit="contain"
          />
        </div>
        <h2 className="text-sm font-bold md:text-xl lg:text-2xl">{APP_NAME}</h2>
      </a>
    </Link>
  )
}

export default Logo
