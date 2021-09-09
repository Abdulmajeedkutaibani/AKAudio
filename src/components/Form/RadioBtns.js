import React from 'react';

const RadioBtns = () => {
  return (
    <div className='container '>
      <label
        htmlFor='e-money'
        className='radio mb-4 flex h-20 items-center bg-whity cursor-pointer h-14 rounded-lg border flex mb-4  bg-whity items-center border-formBorder hover:border-orangy'
      >
        <input
          type='radio'
          name='method-select'
          id='e-money'
          className='radio_input'
        />
        <div className=' w-4 h-4 rounded-xl border border-formBorder ml-md mr-md flex justify-center items-center'>
          <div className='radio_radio bg-orangy w-2 h-2 rounded-md '></div>
        </div>
        <h2 className='text-xxs font-bold '>e-Money</h2>
      </label>

      <label
        htmlFor='cash-delivery'
        className='radio flex h-20 items-center bg-whity cursor-pointer h-14 rounded-lg border flex mb-4  bg-whity items-center border-formBorder hover:border-orangy'
      >
        <input
          type='radio'
          name='method-select'
          id='cash-delivery'
          className='radio_input'
        />
        <div className=' w-4 h-4 rounded-xl border border-formBorder ml-md mr-md flex justify-center items-center'>
          <div className='radio_radio cash-delivery bg-orangy w-2 h-2 rounded-md '></div>
        </div>
        <h2 className='text-xxs font-bold '>e-Money</h2>
      </label>
    </div>
  );
};

export default RadioBtns;
