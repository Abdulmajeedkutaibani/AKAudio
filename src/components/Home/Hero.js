import React from 'react';
import heroImage from '../../photoes/heroImage.png';
import Btn1 from '../Buttons/Btn1';
import 'animate.css';

const Hero = () => {
  return (
    <div className=' bg-blackmain mb-30 '>
      <div className='w-5/6 flex items-center mx-auto border-t border-whity border-opacity-20'>
        <div className='font-manrope w-1/2  animate__animated animate__fadeIn animate__slower animate__delay-1s'>
          <span className='text-whity opacity-50 text-lg tracking-widest'>
            NEW PRODCUT
          </span>
          <div
            className={`flex justify-center flex-col  space-y-lg text-whity mt-4 mb-6 `}
          >
            <h1 className=' w-5/6 text-xxl font-semibold mb-2 tracking-wider leading-11'>
              XX99 MARK II HEADPHONES
            </h1>
            <h6 className='text-xs  font-thin opacity-75 mb-10 w-9/12 '>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </h6>
          </div>
          <Btn1 background='bg-orangy' hoverBackground='bg-orangelight' />
        </div>
        <img
          src={heroImage}
          alt=''
          className='w-1/2 animate__animated animate__fadeIn  animate__slower'
        />
      </div>
    </div>
  );
};

export default Hero;
