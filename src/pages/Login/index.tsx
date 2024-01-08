/** @format */

import {Button, Form, Input} from '@nutui/nutui-react-taro';
import {View, Text} from '@tarojs/components';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import './index.scss';

export default function Login() {
  return (
    <LoginSignInWrapper>
      <View className='login-component'>
        <Text className='title'>欢迎登录</Text>
        <View>
          <Text className='normal'>新用户？</Text>
          <Text className='normal primary'>快速注册</Text>
        </View>
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
          <Form.Item required label='用户名' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入用户名'
              type='text'
            />
          </Form.Item>
          <Form.Item required label='密码' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入密码'
              type='password'
            />
          </Form.Item>
          <View className='forget'>
            <Text className='normal underline'>忘记密码</Text>
          </View>
        </Form>
      </View>
    </LoginSignInWrapper>
  );
}
