import Modal from 'react-modal'
import { HiXCircle } from 'react-icons/hi'
import WalletForm from '../Form/WalletForm'

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
  },
}
const WalletModal = ({
  isOpen,
  closeModal,
  icon,
  walletName,
}: IWalletModal) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="text-primary relative flex h-[80vh] max-h-[450px] w-[80vw] max-w-[350px] flex-col justify-center bg-gradient-to-b from-primary-bg/50 to-slate-900/70 p-5 shadow-lg backdrop-blur-[2px] lg:max-h-[550px] lg:max-w-[450px] lg:space-y-8">
        <HiXCircle
          className="absolute right-3 top-3 cursor-pointer text-2xl text-red-200 lg:text-3xl"
          onClick={closeModal}
        />
        <WalletForm icon={icon} walletName={walletName} />
      </div>
    </Modal>
  )
}

export default WalletModal
