/** @format */

import {
  Collapse,
  Form,
  Input,
  SideNavBar,
  SubSideNavBar,
  Checkbox,
} from '@nutui/nutui-react-taro';
import {
  Search,
  Checklist,
  ArrowDown,
  MaskClose,
  Filter as FilterIcon,
  Del,
} from '@nutui/icons-react-taro';
import {useState} from 'react';
import {Text, View} from '@tarojs/components';
import './index.scss';

const list = [];

const CheckItem = ({label, value}) => {
  return (
    <View key={value} className='check-item'>
      <Text className='text'>{label}</Text>
      <MaskClose color='#6f7473' />
    </View>
  );
};

const Filter = () => {
  const [visible, setVisible] = useState(false);
  const changeNarBar = () => {
    setVisible(pre => !pre);
  };
  return (
    <View className='filter-wrapper'>
      <Collapse defaultActiveName={['1']}>
        <Collapse.Item
          title={
            <View className='filter-left'>
              <Text>资源检索</Text>
              <View className='search-icon'>
                <Search size='16' color='#fff' />
              </View>
            </View>
          }
          extra={<FilterIcon size='16' />}
          expandIcon={<ArrowDown size='16' />}
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
        <Text>12 条</Text>
        <Text className='text'>搜索结果</Text>
        <View className='checked-wrapper'>
          <Text>筛选：</Text>
          <CheckItem label='广东省' value='123' />
          <CheckItem label='黑龙江省' value='12355' />
          <Del className='delete-icon' />
        </View>
      </View>
    </View>
  );
};
export default Filter;
