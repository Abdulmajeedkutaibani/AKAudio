import React from 'react';
import ProductsData from '../../data.json';

const Product = ({}) => {
  return (
    <div>
      <div className='products mb-40 container flex space-x-32  w-full h-xl '>
        <div className='relative w-1/2 bg-greyish flex justify-center items-center'>
          <div>
            <img src={``} alt='' className='w-80 h-80' />
          </div>
        </div>
        <div className={`flex justify-center flex-col w-1/2  space-y-lg`}>
          <h1 className=' w-5/6 text-xxl font-semibold mb-2 tracking-wider leading-11'>
            {} Lorem ipsum dolor sit
          </h1>
          <h6 className='text-xs  font-thin opacity-75 mb-10 w-9/12 '>
            {} Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            exercitationem sint molestias totam reprehenderit. Temporibus
            dignissimos, quia harum quod, repellat debitis libero veniam minima
            nemo sunt non quidem fuga velit!
          </h6>
          <span className='text-small tracking-tight'>$ 2,999</span>
          <div className='flex space-x-3 pt-3'>
            <div className='flex w-30 h-12 justify-evenly items-center bg-greyish'>
              <span className='text-blacky opacity-25'>-</span>
              <span>1</span>
              <span className='text-blacky opacity-25'>+</span>
            </div>
            <button className='bg-orangy text-xxxs font-semibold transition  duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter'>
              add to cart
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Product;
