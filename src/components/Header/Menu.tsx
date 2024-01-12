/** @format */
import {Menu as AntdMenu} from 'antd';
const Menu = ({list, className}) => {
  return <AntdMenu mode='horizontal' items={list} className={className} />;
};

export default Menu;
