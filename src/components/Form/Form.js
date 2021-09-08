import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  return (
    <div className='container w-4/5'>
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
                className='h-14 rounded-lg border border-formBorder'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                email address
              </label>
              <input
                type='text'
                name='name'
                placeholder='Abdulmajeed Kutaibani'
                className='h-14 rounded-lg border border-formBorder'
              />
            </div>
          </div>
          <div className='flex flex-col w-1/2'>
            <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
              phone number
            </label>
            <input
              type='text'
              name='name'
              placeholder='Abdulmajeed Kutaibani'
              className='h-14 rounded-lg border border-formBorder'
            />
          </div>
        </div>
        {/* /////////////////////////////// */}
        <div>
          <h2 className=' text-xxxs font-bold tracking-tighter uppercase text-orangy mb-3'>
            shipping info
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
                className='h-14 rounded-lg border border-formBorder'
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
                email address
              </label>
              <input
                type='text'
                name='name'
                placeholder='Abdulmajeed Kutaibani'
                className='h-14 rounded-lg border border-formBorder'
              />
            </div>
          </div>
          <div className='flex flex-col w-1/2'>
            <label className=' capitalize text-xxxxs font-bold tracking-tightestx mb-1'>
              phone number
            </label>
            <input
              type='text'
              name='name'
              placeholder='Abdulmajeed Kutaibani'
              className='h-14 rounded-lg border border-formBorder'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
