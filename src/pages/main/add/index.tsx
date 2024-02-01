/** @format */
import {useCallback, useMemo} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form, Input, TextArea, Uploader} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import Breadcrumb from '@/components/Bread';
import Navigator from '@/common/utils/navigator';
import Taro, {useRouter} from '@tarojs/taro';
import {createItem, updateItem} from '@/api/search';

import './index.scss';

const AddPage = () => {
  const router = useRouter();
  const {id} = Navigator.serialize(router.params) || {};
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

  const handleCreate = useCallback(
    async values => {
      try {
        Taro.showLoading();
        const data = await createItem(values);
        if (data && data.code === 0) {
          Taro.showToast({
            title: '创建成功',
          });
          Navigator.navigateBack();
        } else {
          throw Error();
        }
      } catch (error) {
        Taro.showToast({
          title: '创建失败，请稍后再试',
        });
      } finally {
        Taro.hideLoading();
      }
    },
    [id]
  );
  const handleUpdate = useCallback(
    async values => {
      try {
        Taro.showLoading();
        const data = await updateItem(values);
        if (data && data.code === 0) {
          Taro.showToast({
            title: '修改成功',
          });
          Navigator.navigateBack();
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
    },
    [id]
  );
  const handleSubmit = useCallback(
    async values => {
      if (id) {
        handleUpdate(values);
      } else {
        handleCreate(values);
      }
    },
    [id]
  );

  const submitFailed = useCallback(error => {
    Taro.showToast({title: JSON.stringify(error), icon: 'error'});
  }, []);

  return (
    <BasicLayout title='信息填报'>
      <Breadcrumb items={breadList} />
      <Form
        labelPosition='left'
        onFinish={handleSubmit}
        onFinishFailed={(values, errors) => submitFailed(errors)}
        footer={
          <View className='add-footer'>
            <Button block type='primary' formType='reset'>
              重置
            </Button>
            <Button block type='primary' formType='submit'>
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
                name='name'
                className='add-form-item'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请选择作（植）物类别'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='作（植）物名称'
                name='crop_name'
                className='add-form-item'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入作（植）物名称'
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
                  placeholder='请选择科名'
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
                  placeholder='请选择属名或亚属名'
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
                  placeholder='请输入种名'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='种质名称'
                className='add-form-item'
                name='germ_name'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入种质名称'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='外文名称'
                className='add-form-item'
                name='alien_name'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入外文名称'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='学名'
                className='add-form-item'
                name='scientific_name'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入学名'
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
                name='germ_type'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请选择种质类型'
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
                  placeholder='请选择收集方式'
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
                  placeholder='请输入种质来源'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='来源国'
                className='add-form-item'
                name='country'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入来源国家'
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
                  placeholder='请输入来源省（州、邦）'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='来源地'
                className='add-form-item'
                name='address'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入来源地'
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
                  placeholder='请输入来源机构'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='原产国'
                className='add-form-item'
                name='origin_country'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入原产国'
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
                  placeholder='请输入收集地经度'
                  type='number'
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
                  placeholder='请输入收集地纬度'
                  type='number'
                />
              </Form.Item>
              <Form.Item
                required
                label='收集地海拔'
                className='add-form-item'
                name='height'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入地海拔'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='土壤类型'
                className='add-form-item'
                name='soil_type'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入土壤类型'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='收集地生态类型'
                className='add-form-item'
                name='ecological_type'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入收集地生态类型'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='收集材料类型'
                className='add-form-item'
                name='material_type'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入收集材料类型'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='收集人'
                className='add-form-item'
                name='collecter'
                rules={[
                  {max: 5, message: 'Field A cannot exceed 5 characters'},
                  {required: true, message: 'Please enter Field A'},
                ]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入收集人'
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
                  placeholder='请输入收集单位'
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
                  placeholder='请输入收集时间'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='原生境图片'
                className='add-form-item'
                name='image'>
                <Uploader url='https://my-json-server.typicode.com/linrufeng/demo/posts' />
              </Form.Item>
              <Form.Item
                required
                label='备注'
                className='add-form-item'
                name='username'
                rules={[{max: 100, message: '最多输入100个字符'}]}>
                <TextArea placeholder='请输入填写备注' maxLength={100} />
              </Form.Item>
            </View>
          </View>
        </View>
      </Form>
    </BasicLayout>
  );
};

export default AddPage;
