/** @format */

import {View} from '@tarojs/components';

import './index.scss';

const LoginSignInWrapper = props => {
  return (
    <View className='login-container'>
      <View className='pic' />
      <View className='content'>{props.children}</View>
    </View>
  );
};

export default LoginSignInWrapper;
