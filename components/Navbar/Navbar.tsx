import Link from 'next/link'
import React from 'react'
import { menuItems } from '../../utils/constants'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <div className="flex h-16 w-full flex-shrink-0 justify-center px-5 sm:justify-between md:mt-6 xl:px-0">
      <Logo />
      <div className="flex items-center space-x-5">
        {menuItems.map((item, i) => (
          <Link href={item.link} key={i}>
            <a
              className={`group ${
                item.btn
                  ? 'bg-accent hover:bg-accent/90 hover:shadow-primary flex items-center justify-center rounded-full px-4 py-2 text-sm text-gray-100 md:text-base'
                  : 'hidden hover:text-gray-200 sm:block'
              } relative transition-colors duration-300`}
            >
              <div>{item.name}</div>
              {!item.btn && (
                <div className="h-[1px] w-full origin-left scale-0 rounded-full bg-primary-green transition-all duration-200 group-hover:scale-100" />
              )}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
