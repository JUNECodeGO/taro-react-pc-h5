/** @format */
import {useCallback, useMemo, useState} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Popover} from '@nutui/nutui-react-taro';
import {More} from '@nutui/icons-react-taro';
import Menu from './Menu';
import {MenuList} from './constants';
import Navigator from '@/common/utils/navigator';
import {isH5} from '@/common/utils';
import {useStore} from '@/store';

import './index.scss';

const Header = () => {
  const {
    useUserStore: {userInfo},
  } = useStore();
  const [visible, setVisible] = useState(false);
  const changeNarBar = useCallback(e => {
    setVisible(pre => !pre);
    e?.stopPropagation();
  }, []);

  const handleJumpLogin = useCallback(() => {
    Navigator.navigateTo('main/login');
  }, []);

  const accountButton = useMemo(() => {
    if (userInfo) {
      const {nickname, username} = userInfo;
      return <Text>欢迎 {nickname || username}</Text>;
    } else {
      return (
        <Button size='small' className='login-button' onClick={handleJumpLogin}>
          登陆
        </Button>
      );
    }
  }, [userInfo]);

  const popoverList = useMemo(
    () =>
      MenuList.map(item => ({
        ...item,
        action: {
          onClick: () => {
            Navigator.navigateTo(item.path);
          },
        },
      })),
    [MenuList]
  );

  return (
    <View className='header'>
      <Text className='title'>热带作物种质资源引进中转平台</Text>
      <View className='header-right'>
        {process.env.TARO_ENV === 'h5' ? (
          <Menu list={MenuList} className='menu' />
        ) : (
          <></>
        )}
        {MenuList.length && (
          <Popover
            visible={visible}
            list={popoverList}
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
        )}

        {process.env.TARO_ENV === 'h5' ? accountButton : <></>}
      </View>
    </View>
  );
};

export default Header;
