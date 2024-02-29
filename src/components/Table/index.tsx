/** @format */

import React, {useCallback, useMemo, useState} from 'react';
import {View, Text} from '@tarojs/components';
import {Button, Table as NutiTable, Pagination} from '@nutui/nutui-react-taro';
import {ArrowSize6} from '@nutui/icons-react-taro';
import Navigator from '@/common/utils/navigator';

import './index.scss';
import {TableTabType} from '@/common/type';
import CTable from '../CTable';

const columns = {
  [TableTabType.ALL]: [
    {
      title: '作（植）物名称',
      key: 'germ_name',
      width: '100px',
    },
    {
      title: '种质名称',
      key: 'cate1',
      width: '100px',
    },
    {
      title: '科名',
      key: 'family',
      width: '100px',
    },
    {
      title: '属名或亚属名',
      key: 'genus',
      width: '100px',
    },
  ],
  [TableTabType.MINE]: [
    {
      title: '种质编号',
      key: 'name',
      align: 'cate_id',
      width: '110px',
    },
  ],
};
const Table = props => {
  const {data, handleTableChange, tab, disabledNext, disabledPre} = props;

  const handleJump = useCallback(id => {
    Navigator.navigateTo('main/apply', {
      id,
    });
  }, []);
  const handleJumpDetail = useCallback(id => {
    Navigator.navigateTo('main/detail', {
      id,
    });
  }, []);

  const columnsStickRight = useMemo(
    () => [
      {
        title: 'ID',
        key: 'base_id',
        align: 'center',
        width: '80px',

        render: data => {
          return (
            <Button
              fill='none'
              size='mini'
              onClick={() => handleJumpDetail(data?.base_id)}>
              {data?.base_id || '-'}
            </Button>
          );
        },
      },
      {
        title: '种质编号',
        key: 'enumber',
        align: 'center',
        width: '110px',
      },
      ...columns[tab],
      {
        title: '操作',
        key: 'action',
        width: '80px',

        render: data => {
          return (
            <Button
              fill='none'
              size='mini'
              onClick={() => handleJump(data?.base_id)}>
              共享资源
            </Button>
          );
        },
      },
    ],
    [tab]
  );

  const handleChange = useCallback(
    type => {
      let disabled = true;
      switch (type) {
        case 'next':
          disabled = disabledNext;
          break;
        default:
          disabled = disabledPre;
      }
      if (disabled) return;
      handleTableChange(type);
    },
    [disabledPre, disabledNext, handleTableChange]
  );
  return (
    <View className='table-wrapper'>
      <View className='home-table'>
        <CTable
          columns={columnsStickRight}
          data={data}
          style={{height: 350}}
          className='table'
        />
        <View className='pagination'>
          <ArrowSize6
            size={12}
            className={`pre ${disabledPre ? 'grey' : ''}`}
            onClick={() => handleChange('pre')}
          />
          <View className='line' />
          <ArrowSize6
            size={12}
            className={`next ${disabledNext ? 'grey' : ''}`}
            data-type='next'
            onClick={() => handleChange('next')}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Table);
