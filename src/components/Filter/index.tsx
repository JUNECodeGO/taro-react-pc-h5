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
} from '@nutui/icons-react-taro';
import {useCallback, useRef, useState} from 'react';
import {Text, View} from '@tarojs/components';
import {FilterCategory} from './constants';

import './index.scss';

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

  return (
    <View className='filter-wrapper'>
      <Collapse defaultActiveName={['1']}>
        <Collapse.Item
          // title="资源检索"
          extra={
            <View className='filter-left'>
              <Button size='mini' onClick={changePopupVisible}>
                更多检索
              </Button>
              <View className='search-icon' onClick={handleSearch}>
                <Search size='16' color='#fff' />
              </View>
            </View>
          }
          expandIcon={<ArrowUp size='16' />}
          name='1'>
          <Form divider labelPosition='left'>
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
            <Form.Item label='描述' name='username'>
              <Input
                className='nut-input-text'
                placeholder='请输入字段A'
                type='text'
                clearable
              />
            </Form.Item>
          </Form>
        </Collapse.Item>
      </Collapse>
      <View className='result'>
        <Text className='result-total'>12条</Text>
        <Text className='result-text'>搜索结果</Text>
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
      </View>
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
