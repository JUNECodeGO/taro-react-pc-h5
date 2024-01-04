/** @format */

import {Outlet} from 'react-router-dom';
import Header from '../Header';
import Filter from '../Filter';

const BasicLayout = () => {
  const pathName = location.pathname;
  console.log(pathName, '23123123');
  if (!pathName || pathName === '/') return <Outlet />;

  return (
    <div className='layout-wrapper'>
      <Header />
      <div className='main'>
        <div className='filter-pc'></div>
        <div className='filter-mobile'>
          <Filter />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BasicLayout;
