import React from 'react';
import earphonesDesktop from '../../photoes/home/desktop/image-earphones-yx1.jpg';
import earphonesTablet from '../../photoes/home/tablet/image-earphones-yx1.jpg';
import earphonesMobile from '../../photoes/home/mobile/image-earphones-yx1.jpg';
import Btn2 from '../Buttons/Btn2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const HomeEarphones = () => {
  return (
    <div className='container w-full flex flex-col md:flex-row lg:gap-5 md:gap-2 gap-4 mt-5 '>
      <img
        src={earphonesDesktop}
        alt=''
        className='w-1/2 rounded-xl hidden lg:block'
        data-aos='fade-in'
        data-aos-duration='1300'
      />
      <img
        src={earphonesTablet}
        alt=''
        className='w-1/2 rounded-xl hidden md:block lg:hidden'
        data-aos='fade-in'
        data-aos-duration='1300'
      />
      <img
        src={earphonesMobile}
        alt=''
        className='w-full rounded-xl  md:hidden '
        data-aos='fade-in'
        data-aos-duration='1300'
      />
      <div
        className='bg-greyish h-52 md:h-80 md:w-1/2 w-full rounded-xl relative'
        data-aos='fade-in'
        data-aos-duration='1300'
        data-aos-delay='500'
      >
        <div className='md:absolute w-full h-full flex flex-col justify-center '>
          <h2 className=' text-larg font-bold mb-5 tracking-wider  mx-5'>
            YX1 EARPHONES
          </h2>
          <Link to='/yx1-earphones'>
            <button
              className='
                   tracking-tighter
                    text-xxxs 
                    transition 
                    duration-200 
                    text-blacky 
                    hover:bg-blacky 
                  hover:text-whity 
                  border-2 
                  hover:border-blacky  mx-5'
            >
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeEarphones;
