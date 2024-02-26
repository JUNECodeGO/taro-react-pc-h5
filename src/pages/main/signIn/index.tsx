/** @format */
import {useCallback} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Navigator from '@/common/utils/navigator';
import useVerification from '@/common/hook/useVerification';
import './index.scss';
import Taro from '@tarojs/taro';
import {quickLoginAPI} from '@/api/user';
import {CodeType} from '@/api/user/dto';
export default function SignIn() {
  const [form] = Form.useForm();

  const {Phone, VerificationGroup} = useVerification({
    form,
    type: CodeType.LOGIN,
  });

  const handleJump = useCallback(() => {
    Navigator.redirectTo('main/login');
  }, []);

  const handleSubmit = useCallback(async values => {
    try {
      Taro.showLoading();
      const data = await quickLoginAPI(values);
      if (data && data.code === 0) {
        Taro.showToast({
          title: '登录成功，正在跳转',
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
      });
    } finally {
      Taro.hideLoading();
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
