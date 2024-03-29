import React, { useEffect } from 'react';
import Categories from '../Shared/Categories';
import Hero from '../Home/Hero';
import HomeEarphones from '../Home/HomeEarphones';
import HomeSpeaker1 from '../Home/HomeSpeaker1';
import HomeSpeaker2 from '../Home/HomeSpeaker2';
import BestGear from '../Shared/BestGear';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Hero />
      <div className=' container px-2 sm:px-4 '>
        <div className=' mb-9  '>
          <Categories />
          <HomeSpeaker1 />
          <HomeSpeaker2 />
          <HomeEarphones />
          <BestGear />
        </div>
      </div>
    </>
  );
};

export default HomePage;
