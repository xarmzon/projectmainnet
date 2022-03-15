import Image from 'next/image'
import React, { useState, useEffect, Dispatch } from 'react'

interface IConnectError {
  icon: string
  walletName: string
  close: () => void
}

const ConnectError = ({ walletName, icon, close }: IConnectError) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <div className="flex flex-col space-y-8">
      <div
        className={`relative flex rounded-md py-5 text-center ${
          loading
            ? 'items-center justify-center border-primary-green'
            : 'flex-col items-center justify-center border-red-600'
        } border`}
      >
        {loading ? (
          <p className="animate-pulse text-lg text-slate-400">Connecting...</p>
        ) : (
          <div className="">
            <p className="text-lg text-red-600">Error Connecting...</p>
            <button
              onClick={close}
              className="mt-2 cursor-pointer rounded-lg bg-linearGreen1 px-3 py-1 hover:bg-linearGreen2"
            >
              Connect Manually
            </button>
          </div>
        )}
      </div>
      <div className="pointer-events-none flex flex-col items-center justify-center space-x-1 divide-y divide-dashed divide-primary-green/30 rounded-md border border-primary-green">
        <div className="p-4">
          <p className="mb-3 text-sm font-bold sm:text-base md:text-lg">
            {walletName}
          </p>
          <div className="pointer-events-none relative mx-auto flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/20 bg-opacity-40">
            <Image
              src={`/wallets/${icon}.png`}
              alt={`${icon} wallet image`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <span className="px-4 py-2 text-center text-xs font-light italic md:text-sm">
          Easy-to-use wallets app
        </span>
      </div>
    </div>
  )
}

export default ConnectError
