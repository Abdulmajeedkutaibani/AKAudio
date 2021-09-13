import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className=' w-4/12 bg-whity absolute top-20 right-0 rounded-lg'>
      <div className='flex items-center mt-5 w-11/12 mx-auto justify-between'>
        <h1 className='font-bold text-small tracking-tight'>
          Cart ({totalUniqueItems})
        </h1>
        <button
          className='opacity-50 font-extralight text-xs underline'
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
                ${item.price}
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
        <span className='text-small font-bold uppercase'>$ {cartTotal}</span>
      </div>

      <div className='w-full flex justify-center mb-8'>
        <button className='bg-orangy text-xxxs font-semibold transition duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter w-11/12 '>
          checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
