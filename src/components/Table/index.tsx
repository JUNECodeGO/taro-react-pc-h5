/** @format */

import {Button, Pagination, Table as NutiTable} from '@nutui/nutui-react-taro';
import {useCallback, useMemo, useState} from 'react';
import {View} from '@tarojs/components';
import {ArrowSize6} from '@nutui/icons-react-taro';
import './index.scss';

const Table = () => {
  const [data6, setData6] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      sex: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      sex: '男',
      record: '幼儿园',
      birthday: '2020-01-01',
      age: 3,
    },
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      sex: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      sex: '男',
      record: '幼儿园',
      birthday: '2020-01-01',
      age: 3,
    },
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      sex: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      sex: '男',
      record: '幼儿园',
      birthday: '2020-01-01',
      age: 3,
    },
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      birthday: '2010-01-01',
      age: 10,
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      birthday: '2000-01-01',
      age: 30,
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      birthday: '2020-01-01',
      age: 4,
    },
    {
      name: 'Sara',
      sex: '女',
      record: '高中',
      birthday: '2020-01-01',
      age: 6,
    },
    {
      name: 'Frank',
      sex: '男',
      record: '幼儿园',
      birthday: '2020-01-01',
      age: 3,
    },
  ]);

  const columnsStickRight = useMemo(
    () => [
      {
        title: '姓名',
        key: 'name',
        align: 'center',
        width: 100,
      },
      {
        title: '性别',
        key: 'sex',
        width: 60,
      },
      {
        title: '学历',
        key: 'record',
        width: 100,
      },
      {
        title: '生日',
        key: 'birthday',
        width: 100,
      },
      {
        title: '年龄',
        key: 'age',
        fixed: 'right',
        width: 100,
        render: () => {
          return (
            <Button fill='none' size='mini'>
              共享资源
            </Button>
          );
        },
      },
    ],
    []
  );

  const handleTableChange = useCallback(() => {}, []);

  return (
    <View className='table-wrapper'>
      <NutiTable
        columns={columnsStickRight}
        data={data6}
        className='home-table'
        style={{height: 350}}
      />
      <div className='pagination'>
        <ArrowSize6 size={12} className='pre' color='grey' />
        <ArrowSize6 size={12} className='next' />
      </div>
    </View>
  );
};

export default Table;
