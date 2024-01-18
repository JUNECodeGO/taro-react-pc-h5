/** @format */

import {Button, Form, Input} from '@nutui/nutui-react-taro';

const PasswordForm = () => {
  return (
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
  );
};

export default PasswordForm;
