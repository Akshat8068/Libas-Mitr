import React from 'react'

const HeroSliderShape = ({ BgLeft = "bg-black", BgCneter ="bg-gray-300",BgRight="bg-black"}) => {
  return (
    <>
          <div className={`h-[380px] w-40 ${BgLeft} rounded-[80px] z-10 left-1/4 opacity-[0.9] `}></div>
          <div className={`h-[450px] w-40 ${BgCneter} rounded-[80px] z-20`}></div>
          <div className={`h-[450px] w-40 ${BgRight} rounded-[80px] z-20`}></div>
    </>
  )
}

export default HeroSliderShape
