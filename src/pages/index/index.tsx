/** @format */

import {View} from '@tarojs/components';
import Header from '@/components/Header';
import {Add} from '@nutui/icons-react-taro';
import {useCallback, useMemo, useState} from 'react';
import {Button, Pagination, Table} from '@nutui/nutui-react-taro';
import Filter from '@/components/Filter';
import './index.scss';

const Home = () => {
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
    <View className='home'>
      <Header title='首页' />
      <Filter />
      <Table columns={columnsStickRight} data={data6} className='home-table' />
      <Pagination
        value={1}
        total={12}
        pageSize={1}
        mode='simple'
        onChange={handleTableChange}
      />
      <View className='home-create-button'>
        <Add size='24' />
      </View>
    </View>
  );
};
export default Home;
