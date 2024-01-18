/** @format */

import {View, Text} from '@tarojs/components';
import {Button, Form, Image, Input} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import {useCallback, useMemo, useState} from 'react';
import Navigator from '@/common/utils/navigator';
import useStore from '@/store';

import './index.scss';
import PasswordForm from '@/components/PasswardForm';

enum TabType {
  account = 'account',
  password = 'password',
  share = 'share',
}

const tabList = [
  {
    label: '个人资料',
    name: TabType.account,
  },
  {
    label: '修改密码',
    name: TabType.password,
  },
  {
    label: '我的共享',
    name: TabType.share,
  },
];

const Account = () => {
  const {
    useUserStore: {userInfo},
  } = useStore();
  const [tab, setTab] = useState(TabType.account);

  const handleJumpLogin = useCallback(() => {
    Navigator.navigateTo('main/login');
  }, []);

  const handleChangeTab = useCallback(tab => {
    setTab(tab);
  }, []);

  const renderAccountContent = useMemo(() => {
    if (!userInfo) return null;
    switch (tab) {
      case TabType.password:
        return (
          <View className='card'>
            <PasswordForm />
          </View>
        );
      case TabType.account:
        return (
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
        );
      case TabType.share:
        return <></>;
      default:
        break;
    }
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
          {userInfo ? null : <Text className='name'>快速登录/注册</Text>}
        </View>
        <View className='account-card-tab'>
          {tabList.map(item => (
            <View
              key={item.label}
              onClick={() => handleChangeTab(item.name)}
              className={`account-card-tab-item ${
                tab === item.name ? 'active' : ''
              }`}>
              <Text className='title'>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
      {renderAccountContent}
    </BasicLayout>
  );
};

export default Account;
