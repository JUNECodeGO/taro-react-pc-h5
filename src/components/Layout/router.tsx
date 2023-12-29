/** @format */

import {createBrowserRouter, Outlet} from 'react-router-dom';

import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';
import Error from '@/pages/Error';
import Home from '@/pages/home/index';

const BasicLayout = () => {
  const pathName = location.pathname;
  if (!pathName || pathName === '/') return <Outlet />;

  return (
    <div className='layout-wrapper'>
      {/* <Menu /> */}
      <div className='main'>
        <div className='header'>
          <div className='title'>123</div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export const routes = [
  {
    path: '/',
    errorElement: <Error />,
    element: <BasicLayout />,
    children: [
      {path: '', element: <Home />},
      {path: 'search', lazy: () => import('@/pages/home/index')},
      {
        path: 'listing',
        lazy: () => import('@/pages/home/index'),
      },
      {path: 'detail', lazy: () => import('@/pages/home/index')},
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
