/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Sell from './img/3.png';
import Img2 from './img/2.png';
import Img1 from './img/1.png';

const HomePage = () => {
  return (
    <div className='container'>
      <div className='banner'>
        <div
          id='carouselExampleInterval'
          className='carousel slide text-center'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner h-50'>
            <div className='carousel-item active' data-bs-interval='10000'>
              <img src={Sell} className='d-block w-100 img-fluid' alt='...' />
            </div>
            <div className='carousel-item' data-bs-interval='2000'>
              <img src={Img1} className='d-block w-100 img-fluid' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src={Img2} className='d-block w-100 img-fluid' alt='...' />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <div className='two-sections container mt-5'>
        <div className='row'>
          <h2 className='text-center mt-4 mb-3'>Category By Brand</h2>
          <div className='col-lg-4'>
            <div className='h-100 p-5 bg-light border rounded-3'>
              <h1>Get a better Service</h1>
              <p>
                Providing a good quality of support . And trying to improve for
                your outcome . Please feel free to come here and get your
                Services.
              </p>
              <Link
                to='/service'
                className='btn btn-outline-secondary'
                type='button'
              >
                Go to Services
              </Link>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='h-100 p-5 bg-light border rounded-3'>
              <h1>Get a better Service</h1>
              <p>
                Providing a good quality of support . And trying to improve for
                your outcome . Please feel free to come here and get your
                Services.
              </p>
              <Link
                to='/service'
                className='btn btn-outline-secondary'
                type='button'
              >
                Go to Services
              </Link>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='h-100 p-5 bg-light border rounded-3'>
              <h1>Get a better Service</h1>
              <p>
                Providing a good quality of support . And trying to improve for
                your outcome . Please feel free to come here and get your
                Services.
              </p>
              <Link
                to='/service'
                className='btn btn-outline-secondary'
                type='button'
              >
                Go to Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
