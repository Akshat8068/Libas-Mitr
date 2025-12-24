import React from 'react'

const SignImgText = ({heading,description}) => {
  return (
      <div className="relative z-10 text-white">
          <h2 className="logo-text text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {heading}
          </h2>
          <p className="text-lg font-light text-gray-200 max-w-md">
              {description}
          </p>
      </div>
  )
}

export default SignImgText
