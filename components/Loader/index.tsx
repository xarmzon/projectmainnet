import React from 'react'

interface ILoader {
  text?: string
  className?: string
}

const Loader = ({ text = 'processing...', className = '' }: ILoader) => {
  return (
    <div className="h-30 w-30 flex flex-col items-center justify-center space-y-4">
      <span className="pointer-events-none block h-10 w-10 animate-spin rounded-xl bg-lg3"></span>
      <p className={`text-sm capitalize text-primary ${className}`}>{text}</p>
    </div>
  )
}

export default Loader
