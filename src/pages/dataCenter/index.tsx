/** @format */
import {useState} from 'react';
import {View, Text} from '@tarojs/components';
import {Image, Tabs} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import Empty from '@/components/Empty';
import Chart from '@/components/Charts';

import './index.scss';

const NotYet = false;
const tabList = ['种质圃TOP10', '类型分析'];
const topList = [
  {
    title: '保持信息',
    value: '449993份',
    icon: require('../../assets/images/svg/Group_57.svg'),
  },
  {
    title: '保持信息',
    value: '449993份',
    icon: require('../../assets/images/svg/Group_36.svg'),
  },
  {
    title: '保持信息',
    value: '449993份',
    icon: require('../../assets/images/svg/Group_47.svg'),
  },
  {
    title: '保持信息',
    value: '449993份',
    icon: require('../../assets/images/svg/Group_53.svg'),
  },
  {
    title: '保持信息',
    value: '449993份',
    icon: require('../../assets/images/svg/Group_60.svg'),
  },
];

const DataCenterPage = () => {
  const [tab1value, setTab1value] = useState(0);

  if (NotYet) {
    return (
      <BasicLayout className='data-center' title='数据中心'>
        <Empty />
      </BasicLayout>
    );
  }

  return (
    <BasicLayout className='data-center' title='数据中心'>
      <View className='top-wrapper'>
        <View className='top-view'>
          {topList.map(item => (
            <View className='top-view-item' key={item.title}>
              <Image src={item.icon} className='top-view-icon' />
              <View className='top-view-item-right'>
                <Text className='top-view-title'>{item.title}</Text>
                <Text className='top-view-value'>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View className='chart'>
        <Tabs
          value={tab1value}
          onChange={value => {
            setTab1value(value);
          }}>
          <Tabs.TabPane title={tabList[0]}>
            <Chart />
          </Tabs.TabPane>
        </Tabs>
      </View>
    </BasicLayout>
  );
};

export default DataCenterPage;

// import BasicLayout from '@/components/BasicLayout';
// import Empty from '@/components/Empty';

// export default () => (
//   <BasicLayout className='data-center' title='数据中心'>
//     <Empty />
//   </BasicLayout>
// );
