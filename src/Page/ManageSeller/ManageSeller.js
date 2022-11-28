/** @format */

import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageSeller = () => {
  const { data: sellers } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      try {
        const res = fetch('http://localhost:5000/sellers', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
          },
        });
      } catch (error) {}
    },
  });
  return (
    <div className='mt-2'>
      <h2>ManageSeller</h2>
    </div>
  );
};

export default ManageSeller;
