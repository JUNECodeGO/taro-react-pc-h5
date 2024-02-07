/** @format */
import {useCallback} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Navigator from '@/common/utils/navigator';
import useVerification from '@/common/hook/useVerification';
import './index.scss';
export default function SignIn() {
  const [form] = Form.useForm();

  const {Phone, VerificationGroup} = useVerification(form);

  const handleJump = useCallback(() => {
    Navigator.redirectTo('main/login');
  }, []);

  return (
    <LoginSignInWrapper>
      <View className='signIn-component'>
        <Text className='title'>快速登录/注册</Text>
        <Form
          labelPosition='top'
          divider
          form={form}
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
