import React from 'react'
import Loader from '.'

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex h-full w-full items-center justify-center bg-primary-blue/70 backdrop-blur-sm">
      <Loader text="Loading Page..." className="!text-white" />
    </div>
  )
}

export default PageLoader
