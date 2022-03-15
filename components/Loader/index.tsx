import React from 'react'

const Loader = () => {
  return (
    <div className="h-30 w-30 flex flex-col items-center justify-center space-y-4">
      <span className="pointer-events-none block h-10 w-10 animate-spin rounded-xl bg-linearGreen2"></span>
      <p className=" text-primary text-sm capitalize">processing...</p>
    </div>
  )
}

export default Loader
