/** @format */
import {useCallback} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Navigator from '@/common/utils/navigator';

import './index.scss';

export default function SignIn() {
  const handleJump = useCallback(() => {
    Navigator.redirectTo('/login');
  }, []);
  return (
    <LoginSignInWrapper>
      <View className='signIn-component'>
        <Text className='title'>快速登录/注册</Text>
        <Form
          labelPosition='top'
          divider
          footer={
            <>
              <Button block type='primary' className='signIn-button'>
                提交
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
          <View className='verification'>
            <Form.Item required label='验证码' name='code'>
              <Input
                className='nut-input-text'
                placeholder='请输入验证码'
                type='text'
              />
            </Form.Item>
            <View className='verification-text'>
              <Text>获取验证码</Text>
            </View>
          </View>
        </Form>
        <View className='footer'>
          <Text className='normal' onClick={handleJump}>
            账号密码登录
          </Text>
        </View>
      </View>
    </LoginSignInWrapper>
  );
}
