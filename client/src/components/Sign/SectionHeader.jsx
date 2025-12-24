import React from 'react'

const SectionHeader = ({heading,descripition,children}) => {
  return (
      <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-gray-900 mb-2">
              {heading}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
              {descripition}
          </p>
          {children}
      </div>
  )
}

export default SectionHeader
