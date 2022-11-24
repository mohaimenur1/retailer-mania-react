/** @format */

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Category from '../Page/Category/Category';
import HomePage from '../Page/HomePage/HomePage';

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
        element: <Category />,
      },

      //   {
      //     path: '/services',
      //     element: <Services />,
      //   },
    ],
  },
]);
