/** @format */

import Header from '../Header';
import Filter from '../Filter';
import {useState} from 'react';
import {Layout, Menu} from 'antd';

import './index.scss';

const BasicLayout = props => {
  const [collapsed, setCollapsed] = useState();
  return (
    <div className='layout-wrapper'>
      <Header />
      <div className='main'>
        <div className='filter-pc'></div>
        <div className='filter-mobile'>
          <Filter />
        </div>
        <Layout.Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}>
          <div className='demo-logo-vertical' />
          <Menu
            theme='dark'
            defaultSelectedKeys={['1']}
            mode='inline'
            items={[]}
          />
        </Layout.Sider>
        {props.children}
      </div>
    </div>
  );
};

export default BasicLayout;
