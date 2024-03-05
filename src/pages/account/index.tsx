/** @format */
import Taro, {useDidShow} from '@tarojs/taro';
import {getUserAPI, updateUserInfoAPI} from '@/api/user';
import {View, Text} from '@tarojs/components';
import {Button, Form, Image, Input} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import {useCallback, useMemo, useState} from 'react';
import Navigator from '@/common/utils/navigator';
import {observer, useStore} from '@/store';
import PasswordForm from '@/components/PasswardForm';
import {CodeType} from '@/api/user/dto';
import SideLayout from '@/components/SideLayout';
import './index.scss';
import ShareList from './components/ShareList';

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
  ...(process.env.TARO_ENV === 'h5'
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
    useUserStore: {userInfo, setUserInfo},
  } = useStore();
  const [tab, setTab] = useState(TabType.account);

  const handleJumpLogin = useCallback(() => {
    if (userInfo) return;
    Navigator.navigateTo('main/login');
  }, [userInfo]);

  const handleChangeTab = useCallback(tab => {
    setTab(tab);
  }, []);

  const handleRefresh = useCallback(async () => {
    try {
      const res = await getUserAPI();
      if (res?.data) {
        setUserInfo(res.data);
      }
    } catch (error) {}
  }, []);

  const handleChangeUserInfo = useCallback(async values => {
    const {email, nickname} = values || {};
    try {
      Taro.showLoading();
      const data = await updateUserInfoAPI({email, nickname});
      if (data && data.code === 0) {
        handleRefresh();
        Taro.showToast({
          title: '修改成功',
          duration: 2000,
          icon: 'success',
        });
      } else {
        throw Error();
      }
    } catch (error) {
      Taro.showToast({
        title: '修改失败，请稍后再试',
        duration: 2000,
        icon: 'error',
      });
    } finally {
      Taro.hideLoading();
    }
  }, []);

  const submitFailed = useCallback(error => {
    Taro.showToast({title: JSON.stringify(error), icon: 'error'});
  }, []);

  const renderAccountContent = useMemo(() => {
    if (!userInfo) return null;
    switch (tab) {
      case TabType.password:
        return (
          <View className='card'>
            <PasswordForm needPhone={true} type={CodeType.PASSWORD} />
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
              onFinishFailed={(values, errors) => submitFailed(errors)}
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
              <Form.Item label='显示昵称' name='nickname'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入昵称'
                  type='text'
                />
              </Form.Item>

              <Form.Item
                label='绑定邮箱'
                name='email'
                rules={[
                  {
                    validator: (rule, value: string) => {
                      return /^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/.test(
                        value
                      );
                    },
                    message: '请输入正确邮箱',
                  },
                ]}>
                <Input className='nut-input-text' placeholder='请输入邮箱' />
              </Form.Item>
            </Form>
          </View>
        );
      case TabType.share:
        return <ShareList />;
      default:
        break;
    }
  }, [userInfo, tab]);

  return (
    <BasicLayout
      className='account'
      leftSlot={process.env.TARO_ENV === 'h5' ? <SideLayout /> : null}>
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
            {userInfo
              ? userInfo.nickname || userInfo.username
              : '快速登录/注册'}
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
