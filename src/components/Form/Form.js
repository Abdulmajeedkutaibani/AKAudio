import { Scale } from 'heroicons-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const showData = () => {
    const eMoneyInfo = document.querySelector('.e-money-info');
    if (eMoneyInfo.classList.contains('scale-0')) {
      eMoneyInfo.classList.remove('scale-0');
    }
  };
  const hideData = () => {
    const eMoneyInfo = document.querySelector('.e-money-info');
    eMoneyInfo.classList.add('scale-0');
  };

  return (
    <div className='container w-full'>
      <h1 className='uppercase text-xl font-bold mb-10 tracking-tight'>
        checkout
      </h1>
      <form>
        <div className='mb-14'>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            billing details
          </h2>
          <div className='flex space-x-3 mb-4'>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                name
              </label>
              <input
                type='text'
                name='name'
                placeholder='Abdulmajeed Kutaibani'
                className='h-14 rounded-lg border border-formBorder p-3'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                email address
              </label>
              <input
                type='text'
                name='name'
                placeholder='Abodymeo@gmail.com'
                className='h-14 rounded-lg border border-formBorder p-3'
              />
            </div>
          </div>
          <div className='flex flex-col w-1/3'>
            <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
              phone number
            </label>
            <input
              type='text'
              name='name'
              placeholder='+1 234-567-8900'
              className='h-14 rounded-lg border border-formBorder p-3'
            />
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div className='space-y-4 mb-14'>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            shipping info
          </h2>
          <div className='flex flex-col'>
            <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1 '>
              address
            </label>
            <input
              type='text'
              name='name'
              placeholder='1137 Williams Avenue'
              className='h-14 rounded-lg border border-formBorder p-3'
            />
          </div>
          <div className='flex space-x-3'>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                ZIP code
              </label>
              <input
                type='text'
                name='name'
                placeholder='10001'
                className='h-14 rounded-lg border border-formBorder p-3'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                city
              </label>
              <input
                type='text'
                name='name'
                placeholder='Istanbul'
                className='h-14 rounded-lg border border-formBorder p-3'
              />
            </div>
          </div>
          <div className='flex flex-col w-1/3'>
            <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
              country
            </label>
            <input
              type='text'
              name='name'
              placeholder='Turkey'
              className='h-14 rounded-lg border border-formBorder p-3'
            />
          </div>
        </div>
        {/* ////////////////////////////////// */}
        <div className='space-y-4 mb-14'>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            payment details
          </h2>
          <div className='flex justify-between mb-4'>
            <h2 className='capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
              payment method
            </h2>
            <div className='w-45% '>
              <label
                htmlFor='e-money'
                className='radio mb-4 flex h-14 items-center bg-whity cursor-pointer h-14 rounded-lg border flex mb-4  bg-whity items-center border-formBorder hover:border-orangy'
              >
                <input
                  type='radio'
                  name='method-select'
                  id='e-money'
                  className='radio_input'
                  onClick={showData}
                />
                <div className=' w-4 h-4 rounded-xl border border-formBorder ml-md mr-md flex justify-center items-center '>
                  <div className='radio_radio bg-orangy w-2 h-2 rounded-md transition-all delay-100'></div>
                </div>
                <h2 className='text-xxs font-bold '>e-Money</h2>
              </label>

              <label
                htmlFor='cash-delivery'
                className='radio flex h-14 items-center bg-whity cursor-pointer h-14 rounded-lg border flex  bg-whity items-center border-formBorder hover:border-orangy'
              >
                <input
                  type='radio'
                  name='method-select'
                  id='cash-delivery'
                  className='radio_input'
                  onClick={hideData}
                />
                <div className=' w-4 h-4 rounded-xl border border-formBorder ml-md mr-md flex justify-center items-center'>
                  <div className='radio_radio cash-delivery bg-orangy w-2 h-2 rounded-md '></div>
                </div>
                <h2 className='text-xxs font-bold '>Cash on Delivery</h2>
              </label>
            </div>
          </div>
          <div className='e-money-info transform scale-0 flex space-x-3 transition delay-150'>
            <div className='flex flex-col w-1/2'>
              <label className='  text-xxxxs font-bold tracking-tightestx mb-1'>
                e-Money Number
              </label>
              <input
                type='text'
                name='name'
                placeholder='238521993'
                className='h-14 rounded-lg border border-formBorder p-3'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='  text-xxxxs font-bold tracking-tightestx mb-1'>
                e-Money PIN
              </label>
              <input
                type='text'
                name='name'
                placeholder='6891'
                className='h-14 rounded-lg border border-formBorder p-3'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
