import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { APP_NAME } from '../../../utils/constants'

const Footer = () => {
  return (
    <div className="from-secondary to-secondary/40 flex h-20 flex-col items-center justify-center border-t-[1px] border-t-slate-700/30 bg-gradient-to-t">
      <div className="mb-1 flex items-center space-x-2 text-primary-green transition-all duration-500 hover:text-primary-green/70 md:text-xl lg:text-2xl">
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>

      <p className="container text-center text-xs leading-[30px] md:text-[24px]">
        &copy; {new Date().getFullYear()}{' '}
        <span className="cursor-pointer text-primary-green hover:underline">
          {APP_NAME}
        </span>
        . All rights reserved
      </p>
    </div>
  )
}

export default Footer
