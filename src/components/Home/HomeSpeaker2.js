import React from 'react';
import speaker2Desktop from '../../photoes/home/desktop/image-speaker-zx7.jpg';
import speaker2Tablet from '../../photoes/home/tablet/image-speaker-zx7.jpg';
import speaker2Mobile from '../../photoes/home/mobile/image-speaker-zx7.jpg';
import Btn2 from '../Buttons/Btn2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const HomeSpeaker2 = () => {
  return (
    <div
      className='speaker2 container relative mt-5'
      data-aos='fade-in'
      data-aos-duration='1300'
    >
      <div className='absolute w-full h-full flex flex-col justify-center left-1/7 '>
        <h2 className='text-larg mb-5 tracking-wider font-bold'>ZX7 SPEAKER</h2>
        <Link to='/zx7-speaker'>
          <Btn2 />
        </Link>
      </div>
      <img
        src={speaker2Desktop}
        alt=''
        className='w-full rounded-lg hidden lg:block'
      />
      <img
        src={speaker2Tablet}
        alt=''
        className='w-full rounded-lg hidden md:block lg:hidden'
      />
      <img
        src={speaker2Mobile}
        alt=''
        className='w-full rounded-lg  md:hidden'
      />
    </div>
  );
};

export default HomeSpeaker2;
