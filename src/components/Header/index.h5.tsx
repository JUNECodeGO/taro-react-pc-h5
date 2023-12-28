/** @format */

import {Layout, Menu} from 'antd';

const items1 = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const Header = props => {
  return (
    <Layout.Header style={{display: 'flex', alignItems: 'center'}}>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        items={items1}
        style={{flex: 1, minWidth: 0}}
      />
    </Layout.Header>
  );
};

export default Header;
