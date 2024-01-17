/** @format */
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Tabs} from '@nutui/nutui-react-taro';
import Table from '@/components/Table';
import Filter from '@/components/Filter';
import BasicLayout from '@/components/BasicLayout';
import SideFilter from '@/components/SideFilter/index.h5';
import {isH5} from '@/common/utils';
import useStore from '@/store';

import './index.scss';
import {TableTabType} from '@/common/type';

const TabPane = React.memo(
  React.forwardRef((props: {tab: TableTabType}, ref) => {
    const {tab} = props;

    const [data, setData] = useState([
      {
        name: 'Tom',
        sex: '男',
        record: '小学',
        birthday: '2010-01-01',
        age: 10,
      },
      {
        name: 'Lucy',
        sex: '女',
        record: '本科',
        birthday: '2000-01-01',
        age: 30,
      },
      {
        name: 'Jack',
        sex: '男',
        record: '高中',
        birthday: '2020-01-01',
        age: 4,
      },
      {
        name: 'Sara',
        sex: '女',
        record: '高中',
        birthday: '2020-01-01',
        age: 6,
      },
      {
        name: 'Frank',
        sex: '男',
        record: '幼儿园',
        birthday: '2020-01-01',
        age: 3,
      },
      {
        name: 'Tom',
        sex: '男',
        record: '小学',
        birthday: '2010-01-01',
        age: 10,
      },
      {
        name: 'Lucy',
        sex: '女',
        record: '本科',
        birthday: '2000-01-01',
        age: 30,
      },
      {
        name: 'Jack',
        sex: '男',
        record: '高中',
        birthday: '2020-01-01',
        age: 4,
      },
      {
        name: 'Sara',
        sex: '女',
        record: '高中',
        birthday: '2020-01-01',
        age: 6,
      },
      {
        name: 'Frank',
        sex: '男',
        record: '幼儿园',
        birthday: '2020-01-01',
        age: 3,
      },
      {
        name: 'Tom',
        sex: '男',
        record: '小学',
        birthday: '2010-01-01',
        age: 10,
      },
      {
        name: 'Lucy',
        sex: '女',
        record: '本科',
        birthday: '2000-01-01',
        age: 30,
      },
      {
        name: 'Jack',
        sex: '男',
        record: '高中',
        birthday: '2020-01-01',
        age: 4,
      },
      {
        name: 'Sara',
        sex: '女',
        record: '高中',
        birthday: '2020-01-01',
        age: 6,
      },
      {
        name: 'Frank',
        sex: '男',
        record: '幼儿园',
        birthday: '2020-01-01',
        age: 3,
      },
      {
        name: 'Tom',
        sex: '男',
        record: '小学',
        birthday: '2010-01-01',
        age: 10,
      },
      {
        name: 'Lucy',
        sex: '女',
        record: '本科',
        birthday: '2000-01-01',
        age: 30,
      },
      {
        name: 'Jack',
        sex: '男',
        record: '高中',
        birthday: '2020-01-01',
        age: 4,
      },
      {
        name: 'Sara',
        sex: '女',
        record: '高中',
        birthday: '2020-01-01',
        age: 6,
      },
      {
        name: 'Frank',
        sex: '男',
        record: '幼儿园',
        birthday: '2020-01-01',
        age: 3,
      },
    ]);

    const handleSearch = useCallback(filter => {}, []);

    useImperativeHandle(ref, () => ({
      handleSearch: handleSearch,
    }));

    return (
      <>
        <Filter handleSearch={handleSearch} total={data.length} tab={tab} />
        <Table data={data} setData={setData} tab={tab} />
      </>
    );
  })
);
const Listing = () => {
  const {
    useUserStore: {userInfo},
  } = useStore();

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

  return (
    <BasicLayout
      title='资源列表'
      className='listing-container'
      leftSlot={
        isH5 ? (
          <SideFilter handleSearch={handleSearch} tab={currentTab} />
        ) : null
      }>
      <Tabs onChange={handleChangeTab} value={currentTab}>
        {tabList.map(item => (
          <Tabs.TabPane title={item.title} key={item.key}>
            <TabPane tab={item.key} ref={tabPaneRefs[item.key]} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </BasicLayout>
  );
};
export default Listing;
