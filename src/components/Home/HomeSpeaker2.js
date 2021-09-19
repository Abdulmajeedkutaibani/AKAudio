import React from 'react';
import speaker2 from '../../photoes/home/desktop/image-speaker-zx7.jpg';
import Btn2 from '../Buttons/Btn2';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HomeSpeaker2 = () => {
  return (
    <div
      className='speaker2 container relative mt-5'
      data-aos='fade-in'
      data-aos-duration='1300'
    >
      <div className='absolute w-full h-full flex flex-col justify-center left-1/7 '>
        <h2 className='text-larg mb-5 tracking-wider'>ZX7 SPEAKER</h2>
        <Btn2 />
      </div>
      <img src={speaker2} alt='' className='w-full rounded-lg' />
    </div>
  );
};

export default HomeSpeaker2;
