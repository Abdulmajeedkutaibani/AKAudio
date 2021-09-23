import React, { useEffect } from 'react';
import Form from '../Form/Form';
import { Link, useHistory } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const hideNotification = () => {
    const thankYouMessageShadow = document.querySelector(
      '.thank-you-message-shadow'
    );
    const thanksMessageContainer = document.querySelector(
      '.thanks-message-container'
    );

    thanksMessageContainer.classList.add('hidden');
    thankYouMessageShadow.classList.add('hidden');
  };

  const { items, cartTotal } = useCart();
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <div className='  pb-28 lg:pb-36 relative'>
      <div
        className='thank-you-message-shadow  w-full h-full  bg-blacky opacity-30 absolute z-30'
        onClick={hideNotification}
      ></div>
      <div className='thanks-message-container  md:w-1/2 w-11/12 flex absolute top-1/3  sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-50'>
        <div className='p-5 md:p-6 bg-whity w-full rounded-lg z-20'>
          <div className='bg-orangy h-16 w-16 rounded-full flex justify-center items-center mb-8'>
            <FaCheck className='text-whity w-1/3 h-1/3' />
          </div>
          <h2 className='font-bold text-medium md:text-xl tracking-tight uppercase mb-4 '>
            THANK YOU <br />
            FOR YOUR ORDER
          </h2>
          <p className='font-extralight text-xs opacity-50 mb-8'>
            You will receive an email confirmation shortly.
          </p>
          <div className='flex lg:flex-row flex-col'>
            <div className=' bg-greyish  lg:w-3/5 rounded-t-lg md:rounded-l-lg'>
              <ul className='p-4 '>
                {items
                  .filter((item, index) => index < 1)
                  .map((item) => (
                    <li
                      className='w-full flex border-b border-formBorder pb-2'
                      key={item.id}
                    >
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
                <span className='block mt-2 text-center opacity-50 text-xxxxs tracking-tightestx font-bold'>
                  and {items.length - 1} other item(s)
                </span>
              </ul>
            </div>
            <div className='bg-blacky text-whity lg:w-2/5 flex items-center p-4 rounded-b-lg md:rounded-r-lg'>
              <div className='flex flex-col'>
                <span className='opacity-50 font-extralight text-xs uppercase'>
                  grand total
                </span>
                <span className='font-bold text-small uppercase'>
                  $ {cartTotal}
                </span>
              </div>
            </div>
          </div>
          <Link
            to='/home'
            className='bg-orangy text-xxxs font-semibold transition  duration-200 text-whity hover:bg-orangelight uppercase tracking-tighter mt-12 w-full block h-12 flex justify-center items-center'
          >
            back to home
          </Link>
        </div>
      </div>

      <div className='sm:pt-4 lg:pt-18 w-11/12 lg:w-5/6 mx-auto sm:mb-4 lg:mb-9'>
        <button
          onClick={goToPreviousPath}
          className='block opacity-50 capitalize w-16'
        >
          go back
        </button>
      </div>
      <Form />
    </div>
  );
};

export default CheckoutPage;
