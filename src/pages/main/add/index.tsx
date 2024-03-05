/** @format */
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text} from '@tarojs/components';
import {
  Button,
  Form,
  Input,
  Radio,
  TextArea,
  Uploader,
} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import Breadcrumb from '@/components/Bread';
import Selection from '@/components/Selection';
import Navigator from '@/common/utils/navigator';
import Taro, {useRouter} from '@tarojs/taro';
import {createItem, getCateInfo, updateItem} from '@/api/search';
import {
  collectingMaterial,
  ecosystemType,
  germType,
  soilType,
} from './constants';
import events from '@/common/event';

import './index.scss';

const AddPage = () => {
  const router = useRouter();
  const {id} = Navigator.serialize(router.params) || {};
  const [cates, setCates] = useState([]);
  const [currentFamily, setCurrentFamily] = useState();
  const [family, setFamilies] = useState([]);
  const familyInfo = useRef({});
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
        const {
          cate_id = [],
          family = [],
          genus = [],
          germ_type = [],
          soil_type = [],
          ecosystem_type = [],
          collecting_material = [],
        } = values;
        let realFamily = typeof family === 'string' ? family : family[0];

        if (realFamily) {
          realFamily = familyInfo.current[realFamily].parentId;
        }
        const data = await createItem({
          ...values,
          cate_id: typeof cate_id === 'string' ? cate_id : cate_id[0],
          family: realFamily,
          genus: typeof genus === 'string' ? genus : genus[0],
          germ_type: typeof germ_type === 'string' ? germ_type : germ_type[0],
          soil_type: typeof soil_type === 'string' ? soil_type : soil_type[0],
          ecosystem_type:
            typeof ecosystem_type === 'string'
              ? ecosystem_type
              : ecosystem_type[0],
          collecting_material:
            typeof collecting_material === 'string'
              ? collecting_material
              : collecting_material[0],
        });
        if (data && data.code === 0) {
          Taro.showToast({
            title: '创建成功',
            duration: 2000,
            icon: 'success',
          });
          Navigator.navigateBack({
            success: () => {
              events.trigger('MY_REFRESH');
            },
          });
        } else {
          throw Error();
        }
      } catch (error) {
        Taro.showToast({
          title: '创建失败，请稍后再试',
          duration: 2000,
          icon: 'error',
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
            duration: 2000,
            icon: 'success',
          });
          Navigator.navigateBack();
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

  const getSelectInfos = useCallback(async () => {
    try {
      Taro.showLoading();
      const {cate = [], family = []} = (await getCateInfo()) || {};

      const families = [];
      setCates(cate.map(item => ({value: item.cate_id, text: item.cate_name})));

      for (let target of family) {
        const {cate_name, cate_name_cn, genus = [], cate_id} = target;
        const option = {
          value: cate_id,
          text: `(${cate_name})${cate_name_cn}`,
        };
        families.push(option);
        familyInfo.current[String(cate_id)] = {
          genus: genus.map(({cate_name, cate_name_cn}) => ({
            value: `(${cate_name})${cate_name_cn}`,
            text: `(${cate_name})${cate_name_cn}`,
          })),
          parentId: `(${cate_name})${cate_name_cn}`,
        };
      }

      setFamilies(families);
    } catch (error) {
    } finally {
      Taro.hideLoading();
    }
  }, []);

  const subFamily = useMemo(() => {
    const target =
      currentFamily?.[0] && (familyInfo.current[currentFamily[0]] as any);
    return target?.genus || {};
  }, [currentFamily]);

  const handleFamilyChange = useCallback((_, option) => {
    setCurrentFamily(option);
  }, []);

  useEffect(() => {
    getSelectInfos();
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
              <Selection
                required
                rules={[{required: true, message: '请选择作（植）物类别'}]}
                label='作（植）物类别'
                name='cate_id'
                placeholder='请选择作（植）物类别'
                options={cates}
              />
              <Selection
                label='科名'
                name='family'
                placeholder='请选择科名'
                required
                rules={[{required: true, message: '请选择科名'}]}
                options={family}
                onChange={handleFamilyChange}
              />
              <Selection
                label='属名或亚属名'
                name='genus'
                placeholder='请选择科名'
                required
                rules={[{required: true, message: '请选择属名或亚属名'}]}
                options={subFamily}
              />
              <Form.Item
                required
                label='种名'
                className='add-form-item'
                name='species'
                rules={[{required: true, message: '请输入种名'}]}>
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
                rules={[{required: true, message: 'Please enter Field A'}]}>
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
                rules={[{required: true, message: '请输入外文名称'}]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入外文名称'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                label='学名'
                className='add-form-item'
                name='scientific_name'>
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
              <Selection
                label='种质类型'
                name='germ_type'
                placeholder='请选择种质类型'
                required
                rules={[{required: true, message: '请选择种质类型'}]}
                options={germType}
              />

              <Form.Item
                required
                label='收集方式'
                className='add-form-item'
                name='collecting_type'
                rules={[{required: true, message: '请选择收集方式'}]}>
                <Radio.Group direction='horizontal'>
                  <Radio value='考察'>考察</Radio>
                  <Radio value='征集'>征集</Radio>
                  <Radio value='引进'>引进</Radio>
                  <Radio value='创制'>创制</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                required
                label='种质来源'
                className='add-form-item'
                name='from_type'
                rules={[{required: true, message: '请选择种质来源'}]}>
                <Radio.Group direction='horizontal'>
                  <Radio value='境内'>境内</Radio>
                  <Radio value='境外'>境外</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                required
                label='来源国'
                className='add-form-item'
                name='laiyuan_guobie'
                rules={[{required: true, message: '请输入来源国家'}]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入来源国家'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                label='来源省（州、邦）'
                className='add-form-item'
                name='province'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入来源省（州、邦）'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                label='来源地'
                className='add-form-item'
                name='address'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入来源地'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                label='来源机构'
                className='add-form-item'
                name='from_org'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入来源机构'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                label='原产国'
                className='add-form-item'
                name='origin_country'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入原产国'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                label='收集地经度'
                className='add-form-item'
                name='origin_lng'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入收集地经度'
                  type='number'
                />
              </Form.Item>
              <Form.Item
                label='收集地纬度'
                className='add-form-item'
                name='origin_lat'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入收集地纬度'
                  type='number'
                />
              </Form.Item>
              <Form.Item
                label='收集地海拔'
                className='add-form-item'
                name='origin_elevation'>
                <Input
                  className='nut-input-text'
                  placeholder='请输入地海拔'
                  type='text'
                />
              </Form.Item>
              <Selection
                label='土壤类型'
                name='soil_type'
                placeholder='请选择土壤类型'
                options={soilType}
              />
              <Selection
                label='收集地生态类型'
                name='ecosystem_type'
                placeholder='请选择收集地生态类型'
                options={ecosystemType}
              />
              <Selection
                label='收集材料类型'
                name='collecting_material'
                placeholder='请选择收集材料类型'
                options={collectingMaterial}
              />

              <Form.Item
                required
                label='收集人'
                className='add-form-item'
                name='collecting_person'
                rules={[{required: true, message: '请输入收集人'}]}>
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
                name='collecting_company'
                rules={[{required: true, message: '请输入收集单位'}]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入收集单位'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                required
                label='收集时间(年份)'
                className='add-form-item'
                name='collecting_date'
                rules={[{required: true, message: '请输入收集时间'}]}>
                <Input
                  className='nut-input-text'
                  placeholder='请输入收集时间'
                  type='text'
                />
              </Form.Item>
              <Form.Item
                label='原生境图片'
                className='add-form-item'
                name='image'>
                <Uploader url='https://my-json-server.typicode.com/linrufeng/demo/posts' />
              </Form.Item>
              <Form.Item label='备注' className='add-form-item' name='note'>
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
