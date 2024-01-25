/** @format */
import React, {useCallback} from 'react';
import {Text, View} from '@tarojs/components';
import {Button, Form, Input} from '@nutui/nutui-react-taro';
import {Search, MaskClose, Del, More, Add} from '@nutui/icons-react-taro';

import Navigator from '@/common/utils/navigator';
import {TableTabType} from '@/common/type';

import './index.scss';

const CheckItem = ({label, value}) => {
  return (
    <View key={value} className='check-item'>
      <Text className='check-item-text'>{label}</Text>
      <MaskClose color='#6f7473' />
    </View>
  );
};

const Filter = ({
  handleSearch,
  total,
  tab,
  className = '',
  changePopupVisible,
  filters,
}) => {
  const handleAdd = useCallback(() => {
    Navigator.redirectTo('main/add');
  }, []);

  return (
    <View className={`filter-wrapper ${className}`}>
      <View className='result-wrapper'>
        {tab !== TableTabType.SUB && (
          <View>
            <Text className='result-total'>{`${total} 条`}</Text>
            <Text className='result-text'>搜索结果</Text>
          </View>
        )}

        <View>
          <Button
            type='primary'
            icon={<Search color='#fff' />}
            onClick={handleSearch}
          />
          {tab === TableTabType.MINE && (
            <Button icon={<Add />} style={{marginLeft: 8}} onClick={handleAdd}>
              新增资源
            </Button>
          )}
        </View>
      </View>

      {filters.length ? (
        <View className='checked-wrapper'>
          <View className='checked-wrapper-inner'>
            <Text>筛选：</Text>
            <CheckItem label='广东省' value='123' />
            <CheckItem label='黑龙江省' value='12355' />
          </View>

          <Del className='delete-icon' />
        </View>
      ) : null}

      <Form labelPosition='left' className='form'>
        <Form.Item label='名称' name='username'>
          <Input
            className='nut-input-text'
            placeholder='请输入字段A'
            type='text'
            clearable
          />
        </Form.Item>
        <Form.Item label='特性' name='username'>
          <Input
            className='nut-input-text'
            placeholder='请输入字段A'
            type='text'
            clearable
          />
        </Form.Item>
        <Form.Item label='用途' name='username'>
          <Input
            className='nut-input-text'
            placeholder='请输入字段A'
            type='text'
            clearable
          />
        </Form.Item>
        <View className='last-form'>
          <Form.Item label='描述' name='username'>
            <Input
              className='nut-input-text'
              placeholder='请输入字段A'
              type='text'
              clearable
            />
          </Form.Item>
          {tab !== TableTabType.SUB && (
            <More size={24} className='more' onClick={changePopupVisible} />
          )}
        </View>
      </Form>
    </View>
  );
};
export default React.memo(Filter);
