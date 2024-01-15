/** @format */

import {View, Text} from '@tarojs/components';
import {Button, Form, Image, Input} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import {useCallback} from 'react';
import Taro from '@tarojs/taro';

import './index.scss';
import Navigator from '@/common/utils/navigator';

const tabList = [
  {
    label: '个人资料',
  },
  {
    label: '修改密码',
  },
  {
    label: '消息列表',
  },
];

const Account = () => {
  const handleJumpLogin = useCallback(() => {
    Navigator.navigateTo('main/login');
  }, []);
  return (
    <BasicLayout className='account'>
      <View className='account-card'>
        <View className='account-card-top' onClick={handleJumpLogin}>
          <Image
            src={require('@/assets/images/avator.png')}
            mode='scaleToFill'
            width='80'
            height='80'
            radius='50%'
            className='avatar'
          />
          <Text className='name'>快速登录/注册</Text>
        </View>
        <View className='account-card-tab'>
          {tabList.map(item => (
            <View key={item.label} className='account-card-tab-item active'>
              <Text className='title'>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
      <View className='card'>
        <Form
          labelPosition='left'
          divider
          footer={
            <>
              <Button block type='primary' className='login-button'>
                确认修改
              </Button>
            </>
          }>
          <Form.Item label='当前密码' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入用户名'
              type='text'
            />
          </Form.Item>

          <Form.Item label='新设密码' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入密码'
              type='password'
            />
          </Form.Item>
          <Form.Item label='重新输入' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入密码'
              type='password'
            />
          </Form.Item>
        </Form>
      </View>
      <View className='card'>
        <Form
          labelPosition='left'
          divider
          footer={
            <>
              <Button block type='primary' className='login-button'>
                确认修改
              </Button>
            </>
          }>
          <Form.Item label='显示昵称' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入用户名'
              type='text'
            />
          </Form.Item>

          <Form.Item label='绑定邮箱' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入密码'
              type='password'
            />
          </Form.Item>
          <Form.Item label='手机号码' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入密码'
              type='password'
            />
          </Form.Item>
        </Form>
      </View>
    </BasicLayout>
  );
};

export default Account;
