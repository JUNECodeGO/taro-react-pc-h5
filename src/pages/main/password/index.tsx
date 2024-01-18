/** @format */

import {useCallback} from 'react';
import {View, Text} from '@tarojs/components';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Navigator from '@/common/utils/navigator';
import PasswordForm from '@/components/PasswardForm';

import './index.scss';

export default function Login() {
  const handleJumpSign = useCallback(() => {
    Navigator.redirectTo('/signin');
  }, []);

  return (
    <LoginSignInWrapper>
      <View className='password-component'>
        <Text className='title'>密码修改</Text>
        <PasswordForm />
      </View>
    </LoginSignInWrapper>
  );
}
