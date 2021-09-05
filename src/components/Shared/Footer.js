import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <div className='w-full  bg-blacky mt-4'>
      <div className='container w-4/5 flex flex-col text-whity'>
        <div className=' h-0.5 w-28 bg-orangy'></div>
        <div className='flex justify-between items-center mt-18 mb-9'>
          <h1 className='text-larg '>AkAudio</h1>
          <ul className='uppercase flex space-x-6 text-xxxs font-bold tracking-wider '>
            <li>
              <a
                href='/'
                className='hover:text-orangy transition-all duration-200'
              >
                home
              </a>
            </li>
            <li>
              <a
                href='/'
                className='hover:text-orangy transition-all duration-200'
              >
                headphones
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-orangy'>
                speakers
              </a>
            </li>
            <li>
              <a
                href='/'
                className='hover:text-orangy transition-all duration-200'
              >
                earphones
              </a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center '>
          <div className='flex flex-col space-y-14 w-1/2 opacity-50 text-xs mb-12'>
            <p className='font-extralight'>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <span className='font-bold '>
              Copyright 2021. All Rights Reserved
            </span>
          </div>
          <div className='flex space-x-3 justify-end items-center w-1/2 '>
            <a
              href='/'
              className='hover:text-orangy transition-all duration-200 '
            >
              <FaFacebookSquare className='w-4 h-4' />
            </a>
            <a
              href='/'
              className='hover:text-orangy transition-all duration-200 '
            >
              <FaTwitter className='w-4 h-4 hover:text-orangy' />
            </a>
            <a
              href='/'
              className='hover:text-orangy transition-all duration-200 '
            >
              <GrInstagram className='w-4 h-4 hover:text-orangy' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
