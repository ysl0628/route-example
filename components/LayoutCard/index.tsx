import React from 'react'

type LayoutCardProps = {
  title: string
  path: string
  children?: React.ReactNode
}

const LayoutCard = ({ title, path, children }: LayoutCardProps) => {
  return (
    <div className="group rounded-lg border border-dashed border-transparent px-5 py-4 transition-colors border-gray-500 dark:border-neutral-500 ">
      <div className="flex gap-2">
        <h2
          className={`mb-3 text-l dark:text-gray-400 text-gray-600 font-normal`}
        >
          {title}
        </h2>
        <p className="dark:text-gray-500 text-gray-400">📍: {path}</p>
      </div>
      {children}
    </div>
  )
}

export default LayoutCard
