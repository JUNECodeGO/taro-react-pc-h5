/** @format */
import {searchShareList} from '@/api/search';
import CTable from '@/components/CTable';
import Taro from '@tarojs/taro';
import {useCallback, useEffect, useState} from 'react';

const columnsStickRight = [
  {
    title: '圃编号',
    key: 'id',
    width: '70px',
  },
  {
    title: '作物名称',
    key: 'zuowuname',
    width: '80px',
  },
  {
    title: '所属单位',
    key: 'ownercompany',
    width: '100px',
  },
  {
    title: '提供时间',
    key: 'tgtime',
    width: '100px',
  },
  {
    title: '提供数量',
    key: 'tgnum',
    width: '60px',
  },
  {
    title: '提供形态',
    key: 'tgwzxt',
    width: '100px',
  },
  {
    title: '利用单位',
    key: 'usecompany',
    width: '100px',
  },
  {
    title: '联系电话',
    key: 'mobile',
    width: '100px',
  },
  {
    title: '邮箱',
    key: 'email',
    width: '100px',
  },
  {
    title: '地址',
    key: 'address',
    width: '100px',
  },
  {
    title: '利用目的',
    key: 'usepurpose',
    width: '100px',
  },
  {
    title: '利用材料',
    key: 'usematerial',
    width: '100px',
  },
  {
    title: '审核状态',
    key: 'status',
    width: '60px',
  },
  {
    title: '操作',
    key: 'genus',
    width: '60px',
  },
];

export default () => {
  const [data, setData] = useState([]);
  const [pageParams, setPageParams] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
  });

  const fetchShareList = useCallback(async (params?: any) => {
    try {
      Taro.showLoading();
      const {current = 1} = params || {};
      const {data = {}} = (await searchShareList({page_num: current})) || {};
      const {lists = [], counts} = data;
      setData(lists);
      setPageParams(pre => ({...pre, current, total: +counts}));
    } catch (error) {
    } finally {
      Taro.hideLoading();
    }
  }, []);

  const handleTableChange = useCallback(
    type => {
      try {
        let current = pageParams.current;
        switch (type) {
          case 'next':
            current++;
            break;
          default:
            current--;
        }
        fetchShareList({current});
      } catch (error) {}
    },
    [pageParams]
  );

  useEffect(() => {
    fetchShareList();
  }, []);

  return (
    <CTable
      columns={columnsStickRight}
      className='share-table'
      data={data}
      style={{minHeight: 200}}
      handleTableChange={handleTableChange}
      pageParams={pageParams}
    />
  );
};
