/** @format */

import {updatePwdAPI} from '@/api/user';
import {CodeType} from '@/api/user/dto';
import useVerification from '@/common/hook/useVerification';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import {useCallback} from 'react';
import './index.scss';
import {useStore} from '@/store';
import Navigator from '@/common/utils/navigator';

const PasswordForm = (props: {needPhone?: boolean; type: CodeType}) => {
  const {needPhone = true, type, ...rest} = props;
  const [form] = Form.useForm();
  const {Phone, VerificationGroup} = useVerification({form, type});
  const {
    useUserStore: {removeLocalToken, removeUserInfo},
  } = useStore();

  const handleChangePassword = useCallback(async values => {
    try {
      Taro.showLoading();
      const data = await updatePwdAPI(values);
      Taro.hideLoading();
      if (data && data.code === 0) {
        Taro.showToast({
          title: '修改成功',
          duration: 2000,
          icon: 'success',
        });
        removeLocalToken('');
        removeUserInfo();
        Navigator.navigateTo('main/signIn');
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
    }
  }, []);

  return (
    <Form
      {...rest}
      labelPosition='left'
      divider
      onFinish={handleChangePassword}
      form={form}
      className='password-wrapper'
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
      {needPhone ? Phone : null}
      <Form.Item label='新设密码' name='password' required>
        <Input
          className='nut-input-text'
          placeholder='请输入密码'
          type='password'
        />
      </Form.Item>
      <Form.Item
        label='确认密码'
        name='passwordConfirm'
        required
        rules={[
          {
            validator: (rule, value: string) => {
              const password = form.getFieldValue('password');
              return password === value;
            },
            message: '请输入正确密码',
          },
        ]}>
        <Input
          className='nut-input-text'
          placeholder='请重新输入密码'
          type='password'
        />
      </Form.Item>
      {VerificationGroup}
    </Form>
  );
};

export default PasswordForm;
