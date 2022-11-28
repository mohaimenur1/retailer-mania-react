/** @format */

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Make Admin successfully');
          refetch();
        }
      });
  };

  return (
    <div className='mt-2'>
      <div className=''>
        <div className='mt-3'>
          <h2>All Users</h2>
          <div className='shadow-lg rounded'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'></th>
                  <th scope='col'>Name</th>
                  <th scope='col'>email</th>
                  <th scope='col'>Admin</th>
                  <th scope='col'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users?.map((user, i) => (
                    <tr key={i}>
                      <th scope='row'>{i + 1}</th>
                      {/* <td>
                      {" "}
                      <img
                        className="img-fluid rounded-4"
                        src={user.img}
                        alt=""
                        style={{ widht: "3rem", height: "3rem" }}
                      />
                    </td> */}
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        {user?.role !== 'admin' && (
                          <button
                            onClick={() => handleMakeAdmin(user._id)}
                            className='btn btn-primary btn-sm'
                          >
                            Make Admin
                          </button>
                        )}
                      </td>
                      <td>
                        <button className='btn btn-danger btn-sm'>
                          Delete
                        </button>
                      </td>
                      {/* <td>
                      <Link to="/dashboard/payment" className="btn btn-primary">
                        Pay
                      </Link>
                    </td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
