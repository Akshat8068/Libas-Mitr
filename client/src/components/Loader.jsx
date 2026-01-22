import React from 'react'

const Loader = ({loadingMessage}) => {
  return (
    <div>
          <h1 className='text-center pt-35 min-h-screen font-medium lg:pt-23 lg:font-semibold lg:text-2xl text-xl text-gray-400'>{loadingMessage}</h1>
    </div>
  )
}

export default Loader
