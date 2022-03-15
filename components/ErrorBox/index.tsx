import React from 'react'
import { MdCancel, MdSentimentVeryDissatisfied } from 'react-icons/md'

const ErrorBox = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 text-center text-red-500">
      <MdCancel className="text-9xl" />
      <div className="flex flex-col items-center justify-center space-y-1">
        <p>An Error Occurred. Please try again</p>
        <MdSentimentVeryDissatisfied className="text-2xl" />
      </div>
    </div>
  )
}

export default ErrorBox
