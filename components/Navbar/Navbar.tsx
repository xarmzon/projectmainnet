import Link from 'next/link'
import React from 'react'
import { menuItems } from '../../utils/constants'
import Logo from '../Logo'
import { BiMenu } from 'react-icons/bi'
const Navbar = () => {
  return (
    <div className="flex h-16 w-full flex-shrink-0 items-center justify-between px-5 pt-6 md:pt-5">
      <Logo />
      <div className="flex items-center space-x-5">
        {menuItems.map((item, i) => (
          <Link href={item.link} key={i}>
            <a
              className={`group ${
                item.btn
                  ? 'bg-accent hover:bg-accent/90 flex items-center justify-center rounded-full px-4 py-2 text-sm text-gray-100 hover:shadow-primary md:text-base'
                  : 'hidden hover:text-gray-200 sm:block'
              } relative transition-colors duration-300`}
            >
              <div>{item.name}</div>
              {!item.btn && (
                <div className="h-[1px] w-full origin-left scale-0 rounded-full bg-linear2 transition-all duration-200 group-hover:bg-linear4" />
              )}
            </a>
          </Link>
        ))}
        <BiMenu className="cursor-pointer rounded bg-linear2 text-3xl shadow-sm sm:hidden" />
      </div>
    </div>
  )
}

export default Navbar
