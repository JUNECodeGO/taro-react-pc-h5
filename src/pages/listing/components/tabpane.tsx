/** @format */
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import {searchListAll, searchListMine} from '@/api/search';
import Taro from '@tarojs/taro';
import Table from '@/components/Table';
import Filter, {FilterForm} from '@/components/Filter';
import {Form} from '@nutui/nutui-react-taro';
import {TableTabType} from '@/common/type';
import {CommonOption} from '@/api/search/dto';

interface TabPaneProps {
  tab: TableTabType;
  changePopupVisible: (e: any) => void;
  selectedOption: CommonOption | null;
  handleClean?: () => void;
}
const TabPane = React.memo(
  React.forwardRef((props: TabPaneProps, ref) => {
    const {tab, changePopupVisible, selectedOption, handleClean} = props;
    const [data, setData] = useState([]);
    const [form] = Form.useForm();
    const currentFilterParams = useRef({});

    const [pageParams, setPageParams] = useState({
      current: 1,
      pageSize: 5,
      total: 0,
    });

    const disabledNext = useMemo(() => {
      const {current, pageSize, total} = pageParams;
      return current * pageSize < total;
    }, [pageParams]);

    const fetchList = useCallback(
      async (params?: any) => {
        try {
          Taro.showLoading();
          const {current = 1, ...rest} = params || {};
          const {pageSize} = pageParams;
          const fn = tab === TableTabType.ALL ? searchListAll : searchListMine;
          const res = await fn({
            page_num: current,
            page_size: pageSize,
            ...rest,
          });

          if (res && !res.code) {
            const {content} = res.data || {};
            const {lists = [], counts} = content || {};
            setData(lists);
            setPageParams(pre => ({...pre, ...params, total: +counts}));
          }
        } catch (error) {
        } finally {
          Taro.hideLoading();
        }
      },
      [tab, pageParams]
    );

    const handleSearch = useCallback(
      values => {
        const allValues = {...currentFilterParams.current, ...values};
        fetchList(allValues);
        currentFilterParams.current = values;
      },
      [fetchList]
    );

    const handleRemoveSelection = useCallback(() => {
      handleClean?.();
      fetchList({type_id: undefined, ...currentFilterParams.current});
    }, [handleClean, fetchList]);

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
          fetchList({current, ...currentFilterParams.current});
        } catch (error) {}
      },
      [pageParams, fetchList]
    );

    useEffect(() => {
      fetchList();
    }, []);

    useImperativeHandle(ref, () => ({
      handleSearch: handleSearch,
    }));

    return (
      <>
        <Filter
          handleSubmit={() => {
            form.submit();
          }}
          total={pageParams.total}
          tab={tab}
          selectedOption={selectedOption}
          handleClean={handleRemoveSelection}
        />
        <FilterForm
          tab={tab}
          changePopupVisible={changePopupVisible}
          form={form}
          handleSearch={handleSearch}
        />
        <Table
          data={data}
          setData={setData}
          tab={tab}
          handleTableChange={handleTableChange}
          disabledPre={pageParams.current === 1}
          disabledNext={!disabledNext}
        />
      </>
    );
  })
);

export default TabPane;
