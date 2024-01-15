/** @format */

import {useCallback, useMemo} from 'react';
import {Table as AntdTable, Button} from 'antd';
import './index.scss';

const Table = ({data, setData}) => {
  const columnsStickRight = useMemo(
    () => [
      {
        title: '种质编号',
        key: 'name',
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
          return <Button type='text'>共享资源</Button>;
        },
      },
    ],
    []
  );

  const handleTableChange = useCallback(() => {}, []);

  return <AntdTable columns={columnsStickRight} dataSource={data} />;
};

export default Table;
