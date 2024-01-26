/** @format */

import {View, Text} from '@tarojs/components';
import {Button, Form, Image, Input} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import {useCallback, useMemo, useState} from 'react';
import Navigator from '@/common/utils/navigator';
import useStore, {observer} from '@/store';
import PasswordForm from '@/components/PasswardForm';
import {isH5} from '@/common/utils';

import './index.scss';
import Taro, {useDidShow} from '@tarojs/taro';
import {updateUserInfoAPI} from '@/api/user';

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
  ...(isH5
    ? [
        {
          label: '修改密码',
          name: TabType.password,
        },
      ]
    : []),

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
    if (userInfo) return;
    Navigator.navigateTo('main/login');
  }, []);

  const handleChangeTab = useCallback(tab => {
    setTab(tab);
  }, []);

  const handleChangeUserInfo = useCallback(async values => {
    try {
      Taro.showLoading();
      await updateUserInfoAPI(values);
    } catch (error) {
    } finally {
      Taro.hideLoading();
    }
  }, []);
  console.log(userInfo, '++++');
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
              initialValues={userInfo}
              onFinish={handleChangeUserInfo}
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
              <Form.Item label='显示昵称' name='nickName'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入昵称'
                  type='text'
                />
              </Form.Item>

              <Form.Item label='绑定邮箱' name='email'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入邮箱'
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
  }, [userInfo]);

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
          <Text className='name'>
            {userInfo ? userInfo.nickName : '快速登录/注册'}
          </Text>
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

export default observer(Account);
