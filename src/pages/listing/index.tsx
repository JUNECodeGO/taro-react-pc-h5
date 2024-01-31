/** @format */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Tabs} from '@nutui/nutui-react-taro';

import BasicLayout from '@/components/BasicLayout';
import SideFilter from '@/components/SideFilter/index.h5';
import {isH5} from '@/common/utils';
import {useStore} from '@/store';
import {TableTabType} from '@/common/type';
import FilterPopup from '@/components/FilterPopup';

import './index.scss';
import TabPane from './components/tabpane';
import {getCategories, getSummarize} from '@/api/search';

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
      <Tabs
        onChange={handleChangeTab}
        value={currentTab}
        align='left'
        className='table'>
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
