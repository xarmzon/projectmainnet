import { ReactNode } from 'react'

interface IStats {
  icon: ReactNode
  count: number
  text: string
  className?: string
}

const Stats = ({ icon, count, text, className = '' }: IStats) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex flex-shrink-0">
        {[...Array(2).fill('')].map((_, i) => (
          <span
            key={i}
            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-x-teal-200 border-y-amber-100 text-sm shadow-md md:h-7 md:w-7 md:text-base lg:h-8 lg:w-8 ${
              i > 0 ? '-ml-3' : ''
            } ${className}`}
          >
            {icon}
          </span>
        ))}
      </div>
      <div className="text-sm md:text-base">
        <span className="text-primary-blue2">{count}</span>
        <span>+ {text}</span>
      </div>
    </div>
  )
}

export default Stats
