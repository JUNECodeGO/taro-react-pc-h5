/** @format */

import {useCallback} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Navigator from '@/common/utils/navigator';

import './index.scss';

export default function Login() {
  const handleJumpSign = useCallback(() => {
    Navigator.redirectTo('/signin');
  }, []);
  return (
    <LoginSignInWrapper>
      <View className='login-component'>
        <Text className='title'>欢迎登录</Text>
        <Form
          labelPosition='top'
          divider
          footer={
            <>
              <Button block type='primary' className='login-button'>
                登录
              </Button>
            </>
          }>
          <Form.Item required label='手机号' name='phone'>
            <Input
              className='nut-input-text'
              placeholder='请输入手机号'
              type='text'
            />
          </Form.Item>
          <Form.Item required label='密码' name='password'>
            <Input
              className='nut-input-text'
              placeholder='请输入密码'
              type='password'
            />
          </Form.Item>
        </Form>
        <View className='forget'>
          <Text onClick={handleJumpSign}>快速登录</Text>
          <Text className='normal underline'>忘记密码</Text>
        </View>
      </View>
    </LoginSignInWrapper>
  );
}
