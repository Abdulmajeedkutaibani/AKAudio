import React from 'react';
import Categories from '../Home/Categories';
import Hero from '../Home/Hero';
import HomeEarphones from '../Home/HomeEarphones';
import HomeSpeaker1 from '../Home/HomeSpeaker1';
import HomeSpeaker2 from '../Home/HomeSpeaker2';
import Navbar from '../Navbar/Navbar';
import BestGear from '../Shared/BestGear';

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <div className='w-5/6 mx-auto mb-9'>
        <Categories />
        <HomeSpeaker1 />
        <HomeSpeaker2 />
        <HomeEarphones />
        <BestGear />
      </div>
    </div>
  );
};

export default HomePage;
