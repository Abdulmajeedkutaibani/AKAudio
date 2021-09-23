import React from 'react';
import { useCart } from 'react-use-cart';

const Summary = () => {
  const { items, cartTotal } = useCart();

  return (
    <div className=' bg-whity rounded-lg h-1/5 lg:w-1/3'>
      <h2 className='uppercase font-bold text-small mb-5 mx-auto w-11/12 pt-8'>
        summary
      </h2>
      <ul className='w-11/12 mx-auto'>
        {items.map((item) => (
          <li className='flex  mt-5 mb-5' key={item.id}>
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
            <span className='ml-auto font-bold text-xxs opacity-50 mt-1'>
              x{item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <div className='mb-5'>
        <div className='flex justify-between w-11/12 mx-auto mb-1'>
          <span className='uppercase opacity-50 text-xs font-normal'>
            total
          </span>
          <span className='text-small font-bold uppercase'>
            $ {cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </div>
        <div className='flex justify-between w-11/12 mx-auto mb-1'>
          <span className='uppercase opacity-50 text-xs font-normal'>
            shipping
          </span>
          <span className='text-small font-bold uppercase'>$ 50</span>
        </div>
        <div className='flex justify-between w-11/12 mx-auto mb-1'>
          <span className='uppercase opacity-50 text-xs font-normal mb-4'>
            vat (included)
          </span>
          <span className='text-small font-bold uppercase'>
            $ {(cartTotal / 5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </div>
        <div className='flex justify-between w-11/12 mx-auto '>
          <span className='uppercase opacity-50 text-xs font-normal'>
            grand total
          </span>
          <span className='text-small font-bold uppercase'>
            ${' '}
            {(cartTotal + 50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </div>
      </div>
      <div className='w-full flex justify-center mb-8'>
        <button
          type='submit'
          className='bg-orangy text-xxxs font-semibold transition duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter w-11/12 h-12 text-center leading-12 mb-5'
        >
          continue & pay
        </button>
      </div>
    </div>
  );
};

export default Summary;
