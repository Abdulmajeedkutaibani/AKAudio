import React from 'react';
import speaker1 from '../../photoes/home/desktop/image-speaker-zx9.png';
import circles from '../../photoes/home/desktop/pattern-circles.svg';
import Btn1 from '../Buttons/Btn1';
import ProductBrief from '../Products/ProductBrief';

const HomeSpeaker1 = () => {
  return (
    <div className='speaker1 w-full bg-orangy overflow-hidden relative rounded-md bg-circles'>
      <div className='container w-5/6 h-xl flex md:flex-row justify-between items-center  '>
        <div className='image-container h-full w-full  flex justify-center'>
          <img
            src={speaker1}
            alt=''
            className='h-3/4 absolute -bottom-md z-20'
          />
          <img src={circles} alt='' className='absolute z-10 w-3/4' />
        </div>

        <div className={`flex-col w-1/2 space-y-lg ml-auto z-40`}>
          <h1 className=' text-whity text-xxxl font-bold  tracking-wider w-1/2'>
            ZX9 SPEAKER
          </h1>
          <h6 className='text-xs text-whity font-normal opacity-75 w-9/12'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h6>
          <button className='bg-blacky text-xxxs font-semibold transition  duration-200 text-whity hover:bg-blackyhover uppercase tracking-tighter'>
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSpeaker1;
