import React from 'react';
import arrow from './Arrow.svg';
const Btn3 = ({ position }) => {
  return (
    <>
      <button
        className={`w-14 flex justify-between ${position} items-center
        h-16 text-xxxs transition duration-200 
text-blacky text-opacity-50 hover:text-orangy`}
      >
        SHOP
        <img src={arrow} alt='' className='h-5 w-2 ' />
      </button>
    </>
  );
};

export default Btn3;
