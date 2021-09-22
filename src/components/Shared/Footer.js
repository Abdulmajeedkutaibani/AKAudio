import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <div className='bg-blacky mt-4 sm:text-left text-center'>
      <div className='container w-11/12 lg:w-5/6 flex flex-col text-whity items-center sm:items-start'>
        <div className=' h-0.5 w-28 bg-orangy'></div>
        <div className='lg:flex justify-between items-center mt-12 sm:mt-14 sm:mb-5 lg:mt-18 lg:mb-9'>
          <h1 className='text-larg mb-5'>AkAudio</h1>
          <ul className='uppercase flex flex-col sm:flex-row sm:gap-6 text-xxxs font-bold tracking-wider gap-3 mb-12 sm:mb-0'>
            <li>
              <a
                href='/home'
                className='hover:text-orangy transition-all duration-200'
              >
                home
              </a>
            </li>
            <li>
              <a
                href='/headphones'
                className='hover:text-orangy transition-all duration-200'
              >
                headphones
              </a>
            </li>
            <li>
              <a href='/speakers' className='hover:text-orangy'>
                speakers
              </a>
            </li>
            <li>
              <a
                href='/earphones'
                className='hover:text-orangy transition-all duration-200'
              >
                earphones
              </a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center items-center '>
          <div className='flex flex-col space-y-14 lg:w-1/2  text-xs mb-12'>
            <p className='font-extralight opacity-50'>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0'>
              <span className='font-bold opacity-50 '>
                Copyright 2021. All Rights Reserved
              </span>
              <div className='lg:hidden flex space-x-3 justify-end items-center sm:w-1/2 '>
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
          <div className='hidden lg:flex space-x-3 justify-end items-center w-1/2 '>
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
