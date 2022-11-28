/** @format */

import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import './DashboardLayout.css';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../context/UserContext';

const DashboradLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='rounded mt-3 shadow-lg p-4'>
              <h3>Dashboard</h3>
              <hr />
              <Link className='card p-3 mt-3 underline-none'>Home</Link>
              {isAdmin && (
                <>
                  <Link
                    to='/dashboard/allusers'
                    className='card p-3 mt-3 underline-none'
                  >
                    All Users
                  </Link>
                  <Link
                    to='/dashboard/addseller'
                    className='card p-3 mt-3 underline-none'
                  >
                    Add Seller
                  </Link>
                  <Link
                    to='/dashboard/managerseller'
                    className='card p-3 mt-3 underline-none'
                  >
                    Manage Seller
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className='col-lg-9'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboradLayout;
