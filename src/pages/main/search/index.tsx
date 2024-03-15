/** @format */
import {useCallback, useEffect, useState} from 'react';
import BasicLayout from '@/components/BasicLayout';
import {View, Text} from '@tarojs/components';
import {Form, Button, Input} from '@nutui/nutui-react-taro';

import Navigator from '@/common/utils/navigator';
import {getCateInfo} from '@/api/search';
import Taro from '@tarojs/taro';
import './index.scss';

const whiteList = ['11112710000', '11112702000'];
const Search = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<any>([]);
  const [list, setList] = useState<any>([]);

  const handleSearch = useCallback(values => {
    Navigator.navigateTo('listing', values);
  }, []);

  const getSelectInfos = useCallback(async () => {
    try {
      Taro.showLoading();
      const {cate = []} = (await getCateInfo()) || {};
      Taro.hideLoading();
      const target: any = [];
      cate.forEach(element => {
        const {cate_id, cate_name_cn, sub_cate} = element || {};
        if (whiteList.includes(cate_id)) {
          target.push({
            cate_id,
            cate_name_cn,
            sub_cate,
          });
        }
      });
      setList(cate);
      setData(target);
    } catch (error) {
    } finally {
    }
  }, []);

  const handleJump = useCallback(val => {
    Navigator.navigateTo('listing', {name: val});
  }, []);

  useEffect(() => {
    getSelectInfos();
  }, []);
  return (
    <BasicLayout className='search-container'>
      <View className='filter'>
        <Form
          labelPosition='left'
          className='filter-form'
          form={form}
          onFinish={handleSearch}
          footer={
            <View className='filter-footer'>
              <Button style={{marginRight: '10px'}} formType='reset'>
                重置
              </Button>
              <Button type='primary' formType='submit'>
                搜索
              </Button>
            </View>
          }>
          <Form.Item label='名称' name='name'>
            <Input
              className='nut-input-text'
              placeholder='请输入名称'
              type='text'
            />
          </Form.Item>
          <Form.Item label='特性' name='feature'>
            <Input
              className='nut-input-text'
              placeholder='请输入特性'
              type='text'
            />
          </Form.Item>
          <Form.Item label='用途' name='usage'>
            <Input
              className='nut-input-text'
              placeholder='请输入用途'
              type='text'
            />
          </Form.Item>

          <Form.Item label='描述' name='keywords'>
            <Input
              className='nut-input-text'
              placeholder='请输入描述'
              type='text'
            />
          </Form.Item>
        </Form>
      </View>
      <View className='wrapper-swiper'>
        <View className='wrapper-swiper-inner'>
          {list.map(target => {
            return <View key={target.cate_id} className='content' />;
          })}
        </View>
      </View>
      {data.map(item => (
        <View className='wrapper shadow' key={item.cate_id}>
          <View className='wrapper-item'>
            <Text>{item.cate_name_cn}</Text>
          </View>
          <View className='wrapper-list'>
            {item.sub_cate.slice(0, 5).map(sub_cate => {
              return (
                <View key={sub_cate.cate_id} className='card'>
                  <View className='card-pic' />
                  <View className='card-text'>
                    <Text className='card-text-name'>
                      {sub_cate.cate_name_cn}
                    </Text>
                    <Text
                      onClick={() => handleJump(sub_cate.cate_name_cn)}
                      style={{cursor: 'pointer'}}>
                      详情
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </BasicLayout>
  );
};

export default Search;
