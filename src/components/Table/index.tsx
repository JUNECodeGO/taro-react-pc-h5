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

  const handleJump = useCallback(data => {
    Navigator.navigateTo('main/apply', data);
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
        width: '20%',
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
        width: '30%',
        render: data => {
          return <Text>{data.enumber ? data.enumber : '未入圃（库)'}</Text>;
        },
      },
      {
        title: '作（植）物名称',
        key: 'germ_name',
        width: '30%',
      },
      {
        title: '种质名称',
        key: 'cate1',
        width: '20%',
      },
      {
        title: '科名',
        key: 'family',
        width: '20%',
      },
      {
        title: '属名或亚属名',
        key: 'genus',
        width: '30%',
      },
      {
        title: '操作',
        key: 'action',
        width: '30%',
        render: data => {
          return (
            <Button
              fill='none'
              size='mini'
              onClick={() =>
                handleJump({id: data?.base_id, name: data?.germ_name})
              }>
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
