import React, { useState } from 'react';
import Btn1 from '../Buttons/Btn1';
import ProductsData from '../../data.json';
import BestGear from '../Shared/BestGear';
import Categories from '../Shared/Categories';
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
      <div className='  w-5/6 mx-auto '>
        <div className='flex flex-col-reverse  mb-30 lg:mb-40'>
          {ProductsData.filter((product) => {
            return product.category == `${category}`;
          }).map((product) => (
            <div
              className='products mt-16 md:mt-30 lg:mt-40 container flex flex-col lg:flex-row  items-center lg:items-start w-full  text-center lg:text-left gap-14 lg:gap-32'
              key={product.id}
            >
              <div className='relative lg:w-1/2 w-full bg-greyish flex justify-center items-center '>
                <div>
                  <img
                    src={`${product.image.desktop}`}
                    alt=''
                    className='md:h-80  lg:w-full lg:h-full rounded-lg'
                  />
                </div>
              </div>
              <div className='flex justify-center items-center lg:items-start flex-col lg:w-1/2  w-11/12'>
                <span className='text-xxs tracking-widest text-orangy font-normal uppercase mb-3 lg:mb-'>
                  {product.new && 'new product'}
                </span>
                <h1 className=' w-5/6 text-larg md:text-xxl font-semibold mb-2 tracking-wider leading-11 mb-4'>
                  {product.name}
                </h1>
                <h6 className='text-xs font-extralight opacity-50 mb-9 lg:w-9/12  '>
                  {product.description}
                </h6>
                <Link
                  to={`/${product.slug}`}
                  className='block w-40 h-6 flex justify-center items-center bg-orangy text-xxxs font-semibold transition  duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter'
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Categories />
        <BestGear />
      </div>
    </div>
  );
};

export default ProductsListPage;
