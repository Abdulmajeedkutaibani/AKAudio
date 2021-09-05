import React from 'react';
import heroImage from '../../photoes/image-hero.jpg';
import ProductBrief from '../Products/ProductBrief';
const Hero = () => {
  return (
    <div className='container relative flex items-center '>
      <img src={heroImage} alt='' className='w-full ' />
      <div className='container font-manrope w-7/12 absolute'>
        <span className='text-whity opacity-50 text-lg tracking-widest'>
          NEW PRODCUT
        </span>
        <ProductBrief background='' />
      </div>
    </div>
  );
};

export default Hero;
