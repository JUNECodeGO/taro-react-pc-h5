/** @format */

import React, {useCallback, useMemo, useState} from 'react';
import {View} from '@tarojs/components';
import {Button, Table as NutiTable} from '@nutui/nutui-react-taro';
import {ArrowSize6} from '@nutui/icons-react-taro';
import Navigator from '@/common/utils/navigator';

import './index.scss';

const Table = ({data, setData}) => {
  const [pagination, setPagaination] = useState({
    current: 1,
    pageSize: 10,
  });
  const handleJump = useCallback(() => {
    Navigator.navigateTo('main/apply');
  }, []);

  const columnsStickRight = useMemo(
    () => [
      {
        title: '种质编号',
        key: 'name',
        align: 'center',
        width: 80,
      },
      {
        title: '作（植）物名称',
        key: 'sex',
        width: 110,
      },
      {
        title: '种质名称',
        key: 'record',
        width: 80,
      },
      {
        title: '科名',
        key: 'birthday',
        width: 80,
      },
      {
        title: '属名或亚属名',
        key: 'birthday',
        width: 100,
      },
      {
        title: '操作',
        key: 'age',
        fixed: 'right',
        width: 80,
        render: () => {
          return (
            <Button fill='none' size='mini' onClick={handleJump}>
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
      <View className='home-table'>
        <NutiTable
          columns={columnsStickRight}
          data={data}
          style={{height: 350}}
        />
        <View className='pagination'>
          <ArrowSize6 size={12} className='pre' color='grey' />
          <ArrowSize6 size={12} className='next' />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Table);
