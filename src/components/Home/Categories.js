import React from 'react';
import Btn3 from '../Buttons/Btn3';
import headphoneCat from './../../photoes/headphone-category.png';
import speakersCat from './../../photoes/speakers-category.png';
import earphonesCat from './../../photoes/earphones-category.png';

const Categories = () => {
  return (
    <div className='container flex flex-col space-y-6 md:space-x-8 md:space-y-0 md:flex-row '>
      <div className='category-card bg-whity w-4/12 h-80 relative flex-col '>
        <div className='image-shadow flex flex-col items-center'>
          <img
            src={headphoneCat}
            alt=''
            className='category-image w-32  z-10 '
          />
          <div className='shadowing w-28'>
            <br />
          </div>
        </div>
        <div className='bg-greyish h-56 absolute w-full bottom-0 rounded-xl'>
          <div className='flex-col text-center pt-32'>
            <h4 className='text-small font-manrope font-bold tracking-tight'>
              HEADPHONES
            </h4>
            <Btn3 position='mx-auto' />
          </div>
        </div>
      </div>
      <div className='category-card bg-whity w-4/12 h-80 relative flex-col '>
        <div className='image-shadow flex flex-col items-center'>
          <img
            src={speakersCat}
            alt=''
            className='category-image w-32  z-10 '
          />
          <div className='shadowing w-32'>
            <br />
          </div>
        </div>
        <div className='bg-greyish h-56 absolute w-full bottom-0 rounded-xl'>
          <div className='flex-col text-center pt-32'>
            <h4 className='text-small font-manrope font-bold tracking-tight'>
              SPEAKERS
            </h4>
            <Btn3 position='mx-auto' />
          </div>
        </div>
      </div>
      <div className='category-card bg-whity w-4/12 h-80 relative flex-col '>
        <div className='image-shadow flex flex-col items-center'>
          <img
            src={earphonesCat}
            alt=''
            className='category-image w-32  z-10 mt-8 '
          />
          <div className='shadowing w-20'>
            <br />
          </div>
        </div>
        <div className='bg-greyish h-56 absolute w-full bottom-0 rounded-xl'>
          <div className='flex-col text-center pt-32'>
            <h4 className='text-small font-manrope font-bold tracking-tight'>
              EARPHONES
            </h4>
            <Btn3 position='mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
