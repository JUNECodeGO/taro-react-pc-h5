/** @format */
import {Category} from '@nutui/icons-react-taro';
import {SideNavBar, SideNavBarItem} from '@nutui/nutui-react-taro';
import {View, Text} from '@tarojs/components';
import {useState} from 'react';

import './index.scss';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const changeNarBar = () => {
    setVisible(pre => !pre);
  };

  return (
    <View className='header'>
      <Text>油茶</Text>
      <Category color='#fff' size={20} onClick={changeNarBar} />
      <SideNavBar visible={visible} position='right' onClose={changeNarBar}>
        <SideNavBarItem title='一级标题' key='1-0' value='1-0' />
        <SideNavBarItem title='二级标题' key='2-0' value='2-0' />
        <SideNavBarItem title='二级标题' key='3-0' value='3-0' />
      </SideNavBar>
    </View>
  );
};

export default Header;
