import React from 'react';
import heroImage from '../../photoes/image-hero.jpg';
import Btn1 from '../Buttons/Btn1';
import ProductBrief from '../Products/ProductBrief';
const Hero = () => {
  return (
    <div className='relative flex items-center mb-30'>
      <img src={heroImage} alt='' className='w-full' />
      <div className='font-manrope w-7/12 absolute '>
        <span className='text-whity opacity-50 text-lg tracking-widest'>
          NEW PRODCUT
        </span>
        <div
          className={`flex justify-center flex-col w-1/2 bg-whity space-y-lg`}
        >
          <h1 className=' w-5/6 text-xxl font-semibold mb-2 tracking-wider leading-11'>
            XX99 MARK II HEADPHONES
          </h1>
          <h6 className='text-xs  font-thin opacity-75 mb-10 w-9/12 '>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h6>
          <Btn1 background='bg-orangy' hoverBackground='bg-orangelight' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
