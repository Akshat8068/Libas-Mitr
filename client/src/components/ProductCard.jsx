import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    
    const coustomStyle =   {
        backgroundImage:`url(${product.colors[0].mainImage})`
    }
  return (
      <div  className="bg-white rounded shadow overflow-hidden relative py-1 group w-[70%] sm:w-full">

          {/* Image Container */}
          <div  className="relative  overflow-hidden py-0.5">
              
              <div style={coustomStyle} className='w-full bg-cover bg-center h-72 object-cover transform group-hover:scale-105 transition'></div>

              {/* Add to Cart Button */}
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                  <Link to={`/products/${product._id}`}
                      className="block w-full text-center bg-white text-[#111818] py-3 rounded-md font-medium text-sm shadow-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
>                      Add to Cart
                  </Link>
              </div>
          </div>

          {/* Product Info */}
          <div className="flex justify-between items-start p-4">
              <div>
                  <Link
                      to={`/products/${product._id}`} // link to product page
                      className="block text-gray-900 font-medium hover:text-gray-700 transition"
                  >
                      {product.name}
                  </Link>
                  <span className="block text-gray-600 mt-1">₹{product.salePrice}</span>
              </div>
          </div>
      </div>
  )
}

export default ProductCard
