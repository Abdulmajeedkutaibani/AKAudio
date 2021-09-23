import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Summary from './Summary';
import cashImage from './cashImage.svg';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phoneNumber: yup.number().required().min(11),
  address: yup.string().required(),
  zipCode: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
  eMoneyNumber: yup.string(),
  eMoneyPIN: yup.string(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    window.scrollTo(0, 0);
    const thanksMessageContainer = document.querySelector(
      '.thanks-message-container'
    );
    const thankYouMessageShadow = document.querySelector(
      '.thank-you-message-shadow'
    );
    thankYouMessageShadow.classList.remove('hidden');

    if (thanksMessageContainer.classList.contains('hidden')) {
      thanksMessageContainer.classList.remove('hidden');
    } else {
      thanksMessageContainer.classList.add('hidden');
    }
  };

  const showEmoneyInfo = () => {
    const eMoneyInfo = document.querySelector('.e-money-info');
    const cashOnDelivery = document.querySelector('.cash-on-delivery-info');

    eMoneyInfo.classList.remove('hidden');
    cashOnDelivery.classList.add('hidden');
  };

  const showCashOnDeliveryInfo = () => {
    const cashOnDelivery = document.querySelector('.cash-on-delivery-info');
    const eMoneyInfo = document.querySelector('.e-money-info');

    eMoneyInfo.classList.add('hidden');
    cashOnDelivery.classList.remove('hidden');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-8 lg:flex-row  lg:gap-5 lg:justify-between   mx-auto'
    >
      <div className='bg-whity rounded-lg lg:w-2/3'>
        <h1 className='uppercase text-xl font-bold mb-10 w-11/12 tracking-tight mx-auto mt-4 sm:mt-5 lg:mt-14'>
          checkout
        </h1>
        <div className='mb-14 w-11/12 mx-auto'>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            billing details
          </h2>
          <div className='flex flex-col sm:flex-row sm:space-x-3 '>
            <div className='flex flex-col sm:w-1/2 mb-4'>
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
                  {errors.name && 'Enter your name'}
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
            <div className='flex flex-col sm:w-1/2 mb-4'>
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.email && 'text-error'
                  }`}
                >
                  Email Address
                </label>
                <p
                  className={`text-xxxxs font-bold tracking-tightestx ${
                    errors.name && 'text-error'
                  }`}
                >
                  {errors.email && 'Enter a correct E-mail'}
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
          <div className='flex flex-col sm:w-5/12'>
            <div className='flex justify-between'>
              <label
                className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                  errors.phoneNumber && 'text-error'
                }`}
              >
                Phone Number
              </label>
              <p
                className={` text-xxxxs font-bold tracking-tightestx ${
                  errors.phoneNumber && 'text-error'
                }`}
              >
                {errors.phoneNumber && 'Enter a valid phone number'}
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
                  errors.address && 'text-error'
                }`}
              >
                Address
              </label>
              <p
                className={` text-xxxxs font-bold tracking-tightestx ${
                  errors.address && 'text-error'
                }`}
              >
                {errors.address && 'An address is required'}
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
          <div className='flex flex-col sm:flex-row sm:space-x-3'>
            <div className='flex flex-col lg:w-1/2 mb-4'>
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.zipCode && 'text-error'
                  }`}
                >
                  ZIP Code
                </label>
                <p
                  className={` text-xxxxs font-bold tracking-tightestx ${
                    errors.zipCode && 'text-error'
                  }`}
                >
                  {errors.zipCode && 'This field can’t be empty'}
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
            <div className='flex flex-col lg:w-1/2'>
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.city && 'text-error'
                  }`}
                >
                  City
                </label>
                <p
                  className={` text-xxxxs font-bold tracking-tightestx ${
                    errors.city && 'text-error'
                  }`}
                >
                  {errors.city && 'This field can’t be empty'}
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
          <div className='flex flex-col sm:w-1/3'>
            <div className='flex justify-between'>
              <label
                className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                  errors.country && 'text-error'
                }`}
              >
                Country
              </label>
              <p
                className={` text-xxxxs font-bold tracking-tightestx ${
                  errors.country && 'text-error'
                }`}
              >
                {errors.country && 'This field can’t be empty'}
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
        <div className='space-y-4 lg:mb-14 w-11/12 mx-auto'>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            payment details
          </h2>
          <div className='flex flex-col sm:flex-row sm:justify-between mb-4'>
            <h2 className='capitalize text-xxxxs font-bold tracking-tightestx mb-3'>
              payment method
            </h2>
            <div className='sm:w-45% '>
              <label
                htmlFor='e-money'
                className='radio mb-4 flex h-14 items-center bg-whity cursor-pointer h-14 rounded-lg border flex mb-4  bg-whity items-center border-formBorder hover:border-orangy'
              >
                <input
                  type='radio'
                  name='method-select'
                  id='e-money'
                  className='radio_input'
                  onClick={showEmoneyInfo}
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
                  onClick={showCashOnDeliveryInfo}
                />
                <div className=' w-4 h-4 rounded-xl border border-formBorder ml-md mr-md flex justify-center items-center'>
                  <div className='radio_radio cash-delivery bg-orangy w-2 h-2 rounded-md '></div>
                </div>
                <h2 className='text-xxs font-bold '>Cash on Delivery</h2>
              </label>
            </div>
          </div>
          <div className='cash-on-delivery-info hidden flex flex-col md:flex-row pt-7 pb-5 gap-5 md:items-start items-center '>
            <img src={cashImage} alt='' className=' w-12' />
            <p className='font-light text-xs opacity-50 text-center md:text-left'>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
          <div className='e-money-info hidden flex sm:flex-row flex-col sm:space-x-3 transition delay-150 pb-5'>
            <div className='flex flex-col sm:w-1/2 mb-4'>
              <div className='flex justify-between'>
                <label
                  className={` capitalize text-xxxxs font-bold tracking-tightestx mb-1 ${
                    errors.eMoneyNumber && 'text-error'
                  }`}
                >
                  e-Money Number
                </label>
                <p
                  className={` text-xxxxs font-bold tracking-tightestx ${
                    errors.eMoneyNumber && 'text-error'
                  }`}
                >
                  {errors.eMoneyNumber && 'This field can’t be empty'}
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
            <div className='flex flex-col sm:w-1/2'>
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
