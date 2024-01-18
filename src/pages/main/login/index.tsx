/** @format */
import {View, Text} from '@tarojs/components';
import {Button, Radio} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';

import './index.scss';

export default function Login() {
  return (
    <LoginSignInWrapper>
      <View className='login-component wx'>
        <Text className='title'>欢迎登录</Text>
        <Button className='wx-button' type='primary'>
          微信一键登录
        </Button>
        <View className='forget '>
          <Radio checked />
          <Text>
            若手机号未注册则进入注册流程，注册即为同意《用户注册协议》《隐私政策》
          </Text>
        </View>
      </View>
    </LoginSignInWrapper>
  );
}
