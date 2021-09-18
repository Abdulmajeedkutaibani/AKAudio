import React, { useState } from 'react';
import Btn1 from '../Buttons/Btn1';
import ProductsData from '../../data.json';
import BestGear from '../Shared/BestGear';
import Categories from '../Home/Categories';
import { Link } from 'react-router-dom';

const ProductsListPage = ({ category }) => {
  return (
    <div>
      <div className='h-60 bg-blacky flex justify-center items-center'>
        <span className='text-whity font-bold text-xxl tracking-normal uppercase'>
          {category == 'headphones' && 'headphones'}
          {category == 'speakers' && 'speakers'}
          {category == 'earphones' && 'earphones'}
        </span>
      </div>
      <div className='even:flex mt-40 w-5/6 mx-auto'>
        {ProductsData.filter((product) => {
          return product.category == `${category}`;
        }).map((product) => (
          <div className='products mb-40 container flex space-x-32  w-full h-xl '>
            <div className='relative w-1/2 bg-greyish flex justify-center items-center rounded-lg'>
              <div>
                <img
                  src={`${product.image.desktop}`}
                  alt=''
                  className='w-80 h-80'
                />
              </div>
            </div>
            <div className={`flex justify-center flex-col w-1/2  space-y-lg`}>
              <span className='text-xxs tracking-widest text-orangy font-normal uppercase'>
                {product.new && 'new product'}
              </span>
              <h1 className=' w-5/6 text-xxl font-semibold mb-2 tracking-wider leading-11'>
                {product.name}
              </h1>
              <h6 className='text-xs  font-thin opacity-75 mb-10 w-9/12 '>
                {product.description}
              </h6>

              <Link
                to={`/${product.slug}`}
                className='bg-orangy text-xxxs font-semibold transition  duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter'
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        ))}
        <Categories />
        <BestGear />
      </div>
    </div>
  );
};

export default ProductsListPage;
