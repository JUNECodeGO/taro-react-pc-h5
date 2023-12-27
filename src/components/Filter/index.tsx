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
import {View} from '@tarojs/components';
import './index.scss';

const list = [];

const CheckItem = ({label, value}) => {
  return (
    <div key={value} className='check-item'>
      {label}
      <MaskClose color='#6f7473' />
    </div>
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
            <div>
              <span>资源检索</span>
              <span className='search-icon'>
                <Search size='16' color='#fff' />
              </span>
            </div>
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
        <span>12 条</span>
        <span className='text'>搜索结果</span>
      </View>
      <View className='checked-wrapper'>
        <span>筛选：</span>
        <CheckItem label='广东省' value='123' />
        <CheckItem label='黑龙江省' value='12355' />

        <Del className='delete-icon' />
      </View>
    </View>
  );
};
export default Filter;
