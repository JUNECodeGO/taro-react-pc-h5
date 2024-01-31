/** @format */

import {View} from '@tarojs/components';
import {isH5} from '@/common/utils';
import './index.scss';

const LoginSignInWrapper = props => {
  return (
    <View className='login-container'>
      <View className='content'>{props.children}</View>
      {!isH5 ? <></> : <View className='pic' />}
    </View>
  );
};

export default LoginSignInWrapper;
