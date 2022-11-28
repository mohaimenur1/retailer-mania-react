/** @format */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddSeller = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddDoctor = (data) => {
    console.log(data);
  };
  return (
    <div className='mt-2'>
      <h2>AddSeller</h2>
      <div className='container card p-5 mt-5'>
        <h2 className='text-center display-5 fw-semibold'>Add Seller</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Name
            </label>
            <input
              {...register('name', { required: 'please provide name' })}
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            {errors.name && (
              <p className='text-danger' role='alert'>
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email address
            </label>
            <input
              {...register('email', {
                required: 'Plase Provide Email Address.',
              })}
              type='email'
              className='form-control'
              id='exampleInputEmail2'
              aria-describedby='emailHelp'
            />
            {errors.email && (
              <p className='text-danger' role='alert'>
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Category
            </label>
            <div className='dropdown'>
              <a
                className='btn btn-secondary dropdown-toggle'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown link
              </a>

              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item'>Action</a>
                </li>
                <li>
                  <a className='dropdown-item'>Another action</a>
                </li>
                <li>
                  <a className='dropdown-item'>Something else here</a>
                </li>
              </ul>
            </div>
          </div>
          {errorMessage && <p className='text-danger'>{errorMessage}</p>}

          {/* <p>{data}</p> */}
          <button type='submit' className='btn btn-primary'>
            Add Seller
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
