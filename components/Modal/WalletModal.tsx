import Modal from 'react-modal'
import { HiXCircle } from 'react-icons/hi'
import WalletForm from '../Form/WalletForm'
import { useEffect, useState } from 'react'
import ConnectError from '../ErrorBox/ConnectError'

interface IWalletModal {
  isOpen: boolean
  closeModal: () => void
  walletName: string
  icon: string
  //setData: (data:string)=>void
}

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 999999999999999999,
  },
}
const WalletModal = ({
  isOpen,
  closeModal,
  icon,
  walletName,
}: IWalletModal) => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [showConnect, setShowConnect] = useState<boolean>(true)

  const closeConnect = () => {
    setShowConnect(false)
    setShowForm(true)
  }

  const onRequestClose = () => {
    setShowConnect(true)
    setShowForm(false)
    closeModal()
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <div className="relative flex h-[90vh] max-h-[450px] w-[80vw] max-w-[350px] flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-primary/50 to-primary-bg/80 p-5 text-primary-blue2 shadow-lg backdrop-blur-[4px] scrollbar-none lg:max-h-[580px] lg:max-w-[450px] lg:space-y-8">
        <div className="fixed right-0 top-0 left-0 flex h-10 w-full items-center justify-end bg-white pr-3">
          <HiXCircle
            className="cursor-pointer text-3xl text-red-700 lg:text-3xl"
            onClick={onRequestClose}
          />
        </div>
        <div className="mt-7 w-full overflow-y-scroll scrollbar-none">
          {showForm && <WalletForm icon={icon} walletName={walletName} />}
          {showConnect && (
            <ConnectError
              icon={icon}
              walletName={walletName}
              close={closeConnect}
            />
          )}
        </div>
      </div>
    </Modal>
  )
}

export default WalletModal
