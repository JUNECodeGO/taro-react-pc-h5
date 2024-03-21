/** @format */
import Taro from '@tarojs/taro';
import {useCallback} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Navigator from '@/common/utils/navigator';
import useVerification from '@/common/hook/useVerification';
import {getUserAPI, quickLoginAPI} from '@/api/user';
import {CodeType} from '@/api/user/dto';
import {useStore} from '@/store';

import './index.scss';
export default function SignIn() {
  const [form] = Form.useForm();
  const {
    useUserStore: {setToken, setUserInfo},
  } = useStore();
  const {Phone, VerificationGroup} = useVerification({
    form,
    type: CodeType.LOGIN,
  });
  const handleSuccess = useCallback(async () => {
    try {
      Taro.showLoading;
      const res = await getUserAPI();
      Taro.hideLoading();
      if (res?.data) {
        setUserInfo(res.data);
      }
    } catch (error) {
      Taro.showToast({title: '刷新失败'});
    } finally {
    }
  }, []);
  const handleJump = useCallback(() => {
    Navigator.redirectTo('main/login');
  }, []);

  const handleSubmit = useCallback(async values => {
    try {
      Taro.showLoading();
      const res = await quickLoginAPI(values);
      Taro.hideLoading();
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
        duration: 2000,
        icon: 'error',
        title: '登录失败，请稍后再试',
      });
    } finally {
    }
  }, []);

  return (
    <LoginSignInWrapper>
      <View className='signIn-component'>
        <Text className='title'>快速登录/注册</Text>
        <Form
          labelPosition='top'
          divider
          form={form}
          onFinish={handleSubmit}
          footer={
            <>
              <Button block type='primary' className='signIn-button'>
                提交
              </Button>
            </>
          }>
          {Phone}
          {VerificationGroup}
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
