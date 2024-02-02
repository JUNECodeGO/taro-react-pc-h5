/** @format */

import {updateUserInfoAPI} from '@/api/user';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import {View, Text} from '@tarojs/components';
import Taro from '@tarojs/taro';
import {useCallback} from 'react';

const PasswordForm = () => {
  const handleChangePassword = useCallback(async values => {
    const {email, nickName} = values || {};
    try {
      Taro.showLoading();
      const data = await updateUserInfoAPI({email, nickName});
      if (data && data.code === 0) {
        Taro.showToast({
          title: '修改成功',
        });
      } else {
        throw Error();
      }
    } catch (error) {
      Taro.showToast({
        title: '修改失败，请稍后再试',
      });
    } finally {
      Taro.hideLoading();
    }
  }, []);

  return (
    <Form
      labelPosition='left'
      divider
      onFinish={handleChangePassword}
      footer={
        <>
          <Button
            block
            type='primary'
            className='login-button'
            formType='submit'>
            确认修改
          </Button>
        </>
      }>
      <Form.Item label='新设密码' name='password'>
        <Input
          className='nut-input-text'
          placeholder='请输入密码'
          type='password'
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
  );
};

export default PasswordForm;
