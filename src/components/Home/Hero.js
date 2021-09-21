import React from 'react';
import heroImageDesktop from '../../photoes/home/desktop/image-hero.jpg';
import heroImageTablet from '../../photoes/home/tablet/image-header.jpg';
import heroImageMobile from '../../photoes/home/mobile/image-header.jpg';
import Btn1 from '../Buttons/Btn1';
import 'animate.css';

const Hero = () => {
  return (
    <div className=' overflow-hidden  bg-blackmain bg-opacity-95 mb-30 '>
      <div className='relative overflow-hidden w-full md:w-5/6 h-xl md:h-xxl flex items-center mx-auto border-t border-whity border-opacity-20'>
        <div className='items-center lg:items-start  absolute  z-30 font-manrope lg:w-1/2 w-full animate__animated animate__fadeIn animate__slower animate__delay-1s flex flex-col text-center lg:text-left'>
          <span className='text-whity opacity-50 text-lg tracking-widest'>
            NEW PRODCUT
          </span>
          <div className='flex justify-center flex-col  space-y-lg text-whity mt-3 md:mt-4 mb-7 md:mb-6 items-center lg:items-start'>
            <h1 className=' w-5/6 text-36 md:text-xxl font-semibold mb-2 tracking-wider leading-11'>
              XX99 MARK II HEADPHONES
            </h1>
            <h6 className='text-xs  font-thin opacity-75 md:mb-10 w-10/12 max-w-md md:w-9/12 '>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </h6>
          </div>
          <Btn1 background='bg-orangy' hoverBackground='bg-orangelight' />
        </div>
        <img
          src={heroImageDesktop}
          alt=''
          className='hidden pb-24 lg:block  animate__animated animate__fadeIn  animate__slower '
        />
        <img
          src={heroImageTablet}
          alt=''
          className='w-full pb-20 hidden md:block lg:hidden  animate__animated animate__fadeIn  animate__slower '
        />
        <img
          src={heroImageMobile}
          alt=''
          className='w-full max-w-sm mx-auto pb-32 md:hidden animate__animated animate__fadeIn  animate__slower '
        />
      </div>
    </div>
  );
};

export default Hero;
