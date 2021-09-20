import React from 'react';
import speaker1 from '../../photoes/home/desktop/image-speaker-zx9.png';
import circles from '../../photoes/home/desktop/pattern-circles.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HomeSpeaker1 = () => {
  return (
    <div
      className='speaker1 w-full bg-orangy overflow-hidden relative rounded-md bg-circles '
      data-aos='fade-in'
      data-aos-duration='1300'
    >
      <div className='container w-5/6 lg:h-xl md:h-xxxl h-xxl flex lg:flex-row flex-col lg:justify-between items-center  '>
        <div className=' lg:h-full h-1/2 w-full  flex justify-center '>
          <img
            src={speaker1}
            alt=''
            className='lg:h-3/4 h-1/3 absolute lg:-bottom-md  md:top-11 z-20 lg:mt-auto top-11'
          />
          <img
            src={circles}
            alt=''
            className='absolute z-10 lg:w-3/4 md:-top-40 lg:top-6 -top-20'
          />
        </div>

        <div className='h-1/2 flex-col lg:w-1/2 md:w-3/5 lg:text-left text-center  md:space-y-lg space-y-sm lg:ml-auto lg:text-left z-40'>
          <h1 className=' text-whity text-xl w-1/2 mx-auto  md:text-xxxl font-bold  tracking-wider lg:w-1/2 md:w-full leading-none mb-4'>
            ZX9 SPEAKER
          </h1>
          <h6 className='text-xs text-whity font-normal opacity-75 lg:w-9/12 pb-2 w-4/5 mx-auto'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h6>
          <button className='bg-blacky text-xxxs font-semibold transition  duration-200 text-whity hover:bg-blackyhover uppercase tracking-tighter '>
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSpeaker1;
