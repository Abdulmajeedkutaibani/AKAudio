import React, { useEffect } from 'react';
import { FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import cartIcon from '../../photoes/shared/desktop/icon-cart.svg';
import Cart from '../Cart/Cart';
import Categories from '../Shared/Categories';

const Navbar = () => {
  const { totalUniqueItems } = useCart();

  const showMenu = () => {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else menu.classList.add('hidden');
  };
  const hideEverything = () => {
    const cartContainer = document.querySelector('.cart-container');
    const cartShadow = document.querySelector('.cart-shadow');

    if (!cartContainer.classList.contains('hidden')) {
      cartContainer.classList.add('hidden');
      cartShadow.classList.add('hidden');
    }
  };
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
    <nav className='bg-heroBlack h-22 lg:h-24 flex relative z-40'>
      {/* logo  */}

      <div className=' sm:w-4/5 w-11/12 md:w- mx-auto flex items-center relative'>
        {/* menu btn */}
        <div className='block w-1/12  lg:hidden  flex items-center justify-center'>
          <button
            className='flex items-center rounded text-whity '
            onClick={showMenu}
          >
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
        <div
          className='flex  items-center flex-shrink-0 text-whity justify-center md:justify-start flex-grow  '
          onClick={hideEverything}
        >
          <Link to='/'>
            <span className='font-semibold text-xl tracking-tight font-manrope '>
              AKAudio
            </span>
          </Link>
        </div>
        {/* List */}

        <div
          className='hidden lg:flex lg:flex-grow justify-center lg:space-x-9  uppercase tracking-wider text-xxxs font-bold '
          onClick={hideEverything}
        >
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

        <div
          className='cursor-pointer flex justify-end ml-auto w-1/12'
          onClick={showCart}
        >
          <img src={cartIcon} alt='' className='' />
          <span className='text-whity bg-orangy w-4 h-4 rounded-full flex justify-center items-center absolute top-4 -right-3'>
            {totalUniqueItems}
          </span>
        </div>
        {/* cart */}
        <div className='cart-container hidden '>
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
