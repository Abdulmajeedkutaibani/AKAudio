import React from 'react';
import { useCart } from 'react-use-cart';
import ProductsData from '../../data.json';
import Btn1 from '../Buttons/Btn1';
import Cart from '../Cart/Cart';

const Product = ({ itemId }) => {
  const { addItem } = useCart();
  return (
    <div className='flex space-x-4'>
      <Cart />
      <div className='w-4/5 mx-auto'>
        <div className='products mb-40 container flex space-x-32 '>
          <div className='relative w-1/2 bg-greyish flex justify-center items-center rounded-lg'>
            <div>
              <img
                src={ProductsData[itemId].image.desktop}
                alt=''
                className='w-80 h-80'
              />
            </div>
          </div>
          <div className={`flex justify-center flex-col w-1/2  space-y-lg`}>
            <span className='text-xxs tracking-widest text-orangy font-normal uppercase'>
              {' '}
              {ProductsData[itemId].new && 'new product'}
            </span>
            <h1 className=' w-5/6 text-xxl font-semibold mb-2 tracking-wider leading-11'>
              {ProductsData[itemId].name}
            </h1>
            <h6 className='text-xs  font-thin opacity-75 mb-10 w-9/12 '>
              {ProductsData[itemId].description}
            </h6>
            <span className='text-small tracking-tight'>$ 2,999</span>
            <div className='flex space-x-3 pt-3'>
              <div className='flex w-30 h-12 justify-evenly items-center bg-greyish'>
                <span className='text-blacky opacity-25'>-</span>
                <span>1</span>
                <span className='text-blacky opacity-25'>+</span>
              </div>
              <button
                className='bg-orangy text-xxxs font-semibold transition  duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter'
                onClick={() => addItem(ProductsData[itemId])}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className='container flex space-x-30 mb-40'>
          <div className='w-1/2'>
            <h2 className='uppercase mb-8 text-xl font-bold tracking-tight'>
              features
            </h2>
            <p className=' text-xs opacity-50 font-extralight'>
              {ProductsData[itemId].features}
            </p>
          </div>
          <div>
            <h2 className='uppercase mb-8 text-xl font-bold tracking-tight '>
              in the box
            </h2>
            <ul className='space-y-1'>
              {ProductsData[itemId].includes.map((box) => {
                return (
                  <li className='space-x-4 '>
                    <span className='text-xs text-orangy font-bold'>
                      {box.quantity}x
                    </span>
                    <span className='font-extralight opacity-50 font-normal'>
                      {box.item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='mb-40 flex container space-x-5 w-full'>
          <div className='space-y-5'>
            <img src={ProductsData[itemId].gallery.first.desktop} alt='' />
            <img src={ProductsData[itemId].gallery.second.desktop} alt='' />
          </div>
          <div>
            <img src={ProductsData[itemId].gallery.third.desktop} alt='' />
          </div>
        </div>
        <div className='container mb-40'>
          <h1 className='uppercase font-bold text-xl mb-16 text-center'>
            you may also like
          </h1>
          <div className='flex space-x-5'>
            {ProductsData[itemId].others.map((otherItem) => {
              return (
                <div className='flex flex-col items-center'>
                  <div className='mb-10 '>
                    <img
                      src={otherItem.image.desktop}
                      alt=''
                      className='rounded-lg'
                    />
                  </div>
                  <span className='tracking-wide text-medium font-bold uppercase mb-8'>
                    {otherItem.name}
                  </span>
                  <Btn1 />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
