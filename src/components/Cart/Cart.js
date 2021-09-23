import React from 'react';
import { useCart } from 'react-use-cart';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    emptyCart,
    cartTotal,
  } = useCart();

  if (isEmpty)
    return (
      <div className=' lg:w-4/12 sm:w-1/2 bg-whity absolute top-20 right-0 rounded-lg p-5'>
        <div className='flex flex-col lg:items-center  w-11/12 mx-auto justify-center gap-3'>
          <h1 className='font-bold text-small tracking-tight'>
            Your cart is empty
          </h1>
          <AiOutlineShoppingCart className=' w-24 h-24 ' />
        </div>
      </div>
    );

  return (
    <div className=' lg:w-1/2 sm:w-1/2  bg-whity absolute top-28 right-0 rounded-lg'>
      <div className='flex items-center mt-5 w-11/12 mx-auto justify-between'>
        <h1 className='font-bold text-small tracking-tight'>
          Cart ({totalUniqueItems})
        </h1>
        <button
          className='opacity-50 font-extralight text-xs underline text-right'
          onClick={emptyCart}
        >
          Remove all
        </button>
      </div>

      <ul className='w-11/12 mx-auto'>
        {items.map((item) => (
          <li className='flex items-center mt-5 mb-5' key={item.id}>
            <img
              src={item.image.desktop}
              alt=''
              className=' w-16 h-16 rounded-lg mr-3'
            />
            <div className='my-auto'>
              <h2 className='text-xs font-bold'>{item.name}</h2>
              <span className='font-bold text-xxs opacity-50'>
                $ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </div>
            <div className='flex w-30 h-5 justify-betwen items-center bg-greyish ml-auto '>
              <button
                className='text-blacky opacity-25 w-1/3'
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className='w-1/3 text-center'>{item.quantity}</span>
              <button
                className='text-blacky opacity-25 w-1/3'
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex justify-between w-11/12 mx-auto mb-lg'>
        <span className='uppercase opacity-50 text-xs font-normal'>total</span>
        <span className='text-small font-bold uppercase'>
          $ {cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </div>

      <div className='w-full flex justify-center mb-8'>
        <a
          href='/checkout'
          className='bg-orangy text-xxxs font-semibold transition duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter w-11/12 h-12 text-center leading-12'
        >
          checkout
        </a>
      </div>
    </div>
  );
};

export default Cart;
