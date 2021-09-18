import React from 'react';
import Form from '../Form/Form';
import { Link, useHistory } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { FaCheck } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { Filter } from 'heroicons-react';

const CheckoutPage = () => {
  // const showCart = () => {
  //   const cartContainer = document.querySelector('.cart-container');
  //   const cartShadow = document.querySelector('.cart-shadow');

  //   if (cartContainer.classList.contains('hidden')) {
  //     cartContainer.classList.remove('hidden');
  //     cartShadow.classList.remove('hidden');
  //   } else {
  //     cartContainer.classList.add('hidden');
  //     cartShadow.classList.add('hidden');
  //   }
  // };
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,

    cartTotal,
  } = useCart();

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <div className='mt-18 mb-36 relative'>
      <div className='bg-blacky flex justify-center pt-36 w-full h-full bg-opacity-40 absolute -top-20'>
        <div className='bg-whity w-1/3 h-xl  top-0 flex justify-center items-center'>
          <div className='w-full h-full p-6 bg-greyish'>
            <div className='bg-orangy h-16 w-16 rounded-full flex justify-center items-center mb-8'>
              <FaCheck className='text-whity w-1/3 h-1/3' />
            </div>
            <h2 className='font-bold text-xl tracking-tight uppercase mb-4'>
              THANK YOU <br />
              FOR YOUR ORDER
            </h2>
            <p className='font-extralight text-xs opacity-50 mb-8'>
              You will receive an email confirmation shortly.
            </p>
            <div className='flex '>
              <div className=' bg-whity w-3/5'>
                <ul className='p-4'>
                  {items
                    .filter((item, index) => index < 1)
                    .map((item) => (
                      <li className='flex border-b-2 w-full' key={item.id}>
                        <img
                          src={item.image.desktop}
                          alt=''
                          className=' w-12 h-12 rounded-lg mr-3'
                        />
                        <div className=''>
                          <h2 className=' text-xs font-bold'>{item.name}</h2>
                          <span className='font-bold text-xxs opacity-50'>
                            ${item.price}
                          </span>
                        </div>
                        <span className='ml-auto font-bold text-xxs opacity-50 mt-1'>
                          x{item.quantity}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className='bg-blacky text-whity w-2/5'>fhfghhfrg</div>
            </div>
            <Link
              to='/home'
              className='bg-orangy text-xxxs font-semibold transition  duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter mt-12 w-full block h-12 flex justify-center items-center'
            >
              back to home
            </Link>
          </div>
        </div>
      </div>

      <div className='w-5/6 mx-auto mb-9'>
        <button
          onClick={goToPreviousPath}
          className='block opacity-50 capitalize mt-20 w-16'
        >
          go back
        </button>
      </div>
      <Form />
    </div>
  );
};

export default CheckoutPage;
