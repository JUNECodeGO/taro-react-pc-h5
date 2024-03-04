/** @format */

import BasicLayout from '@/components/BasicLayout';
import {Swiper} from '@nutui/nutui-react-taro';
import {View, Text} from '@tarojs/components';
import {Form, Button, Input} from '@nutui/nutui-react-taro';

import {useCallback} from 'react';

import './index.scss';

const Search = () => {
  const [form] = Form.useForm();
  const list = Array.from({length: 4});

  const handleSearch = useCallback(() => {}, []);

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
      <View className='wrapper'>
        <Swiper
          // height={220}
          direction='horizontal'
          loop={false}
          indicator={true}
          display-multiple-items={list.length}>
          {list.map((_, index) => {
            return <Swiper.Item key={index} className='temp-content' />;
          })}
        </Swiper>
      </View>
      <View className='wrapper shadow'>
        <View className='wrapper-item'>
          <Text>粮食作物</Text>
        </View>
        <View className='wrapper-list'>
          {list.map((_, index) => {
            return (
              <View key={index} className='card'>
                <View className='card-pic' />
                <Text>番薯</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View className='wrapper shadow'>
        <View className='wrapper-item'>
          <Text>果树</Text>
        </View>
        <View className='wrapper-list'>
          {list.map((_, index) => {
            return (
              <View key={index} className='card'>
                <View className='card-pic' />
                <View className='card-text'>
                  <Text>番薯</Text>
                  <Text>详情</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </BasicLayout>
  );
};

export default Search;
