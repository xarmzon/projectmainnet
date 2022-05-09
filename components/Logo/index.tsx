import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { APP_NAME } from '../../utils/constants'

interface ILogo {
  withName?: boolean
  type?: 'small' | 'medium'
}

const Logo = ({ withName = false, type = 'medium' }: ILogo) => {
  return (
    <Link href="/">
      <a className="flex min-w-max items-center justify-center space-x-2">
        <div
          className={`relative h-[50px] w-[50px] overflow-hidden ${
            type === 'medium'
              ? 'md:h-[65px] md:w-[65px]'
              : 'sm:h-[45px] sm:w-[45px]'
          }`}
        >
          <Image
            src="/images/logo_w.png"
            layout="fill"
            alt={`${APP_NAME} LOGO`}
            objectFit="contain"
          />
        </div>
        <h2
          className={`hidden font-bold  sm:text-lg lg:text-2xl ${
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
