import React from 'react';
import Btn1 from '../Buttons/Btn1';
import ProductBrief from './ProductBrief';
import Products from '../../data.json';
import moduleName from '../../';

const Product = () => {
  return Products.filter((product) => {
    return product.category == 'headphones';
  }).map((product) => (
    <div className='container flex space-x-32  w-full h-xl'>
      <div className='relative w-1/2 bg-greyish flex justify-center items-center'>
        <div className=''>
          <img src={`${product.image.desktop}`} alt='' className='w-80 h-80' />
        </div>
      </div>
      <div className={`flex justify-center flex-col w-1/2  space-y-lg`}>
        <h1 className=' w-5/6 text-xxl font-semibold mb-2 tracking-wider leading-11'>
          {product.name}
        </h1>
        <h6 className='text-xs  font-thin opacity-75 mb-10 w-9/12 '>
          {product.description}
        </h6>
        <Btn1 />
      </div>
    </div>
  ));
};

export default Product;
