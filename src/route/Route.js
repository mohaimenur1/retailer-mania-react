/** @format */

import { createBrowserRouter } from 'react-router-dom';
import DashboradLayout from '../layout/DashboradLayout';
import Main from '../layout/Main';
import AddSeller from '../Page/AddSeller/AddSeller';
import AllUsers from '../Page/AllUsers/AllUsers';
import Category from '../Page/Category/Category';
import Dashboard from '../Page/Dashboard/Dashboard';
import HomePage from '../Page/HomePage/HomePage';
import Login from '../Page/Login/Login';
import ManageSeller from '../Page/ManageSeller/ManageSeller';
import Payment from '../Page/Payment/Payment';
import Register from '../Page/Register/Register';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: async () => {
          return fetch('http://localhost:5000/category');
        },
      },
      {
        path: '/category/:id',
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboradLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/allusers',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/allsellers',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/addseller',
        element: (
          <SellerRoute>
            <AddSeller />
          </SellerRoute>
        ),
      },
      {
        path: '/dashboard/managerseller',
        element: (
          <SellerRoute>
            <ManageSeller />
          </SellerRoute>
        ),
      },
      {
        path: '/dashboard/payment',
        element: <Payment />,
      },
    ],
  },
]);
