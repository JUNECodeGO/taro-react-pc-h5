/** @format */

import {updateUserInfoAPI} from '@/api/user';
import {CodeType} from '@/api/user/dto';
import useVerification from '@/common/hook/useVerification';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import {useCallback} from 'react';

const PasswordForm = (props: {needPhone?: boolean; type: CodeType}) => {
  const {needPhone = true, type} = props;
  const [form] = Form.useForm();
  const {Phone, VerificationGroup} = useVerification({form, type});

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
      form={form}
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
