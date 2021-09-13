import React from 'react';
import { FaToggleOn } from 'react-icons/fa';
import cartIcon from '../../photoes/shared/desktop/icon-cart.svg';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const showCart = () => {
    const cartContainer = document.querySelector('.cart-container');
    const cartShadow = document.querySelector('.cart-shadow');

    if (cartContainer.classList.contains('hidden')) {
      cartContainer.classList.remove('hidden');
      cartShadow.classList.remove('hidden');
    } else {
      cartContainer.classList.add('hidden');
      cartShadow.classList.add('hidden');
    }
  };
  return (
    <nav class='bg-blacky'>
      <div className=' w-90% mx-auto flex items-center justify-between flex-wrap relative'>
        <div class='flex items-center flex-shrink-0 text-whity mr-6'>
          <span class='font-semibold text-xl tracking-tight font-manrope'>
            AKAudio
          </span>
        </div>
        <div class='block lg:hidden'>
          <button class='flex items-center px-3 py-2 border rounded text-whity border-teal-400 hover:text-whity hover:border-white'>
            <svg
              class='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div class='w-full block flex-grow lg:flex  lg:items-center lg:w-auto'>
          <div class='text-sm lg:flex-grow justify-center space-x-4'>
            <a
              href='#responsive-header'
              class='block  lg:inline-block lg:mt-0 text-whity hover:text-white '
            >
              Docs
            </a>
            <a
              href='#responsive-header'
              class='block  lg:inline-block lg:mt-0 text-whity hover:text-whity '
            >
              Examples
            </a>
            <a
              href='#responsive-header'
              class='block  lg:inline-block lg:mt-0 text-whity hover:text-whity'
            >
              Blog
            </a>
          </div>
          <div className='cursor-pointer' onClick={showCart}>
            <img src={cartIcon} alt='' />
          </div>
        </div>
        <div className='cart-container hidden z-20'>
          <Cart />
        </div>
      </div>
      <div
        className='cart-shadow w-full h-full absolute bg-blacky opacity-30 hidden z-10'
        onClick={showCart}
      ></div>
    </nav>
  );
};

export default Navbar;
