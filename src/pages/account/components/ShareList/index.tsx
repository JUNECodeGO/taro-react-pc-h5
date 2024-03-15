/** @format */
import CTable from '@/components/CTable';
import {useCallback} from 'react';
import {Text} from '@tarojs/components';
import {ShareStatus} from '@/api/search/dto';

const statusTextMap = {
  [ShareStatus.notYet]: '未审核',
  [ShareStatus.approved]: '通过',
  [ShareStatus.rejected]: '未通过',
  [ShareStatus.send]: '已邮寄',
  [ShareStatus.rejectDelivery]: '拒绝邮寄',
};
const columnsStickRight = [
  {
    title: '圃编号',
    key: 'id',
    width: '10%',
  },
  {
    title: '作物名称',
    key: 'zuowuname',
    width: '20%',
  },
  {
    title: '所属单位',
    key: 'ownercompany',
    width: '20%',
  },
  {
    title: '提供时间',
    key: 'tgtime',
    width: '10%',
  },
  {
    title: '提供数量',
    key: 'tgnum',
    width: '10%',
  },
  {
    title: '提供形态',
    key: 'tgwzxt',
    width: '10%',
  },
  {
    title: '利用单位',
    key: 'usecompany',
    width: '10%',
  },
  {
    title: '联系电话',
    key: 'mobile',
    width: '10%',
  },
  {
    title: '邮箱',
    key: 'email',
    width: '10%',
  },
  {
    title: '地址',
    key: 'address',
    width: '10%',
  },
  {
    title: '利用目的',
    key: 'usepurpose',
    width: '10%',
  },
  {
    title: '利用材料',
    key: 'usematerial',
    width: '10%',
  },
  {
    title: '审核状态',
    key: 'status',
    width: '10%',
    render: data => {
      return <Text>{statusTextMap[data.status] || '-'}</Text>;
    },
  },
];

export default ({fetchShareList, pageParams, data}) => {
  const handleTableChange = useCallback(
    props => {
      fetchShareList(props);
    },
    [pageParams]
  );

  return (
    <CTable
      columns={columnsStickRight}
      data={data}
      style={{minHeight: 200}}
      handleTableChange={handleTableChange}
      pageParams={pageParams}
    />
  );
};
