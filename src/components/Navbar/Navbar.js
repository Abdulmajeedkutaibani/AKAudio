import React, { useEffect } from 'react';
import { FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import cartIcon from '../../photoes/shared/desktop/icon-cart.svg';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const { totalUniqueItems } = useCart();

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
    <nav className='bg-blackmain h-24 flex'>
      <div className=' w-5/6 mx-auto flex items-center justify-between flex-wrap relative'>
        <div className='flex items-center flex-shrink-0 text-whity mr-6'>
          <span className='font-semibold text-xl tracking-tight font-manrope'>
            AKAudio
          </span>
        </div>
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2  rounded text-whity '>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex  lg:items-center lg:w-auto'>
          <div className='lg:flex-grow justify-center space-x-9 flex uppercase tracking-wider text-xxxs font-bold '>
            <Link
              to='/home'
              className='home-page-link block transition duration-200 lg:inline-block lg:mt-0 text-whity hover:text-orangy focus:text-orangy'
            >
              home
            </Link>
            <Link
              to='/headphones'
              className='block transition duration-200 lg:inline-block lg:mt-0 text-whity hover:text-orangy focus:text-orangy'
            >
              headphones
            </Link>
            <Link
              to='/speakers'
              className='block transition duration-200 lg:inline-block lg:mt-0 text-whity hover:text-orangy focus:text-orangy'
            >
              speakers
            </Link>
            <Link
              to='/earphones'
              className='block transition duration-200 lg:inline-block lg:mt-0 text-whity hover:text-orangy focus:text-orangy'
            >
              earphones
            </Link>
          </div>
          <div className='cursor-pointer flex' onClick={showCart}>
            <img src={cartIcon} alt='' />
            <span className='text-whity bg-orangy w-4 h-4 rounded-full flex justify-center items-center absolute top-4 -right-3'>
              {totalUniqueItems}
            </span>
          </div>
        </div>
        <div className='cart-container hidden z-20'>
          <Cart />
        </div>
      </div>
      <div
        className='cart-shadow w-full h-full absolute bg-blacky opacity-30 hidden z-10 top-0'
        onClick={showCart}
      ></div>
    </nav>
  );
};

export default Navbar;
