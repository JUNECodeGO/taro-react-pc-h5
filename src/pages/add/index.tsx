/** @format */
import Header from '@/components/Header';
import {
  Form,
  Button,
  InputNumber,
  Input,
  TextArea,
  Divider,
} from '@nutui/nutui-react-taro';
import {View} from '@tarojs/components';
import './app.scss';

const AddPage = () => {
  return (
    <View>
      <Header title='录入资源' />
      <Form
        labelPosition='right'
        footer={
          <>
            <Button formType='reset' block type='primary'>
              重置
            </Button>
            <Button formType='submit' block type='primary'>
              提交
            </Button>
          </>
        }>
        <Divider>基本信息</Divider>
        <Form.Item
          required
          label='字段A'
          name='username'
          rules={[
            {max: 5, message: '字段A不能超过5个字'},
            {required: true, message: '请输入字段A'},
          ]}>
          <Input
            className='nut-input-text'
            placeholder='请输入字段A'
            type='text'
          />
        </Form.Item>
        <Form.Item
          label='字段D'
          name='address'
          rules={[
            {max: 15, message: '字段D不能超过15个字'},
            {required: true, message: '请输入字段D'},
          ]}>
          <TextArea placeholder='请输入字段D' maxLength={100} />
        </Form.Item>
        <Form.Item
          label='数量'
          name='num'
          getValueFromEvent={(...args) => args[0]}>
          <InputNumber />
        </Form.Item>
        <Divider>收集信息</Divider>
      </Form>
    </View>
  );
};

export default AddPage;
