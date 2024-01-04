/** @format */

import {createBrowserRouter} from 'react-router-dom';

import NotFound from '@/pages/notFound';
import Login from '@/pages/login';
import Error from '@/pages/error';
import Home from '@/pages/home/index';
import BasicLayout from '../BasicLayout';
import Listing from '@/pages/listing';

export const routes = [
  {
    path: '/',
    errorElement: <Error />,
    element: <BasicLayout />,
    children: [
      {path: '', element: <Home />},
      {path: 'listing', element: <Listing />},
      // {path: 'search', lazy: () => import('@/pages/home/index')},
      // {
      //   path: 'listing',
      //   lazy: () => import('@/pages/listing/index'),
      // },
      // {path: 'detail', lazy: () => import('@/pages/home/index')},
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {path: '*', element: <NotFound />},
];

const router = createBrowserRouter(routes);
export default router;
