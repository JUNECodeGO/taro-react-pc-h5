/** @format */

import {useCallback} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Navigator from '@/common/utils/navigator';
import {useStore} from '@/store';
import Taro from '@tarojs/taro';
import {getUserAPI, loginPCAPI} from '@/api/user';

import './index.scss';

export default function Login() {
  const [form] = Form.useForm();
  const {
    useUserStore: {setToken, setUserInfo},
  } = useStore();

  const handleSuccess = useCallback(async () => {
    try {
      Taro.showLoading;
      const res = await getUserAPI();
      if (res?.data) {
        setUserInfo(res.data);
      }
    } catch (error) {
      Taro.showToast({title: '刷新失败', duration: 2000, icon: 'error'});
    } finally {
      Taro.hideKeyboard();
    }
  }, []);

  const handleJumpSign = useCallback(() => {
    Navigator.redirectTo('main/signIn');
  }, []);

  const handleSubmit = useCallback(async values => {
    try {
      Taro.showLoading();
      const res = await loginPCAPI(values);
      if (res && res.code === 0) {
        const {data = {}} = res || {};
        setToken(data.token);
        handleSuccess();
        Taro.showToast({
          title: '登录成功，正在跳转',
          duration: 2000,
          icon: 'success',
          success: () => {
            Navigator.navigateBack();
          },
        });
      } else {
        throw Error();
      }
    } catch (error) {
      Taro.showToast({
        title: '登录失败，请稍后再试',
        duration: 2000,
        icon: 'error',
      });
    } finally {
      Taro.hideLoading();
    }
  }, []);

  const handleJumpPassword = useCallback(() => {
    Navigator.redirectTo('main/password');
  }, []);

  return (
    <LoginSignInWrapper>
      <View className='login-component'>
        <Text className='title'>欢迎登录</Text>
        <Form
          labelPosition='top'
          divider
          onFinish={handleSubmit}
          form={form}
          footer={
            <>
              <Button block type='primary' className='login-button'>
                登录
              </Button>
            </>
          }>
          <Form.Item
            required
            label='手机号'
            name='phone'
            rules={[
              {required: true, message: '请输入正确的电话号码'},
              {
                validator: (rule, value: string) => {
                  return /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(
                    value
                  );
                },
                message: '请输入正确电话',
              },
            ]}>
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
          <Text onClick={handleJumpPassword} className='normal underline'>
            忘记密码
          </Text>
        </View>
      </View>
    </LoginSignInWrapper>
  );
}
