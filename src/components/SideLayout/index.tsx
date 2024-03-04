/** @format */
import {useCallback} from 'react';
import Navigator from '@/common/utils/navigator';
import {View, Text} from '@tarojs/components';

import './index.scss';

const items = [
  {
    label: '基本资料',
    key: '基本资料',
  },
  {
    label: '修改密码',
    key: '修改密码',
  },
  {
    label: '消息管理',
    key: '消息管理',
  },
];

const SideLayout = () => {
  const handleClick = useCallback(e => {
    Navigator.navigateTo('account');
  }, []);

  return (
    <View onClick={handleClick} className='account-menu'>
      {items.map(item => {
        return (
          <View key={item.key} className='menu-item' onClick={handleClick}>
            <Text>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default SideLayout;
