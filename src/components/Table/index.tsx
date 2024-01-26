/** @format */

import React, {useCallback, useMemo, useState} from 'react';
import {View} from '@tarojs/components';
import {Button, Table as NutiTable} from '@nutui/nutui-react-taro';
import {ArrowSize6} from '@nutui/icons-react-taro';
import Navigator from '@/common/utils/navigator';

import './index.scss';
import {TableTabType} from '@/common/type';

const columns = {
  [TableTabType.ALL]: [
    {
      title: '种质编号',
      key: 'cate_id',
      align: 'center',
      width: 80,
    },
    {
      title: '作（植）物名称',
      key: 'cate_name',
      width: 110,
    },
    {
      title: '种质名称',
      key: 'cate_name_cn',
      width: 80,
    },
    {
      title: '科名',
      key: 'latin_name',
      width: 80,
    },
    {
      title: '属名或亚属名',
      key: 'species',
      width: 100,
    },
  ],
  [TableTabType.MINE]: [
    {
      title: '种质编号',
      key: 'name',
      align: 'cate_id',
      width: 80,
    },
  ],
};
const Table = props => {
  const {data, setData, tab} = props;

  const [pagination, setPagaination] = useState({
    current: 1,
    pageSize: 10,
  });
  const handleJump = useCallback(() => {
    Navigator.navigateTo('main/apply');
  }, []);

  const columnsStickRight = useMemo(
    () => [
      ...columns[tab],
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
    [tab]
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
