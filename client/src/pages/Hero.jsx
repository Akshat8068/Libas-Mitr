import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bg1 from "../assets/WinterGirlHero.png";
import bg2 from "../assets/girlJacketHero.png";
// Import componet 
import BrandsCarousel from "../components/Hero/BrandsCarousel";
import CarouselCategory from "../components/Hero/CarouselCategory";
import AIStylist from "../components/Hero/AIStylist";
import NewArrivals from "../components/NewArrivals";
import { Link } from "react-router-dom";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,          
    autoplaySpeed: 3000,     
    speed: 700,
    arrows: false,
    pauseOnHover: false,     
    fade: true,
  };
  return (
    <>
      <section className="relative bg-white">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <div className="grid lg:grid-cols-2 min-h-[550px]">
              {/* Right image */}
              <div
                className="h-[300px] lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${bg1})` }}
              />

              {/* Left text */}
              <div className="flex items-center justify-center p-10">
                <div className="max-w-xl">
                  <span className="uppercase tracking-wide text-sm text-gray-500">
                    Winkel eCommerce Shop
                  </span>

                  <h3
                    className="mt-3 text-sm font-semibold bg-no-repeat bg-left pl-5"
                    style={{ backgroundImage: `url(/images/divider.jpg)` }}
                  >
                    Established Since 2000
                  </h3>

                  <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                    Catch Your Own <br />
                    <span className="text-red-500">Stylish &amp; Look</span>
                  </h1>

                  <p className="mt-4 text-gray-600">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <Link to={"/products"}>
                    <button className="mt-6 bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
                      Discover Now
                    </button>
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div className="grid lg:grid-cols-2 min-h-[550px]">
              <div
                className="h-[300px] lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${bg2})` }}
              />

              <div className="flex items-center justify-center p-10">
                <div className="max-w-xl">
                  <span className="uppercase tracking-wide text-sm text-gray-500">
                    Winkel eCommerce Shop
                  </span>

                  <h3
                    className="mt-3 text-sm font-semibold bg-no-repeat bg-left pl-5"
                    style={{ backgroundImage: `url(/images/divider.jpg)` }}
                  >
                    Best eCommerce Online Shop
                  </h3>

                  <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                    A Thoroughly <span className="text-red-500">Modern</span> Woman
                  </h1>

                  <p className="mt-4 text-gray-600">
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia.
                  </p>
                  <Link
                    to={"/products"}>
                    <button className="mt-6 bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
                      Shop Now
                    </button>
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <BrandsCarousel />
      <CarouselCategory />
      <NewArrivals />
      <AIStylist />

    </>
  );
};

export default Hero
