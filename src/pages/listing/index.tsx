/** @format */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Tabs} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import SideFilter from '@/components/SideFilter';
import {observer, useStore} from '@/store';
import {TableTabType} from '@/common/type';
import FilterPopup from '@/components/FilterPopup';
import TabPane from './components/tabpane';
import {getCategories} from '@/api/search';

import './index.scss';
import {CommonOption} from '@/api/search/dto';

const Listing = () => {
  const {
    useUserStore: {userInfo},
  } = useStore();

  // pane
  const tabPaneRefs = useRef({
    [TableTabType.ALL]: React.createRef(),
    [TableTabType.MINE]: React.createRef(),
  });
  const filterRef = useRef<any>();
  const [currentTab, setCurrentTab] = useState(TableTabType.ALL);
  const [cates, setCates] = useState<CommonOption[]>([]);
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CommonOption | null>(
    null
  );
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

  const handleSearch = useCallback(
    val => {
      if (!val) {
        setSelectedOption(null);
      } else {
        const target = cates.find(target => target.value === val);
        console.log(target, cates, val, '+++');
        setSelectedOption(target || null);
      }
      const tab = tabPaneRefs.current?.[currentTab];
      if (tab.current) {
        tab.current?.handleSearch({
          type_id: val,
        });
      }
    },
    [currentTab, cates]
  );

  const changePopupVisible = useCallback(e => {
    setVisible(pre => !pre);
    e?.stopPropagation();
  }, []);

  const handleClean = useCallback(() => {
    setSelectedOption(null);
    filterRef.current?.handleClean();
  }, []);

  const initList = useCallback(async () => {
    try {
      const {data} = await getCategories();
      const {list = []} = data || {};
      setCates(
        list.map(item => ({value: item.cate_id, label: item.cate_name}))
      );
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
            handleSearch={handleSearch}
            tab={currentTab}
            cates={cates}
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
        cates={cates}
        visible={visible}
        changePopupVisible={changePopupVisible}
        selectedOption={selectedOption}
      />
    </BasicLayout>
  );
};

export default observer(Listing);
