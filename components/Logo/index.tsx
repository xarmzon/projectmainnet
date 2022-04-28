import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { APP_NAME } from '../../utils/constants'

interface ILogo {
  withName?: boolean
}

const Logo = ({ withName = false }: ILogo) => {
  return (
    <Link href="/">
      <a className="flex items-center justify-center space-x-2">
        <div className="relative h-[50px] w-[50px] overflow-hidden md:h-[65px] md:w-[65px]">
          <Image
            src="/images/logo_w.png"
            layout="fill"
            alt={`${APP_NAME} LOGO`}
            objectFit="contain"
          />
        </div>
        <h2
          className={`hidden font-bold  md:text-xl lg:text-2xl ${
            withName ? 'sm:block' : ''
          }`}
        >
          {APP_NAME}
        </h2>
      </a>
    </Link>
  )
}

export default Logo
