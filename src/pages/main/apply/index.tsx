/** @format */
import {useMemo} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import Breadcrumb from '@/components/Bread';

import './index.scss';

const ApplyPage = () => {
  const breadList = useMemo(
    () => [
      {
        path: 'listing',
        breadcrumbName: '列表',
      },
      {
        breadcrumbName: '共享申请',
      },
    ],
    []
  );
  return (
    <BasicLayout className='apply-container'>
      <Breadcrumb items={breadList} />
      <View className='card'>
        <View className='card-title'>
          <Text>共享申请</Text>
        </View>

        <Form
          labelPosition='left'
          footer={
            <View className='add-footer'>
              <Button block type='primary'>
                重置
              </Button>
              <Button block type='primary'>
                提交
              </Button>
            </View>
          }>
          <Form.Item
            required
            label='作（植）物类别'
            name='username'
            className='add-form-item'
            rules={[
              {max: 5, message: 'Field A cannot exceed 5 characters'},
              {required: true, message: 'Please enter Field A'},
            ]}>
            <Input
              className='nut-input-text'
              placeholder='Please type in Field A'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='作（植）物名称'
            name='username'
            className='add-form-item'
            rules={[
              {max: 5, message: 'Field A cannot exceed 5 characters'},
              {required: true, message: 'Please enter Field A'},
            ]}>
            <Input
              className='nut-input-text'
              placeholder='Please type in Field A'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='科名'
            className='add-form-item'
            name='username'
            rules={[
              {max: 5, message: 'Field A cannot exceed 5 characters'},
              {required: true, message: 'Please enter Field A'},
            ]}>
            <Input
              className='nut-input-text'
              placeholder='Please type in Field A'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='属名或亚属名'
            className='add-form-item'
            name='username'
            rules={[
              {max: 5, message: 'Field A cannot exceed 5 characters'},
              {required: true, message: 'Please enter Field A'},
            ]}>
            <Input
              className='nut-input-text'
              placeholder='Please type in Field A'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='种名'
            className='add-form-item'
            name='username'
            rules={[
              {max: 5, message: 'Field A cannot exceed 5 characters'},
              {required: true, message: 'Please enter Field A'},
            ]}>
            <Input
              className='nut-input-text'
              placeholder='Please type in Field A'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='种质名称'
            className='add-form-item'
            name='username'
            rules={[
              {max: 5, message: 'Field A cannot exceed 5 characters'},
              {required: true, message: 'Please enter Field A'},
            ]}>
            <Input
              className='nut-input-text'
              placeholder='Please type in Field A'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='外文名称'
            className='add-form-item'
            name='username'
            rules={[
              {max: 5, message: 'Field A cannot exceed 5 characters'},
              {required: true, message: 'Please enter Field A'},
            ]}>
            <Input
              className='nut-input-text'
              placeholder='Please type in Field A'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='学名'
            className='add-form-item'
            name='username'
            rules={[
              {max: 5, message: 'Field A cannot exceed 5 characters'},
              {required: true, message: 'Please enter Field A'},
            ]}>
            <Input
              className='nut-input-text'
              placeholder='Please type in Field A'
              type='text'
            />
          </Form.Item>
        </Form>
      </View>
    </BasicLayout>
  );
};

export default ApplyPage;
