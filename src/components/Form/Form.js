import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Summary from './Summary';

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex space-x-5 justify-between w-5/6 mx-auto'
    >
      <div className='bg-whity flex-grow rounded-lg'>
        <h1 className='uppercase text-xl font-bold mb-10 w-11/12 tracking-tight mx-auto mt-14'>
          checkout
        </h1>
        <div className='mb-14 w-11/12 mx-auto'>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            billing details
          </h2>
          <div className='flex space-x-3 mb-4'>
            <div className='flex flex-col w-1/2 '>
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.name && 'text-error'
                  }`}
                >
                  name
                </label>
                <p
                  className={` text-xxxxs font-bold tracking-tightestx ${
                    errors.name && 'text-error'
                  }`}
                >
                  {errors.name && 'Please enter your name'}
                </p>
              </div>
              <input
                {...register('name')}
                type='text'
                name='name'
                placeholder='First Name'
                className={`${errors.name && 'input-error'}`}
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.name && 'text-error'
                  }`}
                >
                  Email Address
                </label>
                <p
                  className={`text-xxxxs font-bold tracking-tightestx ${
                    errors.name && 'text-error'
                  }`}
                >
                  {errors.name && 'Please enter a correct E-mail'}
                </p>
              </div>
              <input
                {...register('email')}
                type='email'
                name='email'
                placeholder='Abodymeo@gmail.com'
                className={`${errors.email && 'input-error'}`}
              />
            </div>
          </div>
          <div className='flex flex-col w-1/3'>
            <div className='flex justify-between'>
              <label
                className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                  errors.name && 'text-error'
                }`}
              >
                Phone Number
              </label>
              <p
                className={` text-xxxxs font-bold tracking-tightestx ${
                  errors.name && 'text-error'
                }`}
              >
                {errors.name && 'This field can’t be empty'}
              </p>
            </div>
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
        <div className='space-y-4 mb-14 w-11/12 mx-auto'>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            shipping info
          </h2>
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <label
                className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                  errors.name && 'text-error'
                }`}
              >
                Address
              </label>
              <p
                className={` text-xxxxs font-bold tracking-tightestx ${
                  errors.name && 'text-error'
                }`}
              >
                {errors.name && 'This field can’t be empty'}
              </p>
            </div>
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
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.name && 'text-error'
                  }`}
                >
                  ZIP Code
                </label>
                <p
                  className={` text-xxxxs font-bold tracking-tightestx ${
                    errors.name && 'text-error'
                  }`}
                >
                  {errors.name && 'This field can’t be empty'}
                </p>
              </div>
              <input
                {...register('zipCode')}
                type='text'
                name='zipCode'
                placeholder='10001'
                className={`${errors.zipCode && 'input-error'}`}
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.name && 'text-error'
                  }`}
                >
                  City
                </label>
                <p
                  className={` text-xxxxs font-bold tracking-tightestx ${
                    errors.name && 'text-error'
                  }`}
                >
                  {errors.name && 'This field can’t be empty'}
                </p>
              </div>
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
            <div className='flex justify-between'>
              <label
                className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                  errors.name && 'text-error'
                }`}
              >
                Country
              </label>
              <p
                className={` text-xxxxs font-bold tracking-tightestx ${
                  errors.name && 'text-error'
                }`}
              >
                {errors.name && 'This field can’t be empty'}
              </p>
            </div>
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
        <div className='space-y-4 mb-14 w-11/12 mx-auto'>
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
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.name && 'text-error'
                  }`}
                >
                  e-Money Number
                </label>
                <p
                  className={` text-xxxxs font-bold tracking-tightestx ${
                    errors.name && 'text-error'
                  }`}
                >
                  {errors.name && 'This field can’t be empty'}
                </p>
              </div>
              <input
                {...register('eMoneyNumber')}
                type='text'
                name='eMoneyNumber'
                placeholder='238521993'
                className={`${errors.eMoneyNumber && 'input-error'}`}
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.name && 'text-error'
                  }`}
                >
                  e-Money PIN
                </label>
                <p
                  className={` text-xxxxs font-bold tracking-tightestx ${
                    errors.name && 'text-error'
                  }`}
                >
                  {errors.name && 'This field can’t be empty'}
                </p>
              </div>
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
      </div>
      <Summary />
    </form>
  );
};

export default Form;
