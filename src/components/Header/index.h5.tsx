/** @format */

import {Button, Flex, Layout, Menu} from 'antd';
import './index.scss';

const items1 = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const Header = () => {
  return (
    <Layout.Header className='header'>
      <div>植物种质资源保存与共享平台</div>
      <Flex dir='raw'>
        <Menu mode='horizontal' defaultSelectedKeys={['2']} items={items1} />
        <Button>登陆</Button>
      </Flex>
    </Layout.Header>
  );
};

export default Header;
