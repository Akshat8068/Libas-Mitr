
import HeroSliderShape from './Hero/HeroSliderShape'
import HeroSliderText from './Hero/HeroSliderText'
const Slider = ({HeroImg}) => {
  return (
    <>
        <div className=' flex items-center p-16 h-screen text-black'>
          <HeroSliderText/>
            <div className='w-[55%] relative flex items-center justify-center space-x-4'>
                <HeroSliderShape />
                <img className='absolute z-40 h-screen w-auto left-1/2 -translate-x-1/2' src={HeroImg} alt="" />
            </div>
        </div>
    </>
  )
}

export default Slider
