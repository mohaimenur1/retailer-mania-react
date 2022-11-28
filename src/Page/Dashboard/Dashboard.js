/** @format */

import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();
      return data;
      // console.log(data);
    },
  });
  return (
    <div className=''>
      <div className='mt-3'>
        <h3>My Bookings</h3>
        <div className='shadow-lg rounded'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Image</th>
                <th scope='col'>Ttile</th>
                <th scope='col'>Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings &&
                bookings?.map((booking, i) => (
                  <tr key={booking._id}>
                    <th scope='row'>{i + 1}</th>
                    <td>
                      {' '}
                      <img
                        className='img-fluid rounded-4'
                        src={booking.img}
                        alt=''
                        style={{ widht: '3rem', height: '3rem' }}
                      />
                    </td>
                    <td>{booking.producttitle}</td>
                    <td>{booking.price}</td>
                    <td>
                      <Link to='/dashboard/payment' className='btn btn-primary'>
                        Pay
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
