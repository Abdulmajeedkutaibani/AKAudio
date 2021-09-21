import React from 'react';
import { useCart } from 'react-use-cart';
import ProductsData from '../../data.json';
import Btn1 from '../Buttons/Btn1';
import Cart from '../Cart/Cart';
import BestGear from '../Shared/BestGear';
import Categories from '../Shared/Categories';
import { useHistory } from 'react-router-dom';

const Product = ({ itemId }) => {
  const {
    addItem,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal,
  } = useCart();
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <div className='w-11/12 lg:w-4/5 mx-auto'>
      <button
        onClick={goToPreviousPath}
        className='block opacity-50 capitalize mt-20 w-16'
      >
        go back
      </button>
      <div className='products mb-40 flex flex-col sm:flex-row gap-30 sm:gap-18 mt-14'>
        <div className=' lg:h-xl w-1/2 bg-greyish flex justify-center items-center rounded-lg'>
          <div>
            <img src={ProductsData[itemId].image.desktop} alt='' className='' />
          </div>
        </div>
        <div className='flex justify-center flex-col w-1/2  space-y-lg'>
          <span className='text-xxs tracking-widest text-orangy font-normal uppercase'>
            {ProductsData[itemId].new && 'new product'}
          </span>
          <h1 className=' w-5/6 text-xxl font-semibold mb-2 tracking-wider leading-11'>
            {ProductsData[itemId].name}
          </h1>
          <h6 className='text-xs  font-thin opacity-75 mb-10 w-9/12 '>
            {ProductsData[itemId].description}
          </h6>
          <span className='text-small tracking-tight'>
            $ {ProductsData[itemId].price}
          </span>

          <div className='flex space-x-3 pt-3'>
            {items
              .filter((item) => {
                if (item.id == ProductsData[itemId].id) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <div className='flex w-30 h-12 justify-evenly items-center bg-greyish'>
                    <button
                      className='text-blacky text-opacity-25 hover:bg-grey hover:bg-opacity-30 transition duration-200 hover:text-orangy'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className='text-xxxs font-bold uppercase p-1'>
                      {item.quantity}
                    </span>
                    <button
                      className='text-blacky text-opacity-25 hover:bg-grey hover:bg-opacity-30 transition duration-200 hover:text-orangy'
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                );
              })}
            <button
              className='bg-orangy text-xxxs font-semibold transition  duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter'
              onClick={() => addItem(ProductsData[itemId])}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className=' flex flex-col lg:flex-row gap-30 mb-40'>
        <div className='lg:w-1/2 w-full'>
          <h2 className='uppercase mb-8 text-xl font-bold tracking-tight'>
            features
          </h2>
          <p className=' text-xs opacity-50 font-extralight'>
            {ProductsData[itemId].features}
          </p>
        </div>
        <div className='flex lg:flex-col'>
          <h2 className='uppercase mb-8 text-xl font-bold tracking-tight w-1/2 lg:w-full  '>
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
          <img
            src={ProductsData[itemId].gallery.first.desktop}
            alt=''
            className='rounded-lg'
          />
          <img
            src={ProductsData[itemId].gallery.second.desktop}
            alt=''
            className='rounded-lg'
          />
        </div>
        <div>
          <img
            src={ProductsData[itemId].gallery.third.desktop}
            alt=''
            className='rounded-lg h-full'
          />
        </div>
      </div>
      <div className=' mb-40'>
        <h1 className='uppercase font-bold text-xl mb-16 text-center'>
          you may also like
        </h1>
        <div className='flex sm:gap-2 lg:gap-7 mb-40'>
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
        <Categories />
        <BestGear />
      </div>
    </div>
  );
};

export default Product;
