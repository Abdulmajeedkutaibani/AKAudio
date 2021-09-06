import React from 'react';
import Btn1 from '../Buttons/Btn1';

const ProductBrief = ({ name, description, background }) => {
  return (
    <div
      className={`flex justify-center flex-col w-1/2 ${background} space-y-lg`}
    >
      <h1 className=' w-5/6 text-xxl font-semibold mb-2 tracking-wider leading-11'>
        XX99 MARK II HEADPHONES
      </h1>
      <h6 className='text-xs  font-thin opacity-75 mb-10 w-9/12 '>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </h6>
      <Btn1 background='bg-orangy' hoverBackground='bg-orangelight' />
    </div>
  );
};

export default ProductBrief;
