/** @format */

import {Button, Form, Input} from '@nutui/nutui-react-taro';
import {View, Text} from '@tarojs/components';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import './index.scss';

export default function SignIn() {
  return (
    <LoginSignInWrapper>
      <View className='signIn-component'>
        <Text className='title'>用户注册</Text>
        <Form
          labelPosition='top'
          divider
          footer={
            <>
              <Button block type='primary' className='signIn-button'>
                注册
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
          <Form.Item required label='登录密码' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入密码'
              type='password'
            />
          </Form.Item>
          <Form.Item required label='确认密码' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入密码'
              type='password'
            />
          </Form.Item>
          <View className='verification'>
            <Input placeholder='请输入验证码' />
            <Button>获取验证码</Button>
          </View>
        </Form>
      </View>
    </LoginSignInWrapper>
  );
}
