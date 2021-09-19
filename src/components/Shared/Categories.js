import React from 'react';
import Btn3 from '../Buttons/Btn3';
import headphoneCat from './../../photoes/headphone-category.png';
import speakersCat from './../../photoes/speakers-category.png';
import earphonesCat from './../../photoes/earphones-category.png';
import arrow from '../Buttons/Arrow.svg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Categories = () => {
  return (
    <div className='container flex flex-col md:space-x-8 md:space-y-0 md:flex-row mb-40 '>
      <div className='category-card  w-4/12 h-80 relative flex-col '>
        <div className='image-shadow flex flex-col items-center'>
          <img
            src={headphoneCat}
            alt=''
            className='category-image w-32 z-10 '
          />
          <div className='shadowing w-28'>
            <br />
          </div>
        </div>
        <div className='bg-greyish h-56 absolute w-full bottom-0 rounded-xl'>
          <div className='flex-col text-center pt-32'>
            <h4 className='text-small font-manrope font-bold tracking-tight'>
              HEADPHONES
            </h4>
            <Link
              to='/headphones'
              className='block mx-auto w-14 flex justify-between items-center 
        h-16 text-xxxs transition duration-200 
text-blacky text-opacity-50 hover:text-orangy'
            >
              SHOP
              <img src={arrow} alt='' className='h-5 w-2 ' />
            </Link>
          </div>
        </div>
      </div>
      <div className='category-card  w-4/12 h-80 relative flex-col '>
        <div className='image-shadow flex flex-col items-center'>
          <img
            src={speakersCat}
            alt=''
            className='category-image w-32  z-10 '
          />
          <div className='shadowing w-32'>
            <br />
          </div>
        </div>
        <div className='bg-greyish h-56 absolute w-full bottom-0 rounded-xl'>
          <div className='flex-col text-center pt-32'>
            <h4 className='text-small font-manrope font-bold tracking-tight'>
              SPEAKERS
            </h4>
            <Link
              to='/speakers'
              className='block mx-auto w-14 flex justify-between items-center
        h-16 text-xxxs transition duration-200 
text-blacky text-opacity-50 hover:text-orangy'
            >
              SHOP
              <img src={arrow} alt='' className='h-5 w-2 ' />
            </Link>
          </div>
        </div>
      </div>
      <div className='category-card  w-4/12 h-80 relative flex-col '>
        <div className='image-shadow flex flex-col items-center'>
          <img
            src={earphonesCat}
            alt=''
            className='category-image w-32  z-10 mt-8 '
          />
          <div className='shadowing w-20'>
            <br />
          </div>
        </div>
        <div className='bg-greyish h-56 absolute w-full bottom-0 rounded-xl'>
          <div className='flex-col text-center pt-32'>
            <h4 className='text-small font-manrope font-bold tracking-tight'>
              EARPHONES
            </h4>
            <Link
              to='earphones'
              className='block mx-auto w-14 flex justify-between items-center
        h-16 text-xxxs transition duration-200 
text-blacky text-opacity-50 hover:text-orangy'
            >
              SHOP
              <img src={arrow} alt='' className='h-5 w-2 ' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
