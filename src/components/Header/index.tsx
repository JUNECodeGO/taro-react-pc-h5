/** @format */

import {
  Button,
  NavBar,
  SideNavBar,
  SideNavBarItem,
  SubSideNavBar,
} from '@nutui/nutui-react-taro';
import {Category} from '@nutui/icons-react-taro';
import {useState} from 'react';
import {View} from '@tarojs/components';
import './index.scss';

const Header = props => {
  const {title} = props;
  const [visible, setVisible] = useState(false);

  const changeNarBar = () => {
    setVisible(pre => !pre);
  };

  return (
    <NavBar
      className='header'
      left='油茶'
      right={
        <View>
          <Button size='mini' className='header-login-button'>
            登陆
          </Button>
          <Category onClick={changeNarBar} size='16' color='#fff' />
        </View>
      }>
      <SideNavBar
        title={title}
        visible={visible}
        position='right'
        onClose={changeNarBar}>
        <SubSideNavBar title='一级标题' key='1-0' value={'1-0'}>
          <SideNavBarItem title='一级内容1' key='1-01' value={''} />
          <SideNavBarItem title='一级内容2' key='1-02' value={'1-02'} />
          <SubSideNavBar title='二级标题' key='2-0' value={'1-03'}>
            <SideNavBarItem title='二级内容1' key='2-01' value={'2-01'} />
            <SideNavBarItem title='二级内容2' key='2-02' value={'2-01'} />
          </SubSideNavBar>
        </SubSideNavBar>
      </SideNavBar>
    </NavBar>
  );
};
export default Header;
