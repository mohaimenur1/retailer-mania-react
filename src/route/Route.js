/** @format */

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import HomePage from '../Page/HomePage/HomePage';
import ServicePage from '../Page/ServicePage/ServicePage';
import Services from '../Page/Services/Services';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/service',
        element: <ServicePage />,
      },
      //   {
      //     path: '/services',
      //     element: <Services />,
      //   },
    ],
  },
]);
