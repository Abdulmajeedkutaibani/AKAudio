import { Scale } from 'heroicons-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phoneNumber: yup.number().required().max(11),
  address: yup.string().required(),
  zipCode: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  eMoneyNumber: yup.string().required(),
  eMoneyPIN: yup.string().required(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-14'>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            billing details
          </h2>
          <div className='flex space-x-3 mb-4'>
            <div className='flex flex-col w-1/2 '>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                name
              </label>
              <input
                {...register('name')}
                type='text'
                name='name'
                placeholder='First Name'
                className={`${errors.name && 'input-error'}`}
              />
              <p>{errors.name && 'This field can’t be empty'}</p>
            </div>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                email address
              </label>
              <input
                {...register('email')}
                type='text'
                name='email'
                placeholder='Abodymeo@gmail.com'
                className={`${errors.email && 'input-error'}`}
              />
            </div>
          </div>
          <div className='flex flex-col w-1/3'>
            <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
              phone number
            </label>
            <input
              {...register('phoneNumber')}
              type='text'
              name='phoneNumber'
              placeholder='+1 234-567-8900'
              className={`${errors.phoneNumber && 'input-error'}`}
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
              {...register('address')}
              type='text'
              name='address'
              placeholder='1137 Williams Avenue'
              className={`${errors.address && 'input-error'}`}
            />
          </div>
          <div className='flex space-x-3'>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                ZIP code
              </label>
              <input
                {...register('zipCode')}
                type='text'
                name='zipCode'
                placeholder='10001'
                className={`${errors.zipCode && 'input-error'}`}
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                city
              </label>
              <input
                {...register('city')}
                type='text'
                name='city'
                placeholder='Istanbul'
                className={`${errors.city && 'input-error'}`}
              />
            </div>
          </div>
          <div className='flex flex-col w-1/3'>
            <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
              country
            </label>
            <input
              {...register('country')}
              type='text'
              name='country'
              placeholder='Turkey'
              className={`${errors.country && 'input-error'}`}
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
                {...register('eMoneyNumber')}
                type='text'
                name='eMoneyNumber'
                placeholder='238521993'
                className={`${errors.eMoneyNumber && 'input-error'}`}
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='  text-xxxxs font-bold tracking-tightestx mb-1'>
                e-Money PIN
              </label>
              <input
                {...register('eMoneyPIN')}
                type='text'
                name='eMoneyPIN'
                placeholder='6891'
                className={`${errors.eMoneyPIN && 'input-error'}`}
              />
            </div>
          </div>
        </div>
        <button className='h-14 w-28 bg-orangy text-xs font-bold' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
