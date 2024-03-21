import React from 'react'

type Props = {
  title: string
  data: number | string
}

const FetchCard = ({ title, data }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-1/3 border-2 border-green-300 dark:border-green-500">
      <div className="flex flex-col items-start justify-between">
        <div>
          <p className="text-md font-semibold text-gray-600 dark:text-gray-300">
            {title}
          </p>
        </div>
        <div>
          <p className="text-xl font-bold text-blue-500 dark:text-blue-300">
            {data}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FetchCard
