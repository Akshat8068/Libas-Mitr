import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// Import componet 
import Slider from '../components/Slider';
import VirtualTryOnSteps from "../components/VitualTryFeature";
import FeatureCards from "../components/Hero/FeaturesCard";
import BrandsCarousel from "../components/Hero/Brands";
import Carousel from "../components/Hero/Category";
import AIStylist from "../components/Hero/AiChatBot";
import FeaturesSection from "../components/Hero/CoreValues";

// import hero imgs
import hero1 from "../assets/WinterGirlHero.png"
import hero2 from "../assets/girlJacketHero.png"
import hero3 from "../assets/JodhpuriSuitMen.png" 
import NewArrivals from "../components/NewArrivals";
const Hero = () => {
  return (
    <>
    
      <div className="h-[100vh] flex items-center justify-center">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide >
            <Slider HeroImg={hero1} />
          </SwiperSlide>
          <SwiperSlide >
            <Slider HeroImg={hero2} />
          </SwiperSlide>
          <SwiperSlide >
            <Slider HeroImg={hero3} />
          </SwiperSlide>
        </Swiper>
      </div>
      <BrandsCarousel />
      <Carousel />
      <NewArrivals/>
      <AIStylist/>
      <VirtualTryOnSteps />
      <FeaturesSection/>
      <FeatureCards/>
    </>
  );
};

export default Hero
