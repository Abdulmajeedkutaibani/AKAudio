import React from 'react';
import bestGear from '../../photoes/shared/desktop/image-best-gear.jpg';

const BestGear = () => {
  return (
    <div className='container w-full  flex justify-between items-center mt-48 mb-48 '>
      <div className=' w-1/3 '>
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
      <img src={bestGear} alt='' className='w-1/2 rounded-lg' />
    </div>
  );
};

export default BestGear;
