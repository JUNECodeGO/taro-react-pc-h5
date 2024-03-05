/** @format */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Tabs} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import SideFilter from '@/components/SideFilter';
import {observer, useStore} from '@/store';
import {TableTabType} from '@/common/type';
import FilterPopup from '@/components/FilterPopup';
import TabPane from './components/tabpane';
import {getGroupByItems} from '@/api/search';
import {UserRole} from '@/api/user/dto';

import './index.scss';

const Listing = () => {
  const {
    useUserStore: {userInfo, role},
  } = useStore();

  // pane
  const tabPaneRefs = useRef({
    [TableTabType.ALL]: React.createRef(),
    [TableTabType.MINE]: React.createRef(),
  });
  const filterRef = useRef<any>();
  const filterH5Ref = useRef<any>();
  const [currentTab, setCurrentTab] = useState(TableTabType.ALL);
  const [groupItems, setGroupItems] = useState();
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>();
  const tabList = useMemo(() => {
    const tabs = [
      {
        key: TableTabType.ALL,
        title: '所有',
      },
    ];

    if (userInfo && role === UserRole.TOP) {
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

  const handleSearch = useCallback(
    val => {
      let kv;
      if (!val) {
        setSelectedOption(undefined);
      } else {
        setSelectedOption(val);
        kv = val.split('--');
      }
      const tab = tabPaneRefs.current?.[currentTab];
      if (tab.current) {
        tab.current?.handleSearch({
          ...(kv ? {[kv[0]]: kv[1]} : {cleanSelect: true}),
        });
      }
    },
    [currentTab]
  );

  const changePopupVisible = useCallback(e => {
    setVisible(pre => !pre);
    e?.stopPropagation();
  }, []);

  const handleClean = useCallback(() => {
    setSelectedOption(null);
    filterRef.current?.handleClean();
    filterH5Ref.current?.handleClean();
  }, []);

  const initList = useCallback(async () => {
    try {
      const {data} = await getGroupByItems();
      setGroupItems(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    initList();
  }, []);

  return (
    <BasicLayout
      title='资源列表'
      className='listing-container'
      leftSlot={
        process.env.TARO_ENV === 'h5' ? (
          <SideFilter
            ref={filterH5Ref}
            handleSearch={handleSearch}
            tab={currentTab}
            groupItems={groupItems}
            selectedOption={selectedOption}
          />
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
              ref={tabPaneRefs.current[item.key]}
              changePopupVisible={changePopupVisible}
              selectedOption={selectedOption}
              handleClean={handleClean}
            />
          </Tabs.TabPane>
        ))}
      </Tabs>
      <FilterPopup
        filterRef={filterRef}
        tab={currentTab}
        handleSearch={handleSearch}
        groupItems={groupItems}
        visible={visible}
        changePopupVisible={changePopupVisible}
        selectedOption={selectedOption}
      />
    </BasicLayout>
  );
};

export default observer(Listing);
