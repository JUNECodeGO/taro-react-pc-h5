/** @format */
import {useCallback, useEffect, useMemo, useState} from 'react';
import {View, Text} from '@tarojs/components';
import {Image, Tabs} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import Chart from '@/components/Charts';
import {
  getNurseryLists,
  getOverviewByGermType,
  getSummarize,
} from '@/api/search';
import './index.scss';
import Taro from '@tarojs/taro';

const tabList = [
  {text: '种质圃TOP10', type: 'nursery'},
  {text: '类型分析', type: 'overview'},
];

const DataCenterPage = () => {
  const [tab1value, setTab1value] = useState(0);
  const [data, setData] = useState<any>();
  const topList = useMemo(() => {
    const {total_items, total_family, total_genus, total_species} =
      data?.[0] || {};
    return [
      {
        title: '收集信息',
        value: `${total_items || '-'} 份`,
        icon: require('../../assets/images/svg/Group_57.svg'),
      },
      {
        title: '涉及作物科',
        value: `${total_family || '-'}份`,
        icon: require('../../assets/images/svg/Group_36.svg'),
      },
      {
        title: '涉及作物属',
        value: `${total_species || '-'} 份`,
        icon: require('../../assets/images/svg/Group_47.svg'),
      },
      {
        title: '涉及作物物种',
        value: `${total_genus || '-'}份`,
        icon: require('../../assets/images/svg/Group_53.svg'),
      },
    ];
  }, [data]);

  const initList = useCallback(async () => {
    try {
      Taro.showLoading();
      const result = Array.from({length: 3});
      const res = await Promise.allSettled([
        getSummarize(),
        getNurseryLists(),
        getOverviewByGermType(),
      ]).then(target =>
        target.forEach((item, index) => {
          if (item.status === 'fulfilled') {
            result[index] = item.value?.data;
          }
        })
      );
      setData(result);
    } catch (error) {
    } finally {
      Taro.hideLoading();
    }
  }, []);

  useEffect(() => {
    initList();
  }, []);

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
          {tabList.map((item, index) => (
            <Tabs.TabPane title={item.text} key={String(index)}>
              <Chart type={item.type} data={data?.[index + 1]} />
            </Tabs.TabPane>
          ))}
        </Tabs>
      </View>
    </BasicLayout>
  );
};

export default DataCenterPage;
