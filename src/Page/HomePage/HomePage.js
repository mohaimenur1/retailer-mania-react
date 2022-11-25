/** @format */

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Sell from "./img/3.png";
import Img2 from "./img/2.png";
import Img1 from "./img/1.png";
import Hp from "./img/hp.png";
import Dell from "./img/dell.png";
import Lenovo from "./img/lenovo.png";
import "./HomePage.css";

const HomePage = () => {
  const categories = useLoaderData();
  return (
    <div className="container">
      <div className="banner-section mt-5">
        <div class="h-100 p-5 text-bg-dark rounded-3 banner-bg row g-3">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>Retailer Mania</h2>
            <p>
              We are Retailer.If you need to import extra amount of laptop for
              your business we are here for you.
            </p>
            <button class="btn btn-outline-light" type="button">
              Contact with us
            </button>
          </div>
          {/* slider section */}
          <div className="col-lg-6">
            <div className="banner">
              <div
                id="carouselExampleInterval"
                className="carousel slide text-center"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner h-50">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <img
                      src={Sell}
                      className="d-block w-100 img-fluid  rounded-4"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img
                      src={Img1}
                      className="d-block w-100 img-fluid  rounded-4"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Img2}
                      className="d-block w-100 img-fluid  rounded-4"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* category */}
      <div className="two-sections container mt-5">
        <div className="row">
          <h2 className="text-center mt-4 mb-3">Category By Brand</h2>
          {categories.map((category) => {
            return (
              <Link
                to={`/category/${category._id}`}
                className="col-lg-4 zoom mouse-pointer"
              >
                <div
                  key={category._id}
                  className="h-75 p-5 shadow bg-light rounded-3 d-flex justify-content-center align-items-center"
                >
                  <img className="h-75 img-fluid" src={category.img} alt="" />
                </div>
              </Link>
            );
          })}
          {/* <Link to='/category/:id' className='col-lg-4 zoom mouse-pointer'>
            <div className='h-75 p-5 shadow bg-light rounded-3 d-flex justify-content-center align-items-center'>
              <img className='h-75 img-fluid' src={Dell} alt='' />
            </div>
          </Link>
          <Link to='/category/:id' className='col-lg-4 zoom mouse-pointer'>
            <div className='h-75 p-5 shadow bg-light rounded-3 d-flex justify-content-center align-items-center'>
              <img className='h-75 img-fluid' src={Hp} alt='' />
            </div>
          </Link>
          <Link to='/category/:id' className='col-lg-4 zoom mouse-pointer'>
            <div className='h-75 p-5 shadow bg-light rounded-3 d-flex justify-content-center align-items-center'>
              <img className='h-75 img-fluid' src={Lenovo} alt='' />
            </div>
          </Link> */}
        </div>
      </div>
      {/* jumbotron */}
      <div className="row g-5">
        <h2 className="text-center">Beyond Those</h2>
        <div class="col-lg-6">
          <div class="h-100 p-5 text-light jumbotrona-bg rounded-3">
            <h2>Get Your Favourite one!</h2>
            <p>
              Available Stock with good quality products. Get your expected one
              and make your life more easier from today.
            </p>
            <button class="btn btn-outline-light" type="button">
              See Categories
            </button>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="h-100 p-5 text-light rounded-3 jumbotrona-bg-1">
            <h2>Brand Sececond Hand Laptops</h2>
            <p>
              We are Retailer.If you need to import extra amount of laptop for
              your business we are here for you.
            </p>
            <button class="btn btn-outline-light" type="button">
              Contact with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
