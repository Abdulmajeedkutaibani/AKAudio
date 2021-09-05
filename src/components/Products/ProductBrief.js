import React from 'react';
import Btn1 from '../Buttons/Btn1';

const ProductBrief = ({ background }) => {
  return (
    <div className={`flex-col w-7/12 ${background} space-y-lg`}>
      <h1 className=' text-whity text-xxxl font-semibold mb-2 tracking-wider'>
        XX99 MARK II HEADPHONES
      </h1>
      <h6 className='text-xs text-whity font-thin opacity-75 mb-10 w-9/12'>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </h6>
      <Btn1 />
    </div>
  );
};

export default ProductBrief;
