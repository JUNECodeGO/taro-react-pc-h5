/** @format */

import {View, Text} from '@tarojs/components';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import PasswordForm from '@/components/PasswordForm';
import {CodeType} from '@/api/user/dto';
import './index.scss';

export default function password() {
  return (
    <LoginSignInWrapper>
      <View className='password-component'>
        <Text className='title'>密码修改</Text>
        <PasswordForm type={CodeType.LOGIN} />
      </View>
    </LoginSignInWrapper>
  );
}
