/** @format */

import {
  Button,
  NavBar,
  SideNavBar,
  SideNavBarItem,
  SubSideNavBar,
} from '@nutui/nutui-react-taro';
import {ArrowLeft, Share, Close} from '@nutui/icons-react-taro';
import {useState} from 'react';
import {View} from '@tarojs/components';

const Header = () => {
  const [navBarState, setNavBarState] = useState({
    visible: false,
  });
  const changeNarBar = visible => {
    setNavBarState({
      visible,
    });
  };

  return (
    <NavBar
      left={'youcha'}
      right={
        <View>
          <Button>登陆</Button>
          <Share />
        </View>
      }>
      <SideNavBar
        title='首页'
        visible={navBarState.visible}
        position={'right'}
        onClose={() => {
          changeNarBar(false);
        }}>
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
