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

  const format = useCallback(val => {
    const len = val.length;
    const count = Math.ceil(len / 5);

    if (count >= 1) {
      let i = 0;
      let str = '';
      while (i < count) {
        str = str + val.substring(i * 5, i * 5 + 5) + '\r\n';
        i++;
      }

      return str;
    } else {
      return val;
    }
  }, []);

  const formatData = useCallback((data, type) => {
    const isLine = type === 'nursery';
    try {
      let option;
      if (isLine) {
        const [xAxisData, seriesData] = data?.reduce(
          (cur, pre) => {
            cur[1].push(+pre.count);
            cur[0].push(pre.nursery_name);
            return cur;
          },
          [[], []]
        );
        option = {
          legend: {
            z: 100,
          },
          grid: {
            top: 10,
            left: '20%',
          },
          dataZoom: [
            {
              startValue: xAxisData[0],
              endValue: xAxisData[2],
              height: 15,
              bottom: 10,
            },
          ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: {
              fontSize: 10,
              internal: 0,
              formatter: format,
            },
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              type: 'bar',
              barWidth: '60%',
              data: seriesData,
              itemStyle: {
                color: '#637381',
              },
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
              },
            },
          ],
        };
      } else {
        const seriesData = data?.map(item => ({
          value: +item.count,
          name: item.germ_type,
        }));
        option = {
          legend: {
            orient: 'horizontal',
            top: 'bottom',
            type: 'scroll',
          },
          grid: {
            top: 0,
          },
          tooltip: {
            trigger: 'item',
          },
          series: [
            {
              type: 'pie',
              radius: '50%',
              data: seriesData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        };
      }
      return option;
    } catch (error) {
      return {};
    }
  }, []);

  const initList = useCallback(async () => {
    try {
      Taro.showLoading();
      const res = await Promise.allSettled([
        getSummarize(),
        getNurseryLists(),
        getOverviewByGermType(),
      ]);
      Taro.hideLoading();
      setData(
        res.map((item, index) => {
          if (item.status === 'fulfilled') {
            switch (index) {
              case 1:
                return formatData(item.value.data || [], 'nursery');
              case 2:
                return formatData(item.value.data || [], 'overview');

              default:
                return item.value.data;
            }
          } else {
            return [];
          }
        })
      );
    } catch (error) {
    } finally {
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
          {data &&
            tabList.map((item, index) => (
              <Tabs.TabPane title={item.text} key={String(index)}>
                <Chart type={item.type} option={data[index + 1]} />
              </Tabs.TabPane>
            ))}
        </Tabs>
      </View>
    </BasicLayout>
  );
};

export default DataCenterPage;
