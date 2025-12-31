import React from "react";
import Adidas from "../../assets/Brands/Adidas.png";
import AllenSolly from "../../assets/Brands/AllenSolly.png";
import AmericanEagle from "../../assets/Brands/AmericanEagle.png";
import BeingHuman from "../../assets/Brands/BeingHuman.png";
import Gucci from "../../assets/Brands/gucci.png";
import HM from "../../assets/Brands/HM.png";
import JackJones from "../../assets/Brands/JackJones.png";
import Levis from "../../assets/Brands/Levis.png";
import LouisVuitton from "../../assets/Brands/LouisVuitton.png";
import Mufti from "../../assets/Brands/Mufti.png";
import Nike from "../../assets/Brands/Nike.png";
import Prada from "../../assets/Brands/Parda.png";
import PeterEngland from "../../assets/Brands/PeterEngland.png";
import Puma from "../../assets/Brands/Puma.png";
import Versace from "../../assets/Brands/Versace.png";

const brands = [
    Adidas, AllenSolly, AmericanEagle, BeingHuman, Gucci, HM, JackJones, Levis,
    LouisVuitton, Mufti, Nike, Prada, PeterEngland, Puma, Versace
];

const BrandsCarousel = () => {
    return (
        <div className="relative overflow-hidden w-full py-4">
            <div className="flex animate-marquee space-x-2 md:space-x-4 lg:space-x-6">
                {brands.concat(brands).map((brand, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-36"
                    >
                        <img
                            src={brand}
                            alt={`brand-${idx}`}
                            className="object-contain w-full h-16 sm:h-18 md:h-20 lg:h-20"
                        />
                    </div>
                ))}
            </div>

            {/* Tailwind animation */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default BrandsCarousel;
