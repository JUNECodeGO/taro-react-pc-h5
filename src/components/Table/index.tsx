/** @format */

import React, {useCallback, useMemo} from 'react';
import {View, Text} from '@tarojs/components';
import {Button} from '@nutui/nutui-react-taro';
import Navigator from '@/common/utils/navigator';
import {TableTabType} from '@/common/type';
import CTable from '../CTable';

import './index.scss';

const Table = props => {
  const {data, tab, ...rest} = props;

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
        renter: data => {
          console.log(data.enumber, '+++');
          return <Text>{data.enumber ? data.enumber : '未入圃（库)'}</Text>;
        },
      },
      {
        title: '作（植）物名称',
        key: 'germ_name',
        width: '120px',
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

  return (
    <View className='table-wrapper'>
      <View className='home-table'>
        <CTable
          columns={columnsStickRight}
          data={data}
          style={{minHeight: tab === TableTabType.MINE ? 200 : 350}}
          className='table'
          {...rest}
        />
      </View>
    </View>
  );
};

export default React.memo(Table);
