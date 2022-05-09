import Image from 'next/image'
import React, { useState } from 'react'
import { NFTs_PROVIDER_DATA } from '../../utils/constants'
import WalletModal from '../Modal/WalletModal'
const NFts = () => {
  const [wallet, setWallet] = useState<string>('')
  const [icon, setIcon] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = (wallet: string, icon: string) => {
    setWallet(wallet)
    setIcon(icon)
    setIsOpen(true)
  }
  const closeModal = () => setIsOpen(false)
  return (
    <section
      id="wallets"
      className="container my-12 min-h-screen bg-w bg-top py-10"
    >
      <div className="rcontainer">
        <div className="mx-auto mb-4 w-full max-w-md text-center md:max-w-lg lg:max-w-xl">
          <h3 className="mb-3 bg-lg1 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
            CONNECT NFT PROVIDER
          </h3>
          <p className="mb-4 text-sm font-light md:text-base lg:text-lg">
            Ready to start managing your NFTs in one place safely and
            confidently?Connect with one of our available providers.
          </p>
        </div>
        <div className="relative mx-auto mt-8 w-[95%] overflow-hidden rounded-lg bg-lg1 p-[1px] sm:max-w-lg md:max-w-xl">
          <div className="relative min-h-max w-full rounded-lg bg-[#190340f1]">
            {NFTs_PROVIDER_DATA.map((item, i) => (
              <div className={``} key={i}>
                <div
                  onClick={() => openModal(item.name, item.image)}
                  className={`relative flex h-full cursor-pointer items-center justify-between px-5 py-4`}
                >
                  <div className="flex items-center space-x-1">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={`/wallets/${item.image}.png`}
                        alt={`${item.image} wallet image`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className="">{item.name}</h3>
                  </div>
                  {item.feature && (
                    <span
                      className={`rounded-md px-3 py-1 text-xs sm:text-sm ${
                        item.feature.type === 'primary'
                          ? 'bg-[#335EF7] text-white'
                          : 'bg-[#E1EBFB] text-[#6B6B6B]'
                      }`}
                    >
                      {item.feature.text}
                    </span>
                  )}
                </div>
                {NFTs_PROVIDER_DATA.length - 1 !== i && (
                  <span className="block h-[1px] w-full bg-lg1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <WalletModal
        isOpen={isOpen}
        closeModal={closeModal}
        walletName={wallet}
        icon={icon}
      />
    </section>
  )
}

export default NFts
