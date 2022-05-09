import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { APP_NAME } from '../../utils/constants'
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className="container flex flex-col items-center justify-center border-t-[1px] border-t-slate-700/30 bg-ab bg-cover px-5 py-2 md:py-4">
      <div className="mb-5 flex w-full flex-col items-center justify-center sm:flex-row sm:justify-between">
        <div className="mb-5">
          <Logo withName={false} />
        </div>
        <div className="flex cursor-pointer items-center space-x-4 text-xl text-primary-blue2 transition-all duration-500 hover:text-primary-green/70 sm:text-2xl md:space-x-6 md:text-xl">
          <FaDiscord />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
      <p className="text-center text-sm leading-[30px] sm:text-base md:text-lg">
        Copyright &copy;{new Date().getFullYear()}. Made with love for you. All
        rights reserved
      </p>
    </footer>
  )
}

export default Footer
