import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
      <div  className="bg-white rounded shadow overflow-hidden relative group w-[70%] sm:w-full">

          {/* Image Container */}
          <div className="relative overflow-hidden">
              <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition"
              />

              {/* Add to Cart Button */}
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                  <Link to={"/products/:pid"}
                      className="block w-full text-center bg-white text-[#111818] py-3 rounded-md font-medium text-sm shadow-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
>                      Add to Cart
                  </Link>
              </div>
          </div>

          {/* Product Info */}
          <div className="flex justify-between items-start p-4">
              <div>
                  <a
                      href="#"
                      className="block text-gray-900 font-medium hover:text-gray-700 transition"
                  >
                      {product.name}
                  </a>
                  <span className="block text-gray-600 mt-1">{product.price}</span>
              </div>
          </div>
      </div>
  )
}

export default ProductCard
