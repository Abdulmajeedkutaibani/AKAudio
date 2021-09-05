import React from 'react';
import speaker1 from '../../photoes/home/desktop/image-speaker-zx9.png';
import Btn1 from '../Buttons/Btn1';
import ProductBrief from '../Products/ProductBrief';

const Speaker1 = () => {
  return (
    <div className='speaker1 w-full bg-orangy overflow-hidden relative rounded-md bg-circles'>
      <div className='container w-5/6 h-xl flex md:flex-row justify-between items-center overflow-hidden'>
        <img src={speaker1} alt='' className='h-3/4 absolute -bottom-md' />
        {/* ////////////////////// */}
        <div className={`flex-col w-1/2 space-y-lg ml-auto `}>
          <h1 className=' text-whity text-xxxl font-bold  tracking-wider w-1/2'>
            ZX9 SPEAKER
          </h1>
          <h6 className='text-xs text-whity font-normal opacity-75 w-9/12'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h6>
          <Btn1 background='bg-blacky' hoverBackground='bg-blackyhover' />
        </div>
      </div>
    </div>
  );
};

export default Speaker1;
