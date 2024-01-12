/** @format */

import {View, Text} from '@tarojs/components';
import {Image} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import {useCallback} from 'react';
import Taro from '@tarojs/taro';

import './index.scss';

const tabList = [
  {
    label: '个人资料',
  },
  {
    label: '消息列表',
  },
];

const Account = () => {
  const handleJumpLogin = useCallback(() => {
    Taro.navigateTo({
      url: 'login',
    });
  }, []);
  return (
    <BasicLayout>
      <View className='account-card'>
        <View className='account-card-top' onClick={handleJumpLogin}>
          <Image
            src={require('@/assets/images/avator.png')}
            mode='scaleToFill'
            width='80'
            height='80'
            radius='50%'
            className='avatar'
          />
          <Text className='name'>快速登录/注册</Text>
        </View>
        <View className='account-card-tab'>
          {tabList.map(item => (
            <View key={item.label} className='account-card-tab-item'>
              <Text className='title'>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </BasicLayout>
  );
};

export default Account;
