/** @format */
import {useCallback, useMemo} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import Breadcrumb from '@/components/Bread';
import {applyShare} from '@/api/search';
import Taro, {useRouter} from '@tarojs/taro';
import Navigator from '@/common/utils/navigator';

import './index.scss';

const ApplyPage = () => {
  const router = useRouter();
  const {id, name} = Navigator.serialize(router.params) || {};
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

  const handleSubmit = useCallback(async values => {
    try {
      Taro.showLoading();
      const data = await applyShare({id, ...values});
      Taro.hideLoading();
      if (data && data.code === 0) {
        Taro.showToast({
          title: '申请成功，请等待联系',
          duration: 2000,
          icon: 'success',
          success: () => {
            setTimeout(() => {
              Navigator.navigateBack();
            }, 2000);
          },
        });
      } else if (data && data.code === 4001) {
        Taro.showToast({
          title: `申请共享失败, 已存在相同申请【id:${data.data}】。`,
          duration: 2000,
          icon: 'error',
          success: () => {
            setTimeout(() => {
              Navigator.navigateBack();
            }, 2000);
          },
        });
      } else {
        throw Error();
      }
    } catch (error) {
      Taro.showToast({
        title: '申请失败，请稍后再试',
        duration: 200,
        icon: 'error',
      });
    } finally {
    }
  }, []);

  const submitFailed = useCallback(error => {
    Taro.showToast({title: JSON.stringify(error), icon: 'error'});
  }, []);

  return (
    <BasicLayout className='apply-container'>
      <Breadcrumb items={breadList} />
      <View className='card'>
        <View className='card-title'>
          <Text>{`${name} 共享申请`}</Text>
        </View>

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
          <Form.Item
            required
            label='单位/个人名称'
            name='applier'
            className='add-form-item'
            rules={[{required: true, message: '请输入单位或者个人名称'}]}>
            <Input
              className='nut-input-text'
              placeholder='请输入单位或者个人名称'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='联系电话'
            name='phone'
            className='add-form-item'
            rules={[
              {required: true, message: '请输入联系电话'},
              {
                validator: (rule, value: string) => {
                  return /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(
                    value
                  );
                },
                message: '请输入正确电话',
              },
            ]}>
            <Input
              className='nut-input-text'
              placeholder='请输入联系电话'
              type='number'
            />
          </Form.Item>
          <Form.Item
            required
            label='地址'
            className='add-form-item'
            name='address'
            rules={[{required: true, message: '请输入地址'}]}>
            <Input
              className='nut-input-text'
              placeholder='请输入地址'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='目的'
            className='add-form-item'
            name='purpose'
            rules={[{required: true, message: '请输入目的'}]}>
            <Input
              className='nut-input-text'
              placeholder='请输入目的'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='利用材料'
            className='add-form-item'
            name='material'
            rules={[{required: true, message: '请填写利用材料'}]}>
            <Input
              className='nut-input-text'
              placeholder='请填写利用材料'
              type='text'
            />
          </Form.Item>
          <Form.Item
            required
            label='提供数量'
            className='add-form-item'
            name='amount'
            rules={[{required: true, message: '请输入提供数量'}]}>
            <Input
              className='nut-input-text'
              placeholder='请输入提供数量'
              type='number'
            />
          </Form.Item>
          <Form.Item
            required
            label='提供种质形态'
            className='add-form-item'
            name='morphology'
            rules={[{required: true, message: '请填写提供种质形态'}]}>
            <Input
              className='nut-input-text'
              placeholder='请填写提供种质形态'
              type='text'
            />
          </Form.Item>
        </Form>
      </View>
    </BasicLayout>
  );
};

export default ApplyPage;
