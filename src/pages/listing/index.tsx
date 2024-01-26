/** @format */
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Tabs, Form} from '@nutui/nutui-react-taro';
import Table from '@/components/Table';
import Filter, {FilterForm} from '@/components/Filter';
import BasicLayout from '@/components/BasicLayout';
import SideFilter from '@/components/SideFilter/index.h5';
import {isH5} from '@/common/utils';
import {useStore} from '@/store';
import {TableTabType} from '@/common/type';
import FilterPopup from '@/components/FilterPopup';
import {searchListAll, searchListMine} from '@/api/search';
import Taro from '@tarojs/taro';

import './index.scss';

const TabPane = React.memo(
  React.forwardRef(
    (props: {tab: TableTabType; changePopupVisible: () => void}, ref) => {
      const {tab, changePopupVisible} = props;
      const [data, setData] = useState([]);
      const [filter, setFilter] = useState([]);
      const [form] = Form.useForm();
      const handleSearch = useCallback(values => {
        console.log(values, '+++');
        fetchList(values);
      }, []);

      const [pageParams, setPageParams] = useState({
        current: 1,
        pageSize: 5,
        total: 0,
      });

      const fetchList = useCallback(async (params = {}) => {
        try {
          Taro.showLoading();
          const {pageSize} = pageParams;
          const fn = tab === TableTabType.ALL ? searchListAll : searchListMine;
          const res = await fn({
            page_num: 1,
            page_size: pageSize,
            ...params,
          });

          if (res && !res.code) {
            const {List = [], total} = res.data || {};
            setData(List);
            setPageParams(pre => ({...pre, total}));
          }
        } catch (error) {
        } finally {
          Taro.hideLoading();
        }
      }, []);

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
            filters={filter}
          />
          <FilterForm
            tab={tab}
            changePopupVisible={changePopupVisible}
            form={form}
            handleSearch={handleSearch}
          />
          <Table data={data} setData={setData} tab={tab} />
        </>
      );
    }
  )
);

const Listing = () => {
  const {
    useUserStore: {userInfo},
  } = useStore();
  const popRef = useRef();
  const [currentTab, setCurrentTab] = useState(TableTabType.ALL);

  const tabPaneRefs = useRef({
    [TableTabType.ALL]: React.createRef(),
    [TableTabType.MINE]: React.createRef(),
  });

  const tabList = useMemo(() => {
    const tabs = [
      {
        key: TableTabType.ALL,
        title: '所有',
      },
    ];
    if (userInfo) {
      tabs.push({
        key: TableTabType.MINE,
        title: '我的',
      });
    }
    return tabs;
  }, [userInfo]);

  const handleChangeTab = useCallback(val => {
    setCurrentTab(val);
  }, []);

  const handleSearch = useCallback(selection => {
    const tab = tabPaneRefs.current?.[currentTab];
    // if (tab.current && tab.current) {
    //   tab.current?.handleSearch(selection);
    // }
  }, []);

  const handlePopupVisible = useCallback(() => {
    if (popRef.current && popRef.current.handleClose)
      popRef.current.handleClose();
  }, []);

  return (
    <BasicLayout
      title='资源列表'
      className='listing-container'
      leftSlot={
        isH5 ? (
          <SideFilter handleSearch={handleSearch} tab={currentTab} />
        ) : null
      }>
      <Tabs onChange={handleChangeTab} value={currentTab} align='left'>
        {tabList.map(item => (
          <Tabs.TabPane title={item.title} key={item.key}>
            <TabPane
              tab={item.key}
              ref={tabPaneRefs[item.key]}
              changePopupVisible={handlePopupVisible}
            />
          </Tabs.TabPane>
        ))}
      </Tabs>
      <FilterPopup ref={popRef} tab={currentTab} handelSave={handleSearch} />
    </BasicLayout>
  );
};

export default Listing;
