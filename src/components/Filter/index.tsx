/** @format */

import {
  Button,
  Collapse,
  Form,
  Input,
  Popup,
  Radio,
} from '@nutui/nutui-react-taro';
import {
  Search,
  MaskClose,
  Del,
  Close,
  ArrowUp,
  ArrowUp2,
  More,
  Add,
} from '@nutui/icons-react-taro';
import {useCallback, useRef, useState} from 'react';
import {Text, View} from '@tarojs/components';
import {FilterCategory} from './constants';

import './index.scss';
import Taro from '@tarojs/taro';

const CheckItem = ({label, value}) => {
  return (
    <View key={value} className='check-item'>
      <Text className='check-item-text'>{label}</Text>
      <MaskClose color='#6f7473' />
    </View>
  );
};

const Filter = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selection, setSelection] = useState([]);

  const changePopupVisible = useCallback(e => {
    setVisible(pre => !pre);
    e?.stopPropagation();
  }, []);

  const handleSearch = useCallback(e => {
    e?.stopPropagation();
  }, []);

  const handleAdd = useCallback(() => {
    Taro.navigateTo({
      url: '/add',
    });
  }, []);
  return (
    <View className='filter-wrapper result'>
      <View className='result-wrapper'>
        <View>
          <Text className='result-total'>12 条</Text>
          <Text className='result-text'>搜索结果</Text>
        </View>
        <View>
          <Button
            type='primary'
            icon={<Search color='#fff' />}
            onClick={handleSearch}
          />
          <Button icon={<Add />} style={{marginLeft: 8}} onClick={handleAdd}>
            新增资源
          </Button>
        </View>
      </View>

      {selection.length ? (
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
          <More size={24} className='more' onClick={changePopupVisible} />
        </View>
      </Form>

      <Popup
        visible={visible}
        className='popup-filter'
        position='bottom'
        onClose={changePopupVisible}
        ref={ref}>
        <View className='popup-filter-content'>
          <View className='popup-filter-title'>
            <Close />
            <Text>搜索过滤</Text>
            <Button type='primary' size='small'>
              保存
            </Button>
          </View>
          <Collapse defaultActiveName={['category']}>
            {FilterCategory.map(filter => (
              <Collapse.Item
                key={filter.name}
                title={filter.title}
                name={filter.name}
                expandIcon={<ArrowUp2 size='16' />}>
                <Radio.Group className='radio-wrapper'>
                  {filter.items.map(item => (
                    <Radio value={item.label} key={item.label}>
                      {item.label}
                    </Radio>
                  ))}
                </Radio.Group>
              </Collapse.Item>
            ))}
          </Collapse>
        </View>
      </Popup>
    </View>
  );
};
export default Filter;
