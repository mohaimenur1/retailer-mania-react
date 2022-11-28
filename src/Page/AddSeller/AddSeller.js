/** @format */

import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const AddSeller = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHotKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const { data: categoryItems, isLoading } = useQuery({
    queryKey: ['add'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categoryadd`);
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data);
    const img = data.img[0];
    const formData = new FormData();
    formData.append('image', img);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHotKey}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const seller = {
            name: data.name,
            email: data.email,
            category: data.add,
            image: imgData.data.url,
          };
          //save seller info to the database
          fetch('http://localhost:5000/sellers', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(seller),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate('/dashboard/managerseller');
            });
        }
      });
  };

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center mt-4'>
        <div
          className='spinner-grow text-danger'
          style={{ width: '3rem', height: '3rem' }}
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className='mt-2'>
      <h2>AddSeller</h2>
      <div className='container card p-5 mt-5'>
        <h2 className='text-center display-5 fw-semibold'>Add Seller</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              name
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
            <select
              {...register('add')}
              className='form-select'
              aria-label='Default select example'
            >
              <option selected>Select Category</option>

              {categoryItems.map((category) => (
                <option key={category._id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Photo
            </label>
            <input
              {...register('img', { required: 'Photo is required' })}
              type='file'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            {errors.img && (
              <p className='text-danger' role='alert'>
                {errors.img?.message}
              </p>
            )}
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
