/** @format */
import {useCallback, useState} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Popover} from '@nutui/nutui-react-taro';
import {More} from '@nutui/icons-react-taro';
import Menu from './Menu';
import {MenuList} from './constants';
import Navigator from '@/common/utils/navigator';
import {isH5} from '@/common/utils';

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
      <Text className='title'>热带作物种质资源引进中转平台</Text>
      <View className='header-right'>
        {process.env.TARO_ENV === 'h5' ? (
          <Menu list={MenuList} className='menu' />
        ) : (
          <></>
        )}
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
        {process.env.TARO_ENV === 'h5' ? (
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
