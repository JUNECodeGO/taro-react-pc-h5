/** @format */
import React, {useCallback, useMemo} from 'react';
import {Text, View} from '@tarojs/components';
import {Form, Button, Input} from '@nutui/nutui-react-taro';
import {Search, MaskClose, Del, More, Add} from '@nutui/icons-react-taro';
import Navigator from '@/common/utils/navigator';
import {TableTabType} from '@/common/type';
import {FormInstance} from '@nutui/nutui-react-taro/dist/types/packages/form/types';
import {GroupType} from '../SideFilter/constants';

import './index.scss';

const CheckItem = ({label, value}) => {
  return (
    <View key={value} className='check-item'>
      <Text className='check-item-text'>{`${GroupType[label]}: ${value}`}</Text>
      <MaskClose color='#6f7473' />
    </View>
  );
};

interface FilterFormProps {
  form: FormInstance<any>;
  tab: TableTabType;
  handleSearch: (values: any) => void;
  changePopupVisible: (e: any) => void;
}

export const FilterForm = React.memo((props: FilterFormProps) => {
  const {form, tab, handleSearch, changePopupVisible} = props;

  return (
    <Form
      labelPosition='left'
      className='filter-form'
      form={form}
      onFinish={handleSearch}>
      <Form.Item label='名称' name='name'>
        <Input
          className='nut-input-text'
          placeholder='请输入名称'
          type='text'
          clearable
        />
      </Form.Item>
      <Form.Item label='特性' name='feature'>
        <Input
          className='nut-input-text'
          placeholder='请输入特性'
          type='text'
          clearable
        />
      </Form.Item>
      <Form.Item label='用途' name='usage'>
        <Input
          className='nut-input-text'
          placeholder='请输入用途'
          type='text'
          clearable
        />
      </Form.Item>
      <View className='last-form'>
        <Form.Item label='描述' name='keywords'>
          <Input
            className='nut-input-text'
            placeholder='请输入描述'
            type='text'
            clearable
          />
        </Form.Item>
        {tab !== TableTabType.SUB && (
          <More size={24} className='more' onClick={changePopupVisible} />
        )}
      </View>
    </Form>
  );
});

interface FilterProps {
  total: number;
  tab: TableTabType;
  className?: string;
  handleSubmit: () => void;
  selectedOption: string | null;
  handleClean?: () => void;
}

const Filter = (props: FilterProps) => {
  const {
    total,
    tab,
    className = '',
    handleSubmit,
    selectedOption,
    handleClean,
  } = props;

  const selected = useMemo(() => {
    if (selectedOption && typeof selectedOption === 'string') {
      return selectedOption.split('--');
    }
  }, [selectedOption]);

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
            onClick={handleSubmit}
          />
          {tab === TableTabType.MINE && (
            <Button icon={<Add />} style={{marginLeft: 8}} onClick={handleAdd}>
              新增资源
            </Button>
          )}
        </View>
      </View>

      {selected ? (
        <View className='checked-wrapper'>
          <View className='checked-wrapper-inner'>
            <Text>筛选：</Text>
            <CheckItem label={selected[0]} value={selected[1]} />
          </View>

          <Del className='delete-icon' onClick={handleClean} />
        </View>
      ) : null}
    </View>
  );
};
export default React.memo(Filter);
