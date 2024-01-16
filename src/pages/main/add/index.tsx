/** @format */
import {useMemo} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form, Input, TextArea, Uploader} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import Breadcrumb from '@/components/Bread';

import './index.scss';

const AddPage = () => {
  const breadList = useMemo(
    () => [
      {
        path: 'listing',
        breadcrumbName: '列表',
      },
      {
        breadcrumbName: '收集填报',
      },
    ],
    []
  );
  return (
    <BasicLayout title='信息填报'>
      <Breadcrumb items={breadList} />
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
        <View className='add-container'>
          <View className='card'>
            <View className='card-title'>
              <Text>基本信息</Text>
            </View>
            <View className='card-content'>
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
            </View>
          </View>
          <View className='card'>
            <View className='card-title'>
              <Text>信息录入</Text>
            </View>
            <View className='card-content'>
              <Form.Item
                required
                label='种质类型'
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
                label='收集方式'
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
                label='种质来源'
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
                label='来源国'
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
                label='来源省（州、邦）'
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
                label='来源地'
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
                label='来源机构'
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
                label='原产国'
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
                label='收集地经度'
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
                label='收集地纬度'
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
                label='收集地海拔'
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
                label='土壤类型'
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
                label='收集地生态类型'
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
                label='收集材料类型'
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
                label='收集人'
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
                label='收集单位'
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
                label='收集时间'
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
                label='原生境图片'
                className='add-form-item'
                name='username'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Uploader url='https://my-json-server.typicode.com/linrufeng/demo/posts' />
              </Form.Item>
              <Form.Item
                required
                label='备注'
                className='add-form-item'
                name='username'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <TextArea placeholder='请输入字段D' maxLength={100} />
              </Form.Item>
            </View>
          </View>
        </View>
      </Form>
    </BasicLayout>
  );
};

export default AddPage;
