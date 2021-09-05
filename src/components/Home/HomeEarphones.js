import React from 'react';
import earphones from '../../photoes/home/desktop/image-earphones-yx1.jpg';
import Btn2 from '../Buttons/Btn2';

const HomeEarphones = () => {
  return (
    <div className='container w-full flex space-x-5 mt-5'>
      <img src={earphones} alt='' className='w-1/2 rounded-xl' />
      <div className='bg-greyish w-1/2 rounded-xl relative'>
        <div className='absolute w-full h-full flex flex-col justify-center left-1/6 '>
          <h2 className='text-larg mb-5 tracking-wider'>YX1 EARPHONES</h2>
          <Btn2 />
        </div>
      </div>
    </div>
  );
};

export default HomeEarphones;
