import Link from 'next/link'
import React, { useState } from 'react'
import { menuItems } from '../../utils/constants'
import Logo from '../Logo'
import { BiMenu, BiX } from 'react-icons/bi'
const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  const toggleNav = (e: any) => {
    e.stopPropagation()
    setNavOpen((prev) => !prev)
  }

  return (
    <nav className="flex h-16 w-full flex-shrink-0 items-center justify-between px-5 pt-6 md:pt-5">
      <Logo />
      <div
        className={`fixed z-[9999999] bg-primary/80 py-8 backdrop-blur-sm transition-all duration-500 sm:relative sm:top-0 sm:z-auto sm:flex sm:justify-end sm:bg-transparent sm:bg-none sm:py-0 sm:opacity-100 sm:backdrop-blur-none ${
          navOpen
            ? 'top-0 left-0 right-0 opacity-100 shadow-xl'
            : 'left-0 right-0 -top-full w-full opacity-0'
        } `}
      >
        <div
          onClick={toggleNav}
          className="relative flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5"
        >
          {menuItems.map((item, i) => (
            <Link href={item.link} key={i}>
              <a
                className={`group ${
                  item.btn
                    ? 'bg-accent hover:bg-accent/90 flex items-center justify-center rounded-full px-4 py-2 text-sm text-gray-100 hover:shadow-primary md:text-base'
                    : ' hover:text-gray-200'
                } relative transition-colors duration-300`}
              >
                <div>{item.name}</div>
                {!item.btn && (
                  <div className="h-[1px] w-full origin-left scale-0 rounded-full bg-linear2 transition-all duration-200 group-hover:bg-linear4" />
                )}
              </a>
            </Link>
          ))}
          <BiX
            className="absolute -top-10 right-5 cursor-pointer text-3xl sm:hidden"
            onClick={toggleNav}
          />
        </div>
      </div>
      <BiMenu
        onClick={toggleNav}
        className="cursor-pointer rounded bg-linear2 text-3xl shadow-sm sm:hidden"
      />
    </nav>
  )
}

export default Navbar
