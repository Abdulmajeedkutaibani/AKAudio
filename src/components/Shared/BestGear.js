import React from 'react';
import bestGearDesktop from '../../photoes/shared/desktop/image-best-gear.jpg';
import bestGearTablet from '../../photoes/shared/tablet/image-best-gear.jpg';
import bestGearMobile from '../../photoes/shared/mobile/image-best-gear.jpg';

const BestGear = () => {
  return (
    <div
      className='container w-full  flex flex-col-reverse lg:flex-row justify-between items-center mt-48 mb-48 md:mb-24 md:mt-24'
      data-aos='fade-in'
      data-aos-duration='900'
    >
      <div className=' lg:w-1/3 w-4/5 text-center lg:text-left '>
        <h2 className='text-xxl mb-8 font-bold uppercase leading-11'>
          Bringing you the <span className='text-orangy'>best</span> audio gear
        </h2>
        <p className='text-xs opacity-50 font-thin leading-6'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={bestGearDesktop}
        alt=''
        className='lg:w-1/2 w-full rounded-lg hidden lg:block'
      />
      <img
        src={bestGearTablet}
        alt=''
        className='lg:w-1/2 w-full rounded-lg hidden md:block mb-16'
      />
      <img
        src={bestGearMobile}
        alt=''
        className='lg:w-1/2 w-full rounded-lg md:hidden mb-10'
      />
    </div>
  );
};

export default BestGear;
