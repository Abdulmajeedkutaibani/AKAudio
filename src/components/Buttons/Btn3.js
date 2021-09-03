import React from 'react';
import arrow from './Arrow.svg';
const Btn3 = () => {
  return (
    <>
      <button
        className='w-20 flex justify-between items-center
        h-16 bg-whity text-lg transition duration-200 
text-blacky hover:text-orangy'
      >
        SHOP
        <img src={arrow} alt='' className='h-5 w-2 ' />
      </button>
    </>
  );
};

export default Btn3;
