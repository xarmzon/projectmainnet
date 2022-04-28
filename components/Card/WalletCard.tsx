import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { IWalletItem } from '../../utils/types'

const WalletCard = ({ name, icon }: IWalletItem) => {
  return (
    <div
      className={`flex h-[200px] w-[250px] cursor-pointer flex-col items-center justify-around overflow-hidden rounded-[18px] border-[1px] border-transparent bg-card transition-all duration-[500ms] hover:border-primary-blue2 md:w-[200px]`}
    >
      <div className="mx-auto flex w-[80%] items-center justify-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-white/[0.03] opacity-80 saturate-150">
          <Image
            src={`/wallets/${icon}.png`}
            alt={`${icon} wallet image`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="text-center text-xl capitalize">{name}</div>
    </div>
  )
}

export default WalletCard
