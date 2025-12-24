import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles




// import required modules

export default function Swipper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide >
                  <Slider HeroImg={hero1} />
              </SwiperSlide>
              <SwiperSlide >
                  <Slider  HeroImg={hero1} />
              </SwiperSlide>
      </Swiper>
    </>
  );
}
