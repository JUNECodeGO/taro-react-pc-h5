/** @format */

import {View} from '@tarojs/components';
import './index.scss';

const LoginSignInWrapper = props => {
  return (
    <View className='login-container'>
      <View className='content'>{props.children}</View>
      {process.env.TARO_ENV !== 'h5' ? <></> : <View className='pic' />}
    </View>
  );
};

export default LoginSignInWrapper;
