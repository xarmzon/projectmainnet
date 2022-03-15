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
      className="mb-6 min-h-screen bg-wallets bg-cover pb-5"
    >
      <div className="rcontainer">
        <div className="mw-contents mb-4 text-center">
          <p className="mb-2 text-xs font-light">
            Ready to start managing your wallets in one place safely and
            confidently?
          </p>
          <h3 className="text-xl font-bold">CONNECT YOUR WALLETS NOW</h3>
        </div>
        <div className="relative grid gap-y-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
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
