import React from 'react';

const Summary = () => {
  return (
    <div className='w-1/5 bg-whity rounded-lg '>
      <h2 className='uppercase font-bold text-small mb-5'>summary</h2>
      <div>
        <div className='flex justify-between items-center'>
          <p className='uppercase opacity-50 font-extralight text-xs'>total</p>
          <span className='font-bold text-small uppercase'>{'$5,396'}</span>
        </div>
        <div className='flex justify-between items-center'>
          <p className='uppercase opacity-50 font-extralight text-xs'>
            SHIPPING
          </p>
          <span className='font-bold text-small uppercase'>{'$5,396'}</span>
        </div>
        <div className='flex justify-between items-center mb-lg'>
          <p className='uppercase opacity-50 font-extralight text-xs'>
            VAT (INCLUDED)
          </p>
          <span className='font-bold text-small uppercase'>{'$5,396'}</span>
        </div>
        <div className='flex justify-between items-center'>
          <p className='uppercase opacity-50 font-extralight text-xs'>
            GRAND TOTAL
          </p>
          <span className='font-bold text-small uppercase'>{'$5,396'}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
