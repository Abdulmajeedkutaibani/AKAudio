import React from 'react';
import headphoneCat from './../../photoes/headphone-category.png';
import speakersCat from './../../photoes/speakers-category.png';
import earphonesCat from './../../photoes/earphones-category.png';
import arrow from '../Buttons/Arrow.svg';
import { Link } from 'react-router-dom';
import 'animate.css';

const Menu = () => {
  const hideMenu = () => {
    const menu = document.querySelector('.menu');
    const cartShadow = document.querySelector('.cart-shadow');

    cartShadow.classList.add('hidden');
    menu.classList.add('hidden');
  };
  return (
    <div
      className='menu bg-whity hidden  w-full absolute flex flex-col  sm:flex-row sm:space-x-2  sm:space-y-0 gap-y-3 px-4 sm:px-6 pt-12 pb-14 z-40 animate__animated
      animate__fadeInDown animate__faster'
    >
      <div className='category-card sm:w-4/12 h-80 relative flex-col '>
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
              onClick={hideMenu}
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
      <div className='category-card  sm:w-4/12 h-80 relative flex-col '>
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
              onClick={hideMenu}
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
      <div className='category-card  sm:w-4/12 h-80 relative flex-col '>
        <div className='image-shadow flex flex-col items-center'>
          <img
            src={earphonesCat}
            alt=''
            className='category-image w-40  z-10  '
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
              onClick={hideMenu}
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

export default Menu;
