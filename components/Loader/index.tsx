import React from 'react'

const Loader = () => {
  return (
    <div className="h-30 w-30 flex flex-col items-center justify-center space-y-4">
      <span className="pointer-events-none block h-10 w-10 animate-spin rounded-xl bg-gradient-to-bl from-accent to-primary text-center"></span>
      <p className=" text-sm capitalize text-primary">processing...</p>
    </div>
  )
}

export default Loader
