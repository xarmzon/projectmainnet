import React, { useState } from 'react'
import { walletsData } from '../../../utils/constants'
import WalletCard from '../../Card/WalletCard'
import WalletModal from '../../Modal/WalletModal'

const Wallets = () => {
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
        <div className="mw-contents mb-4 text-center">
          <p className="mb-4 text-sm font-light sm:text-base md:text-lg lg:text-xl">
            Ready to start managing your wallets in one place safely and
            confidently?Connect your to your wallets and take full control of
            your crypto wallets in one place. Fully decentralized and completely
            secured.
          </p>
          <h3 className="text-xl font-bold">CONNECT YOUR WALLETS NOW</h3>
        </div>
        <div className="relative mt-8 grid gap-y-4 sm:grid-cols-2 sm:gap-4 sm:gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-8">
          {walletsData.map((d, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 30}
              key={i}
              className="mx-auto max-w-[250px] md:max-w-[200px]"
              onClick={() => openModal(d.name, d.icon)}
            >
              <WalletCard icon={d.icon} name={d.name} />
            </div>
          ))}
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

export default Wallets
