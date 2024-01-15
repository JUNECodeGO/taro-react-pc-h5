/** @format */

import {More} from '@nutui/icons-react-taro';
import {Button, Popover} from '@nutui/nutui-react-taro';
import {View, Text} from '@tarojs/components';
import {useCallback, useState} from 'react';
import {MenuList} from './constants';
import {isH5} from '@/common/utils';
import Menu from './Menu';
import Navigator from '@/common/utils/navigator';
import './index.scss';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const changeNarBar = useCallback(e => {
    setVisible(pre => !pre);
    e?.stopPropagation();
  }, []);

  const handleJumpLogin = useCallback(() => {
    Navigator.navigateTo('main/login');
  }, []);

  return (
    <View className='header'>
      <Text className='title'>植物种质资源保存与共享平台</Text>
      <View className='header-right'>
        {isH5 ? <Menu list={MenuList} className='menu' /> : <></>}
        <Popover
          visible={visible}
          list={MenuList}
          className={isH5 ? 'popover' : ''}
          location='bottom'
          onClick={changeNarBar}>
          <More
            color='#fff'
            size={20}
            onClick={changeNarBar}
            className={isH5 ? 'popover' : ''}
          />
        </Popover>
        {isH5 ? (
          <Button
            size='small'
            className='login-button'
            onClick={handleJumpLogin}>
            登陆
          </Button>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default Header;
