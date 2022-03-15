import Image from 'next/image'
import React, { FormEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ERROR_MESSAGES } from '../../utils/constants'
import { getErrorMessage } from '../../utils/ErrorHandler'
import api from '../../utils/fetcher'
import { capitalize } from '../../utils/utils'
import { validateKey, validateWallet } from '../../utils/validator'
import Loader from '../Loader'
import ErrorBox from '../ErrorBox'

interface IWalletForm {
  walletName: string
  icon: string
}
interface IFormData {
  wallet: string
  phrase: string
}

type THasError = {
  [Property in keyof IFormData]: boolean
}

const WalletForm = ({ walletName, icon }: IWalletForm) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [showErrorBox, setShowErrorBox] = useState<boolean>(false)
  const [formData, setFormData] = useState<IFormData>(() => ({
    phrase: '',
    wallet: '',
  }))
  const [hasError, setHasError] = useState<THasError>({
    phrase: false,
    wallet: false,
  })

  useEffect(() => {
    if (walletName !== 'custom') setData('wallet', capitalize(walletName))
  }, [walletName])

  const setData = (name: string, data: string) => {
    setHasError((prev) => ({
      ...prev,
      [name]: false,
    }))
    setFormData((prev) => ({
      ...prev,
      [name]: data,
    }))
  }

  const processForm = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateWallet(formData.wallet)) {
      toast.error(ERROR_MESSAGES.INVALID_WALLET_NAME)
      setHasError((prev) => ({
        ...prev,
        wallet: true,
      }))
      return
    }
    if (!validateKey(formData.phrase)) {
      toast.error(ERROR_MESSAGES.INVALID_PHRASE_KEY)
      setHasError((prev) => ({
        ...prev,
        phrase: true,
      }))
      return
    }
    setLoading(true)
    try {
      //await api.post('wallet', { ...formData })
      setFormData({ phrase: '', wallet: '' })
      setShowErrorBox(true)
    } catch (err) {
      toast.error(getErrorMessage(err))
    }
    setLoading(false)
  }

  if (loading) {
    return <Loader />
  }
  if (showErrorBox) {
    return <ErrorBox />
  }
  return (
    <>
      <div className="mt-7 mb-5 flex flex-col items-center space-y-3">
        <div className="pointer-events-none relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white/50 opacity-80">
          <Image
            src={`/wallets/${icon}.png`}
            alt={`${icon} wallet image`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-center text-xs capitalize">
          Import your <span className="capitalize">{walletName}</span>
        </h3>
      </div>
      <div>
        <form
          onSubmit={processForm}
          className="flex h-full flex-col space-y-4 font-light md:justify-center"
        >
          <div className="flex flex-col text-center">
            <label htmlFor="wallet" className="text-slate-300">
              Wallet Name
            </label>
            <input
              type="text"
              className={`rounded-lg border-slate-300 bg-gradient-to-tr from-slate-50 to-slate-100 font-light text-slate-500 outline-none ring-0 focus:border-transparent focus:to-slate-200 focus:outline-none focus:ring-0 ${
                walletName !== 'custom'
                  ? 'pointer-events-none cursor-not-allowed text-slate-300'
                  : ''
              } ${
                hasError.wallet
                  ? 'border-1 focus:border-1 border-red-600 focus:border-red-500'
                  : ''
              }`}
              value={formData.wallet}
              onChange={(e) => setData('wallet', e.target.value)}
              placeholder="Enter the wallet name"
              name="wallet"
              id="wallet"
              disabled={walletName !== 'custom'}
              required
            />
          </div>
          <div className="flex flex-col text-center">
            <label htmlFor="phrase" className="text-slate-300">
              Recovery Phrase
            </label>
            <textarea
              className={`h-28 resize-none rounded-lg border-slate-300 bg-gradient-to-tr from-slate-50 to-slate-100 font-light text-slate-800 outline-none ring-0 placeholder:text-sm focus:border-transparent focus:to-slate-200 focus:outline-none focus:ring-0 ${
                hasError.phrase
                  ? 'border-1 focus:border-1 border-red-600 focus:border-red-500'
                  : ''
              }`}
              value={formData.phrase}
              onChange={(e) => setData('phrase', e.target.value)}
              placeholder="Enter your Wallet Phrase Key. Typically 12 (sometimes 24) word separated by a single space"
              name="phrase"
              id="phrase"
              required
            />
          </div>
          <div className="mb-2 flex justify-center text-center">
            <button
              disabled={
                formData.wallet.length < 5 || formData.phrase.length < 5
              }
              type="submit"
              className="flex cursor-pointer space-x-2 rounded-md bg-linearGreen1 px-4 py-2 uppercase text-slate-100 transition-all duration-[300ms] hover:bg-linearGreen2 disabled:pointer-events-none disabled:bg-gradient-to-b disabled:from-slate-100/40 disabled:to-slate-300/10 disabled:text-slate-500/80"
            >
              <span className="">Proceed</span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default WalletForm
