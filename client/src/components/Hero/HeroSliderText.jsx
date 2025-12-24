import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSliderText = () => {
  return (
    
          <div className='w-[45%]'>
              <h4 className='font-light text-gray-600'>Winter</h4>
              <h1 className='logo-text text-6xl my-3.5'>LibasMitr </h1>
              <p className='mb-8 text-sm max-w-80'>Stay warm in style with our curated winter wear collection,
                  blending comfort, elegance, and modern trends for every occasion.</p>
              <Link to="#" className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 text-xl logo-text transition hover:bg-black hover:text-white">
                  Explore More
                  <ChevronRight size={16} />
              </Link>
          </div>
    
  )
}

export default HeroSliderText
