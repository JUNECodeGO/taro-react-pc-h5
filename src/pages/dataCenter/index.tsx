/** @format */
import {useMemo, useState} from 'react';
import Header from '@/components/Header';
import {ScrollView, View} from '@tarojs/components';
import Taro from '@tarojs/taro';
import VChart from '@visactor/taro-vchart';
import {Tabs} from '@nutui/nutui-react-taro';
import {Image} from 'antd';

const tabList = ['种质圃TOP10', '地域分析', '种类分析', '类型分析', '趋势分析'];
const topList = [
  {
    title: '保持信息',
    value: '449993份',
    icon: '@/assets/images/svg/Group_36.svg',
  },
];
const DataCenterPage = () => {
  const [spec, setSpec] = useState({
    data: [
      {
        id: 'data1',
        values: [
          {
            value: 335,
            name: '直接访问',
          },
          {
            value: 310,
            name: '邮件营销',
          },
          {
            value: 274,
            name: '联盟广告',
          },
          {
            value: 235,
            name: '视频广告',
          },
          {
            value: 400,
            name: '搜索引擎',
          },
        ],
      },
    ],
    type: 'pie',
    outerRadius: 0.6,
    innerRadius: 0.5,
    categoryField: 'name',
    valueField: 'value',
    legends: {
      visible: true,
    },
  });

  const [tab1value, setTab1value] = useState('0');
  const test = topList[0];
  return (
    <View>
      <Header />
      <ScrollView scrollX scrollY={false}>
        <View>
          <Image src={test.icon} />
        </View>
      </ScrollView>
      <View>
        <Tabs
          value={tab1value}
          onChange={value => {
            setTab1value(value);
          }}>
          <Tabs.TabPane title={tabList[0]}>
            <VChart
              type={Taro.getEnv()}
              canvasId='chartId'
              spec={spec}
              style={{height: '100%', width: '100%'}}
              onChartInit={chart => {}}
              onChartReady={chart => {}}
              onChartUpdate={chart => {}}
            />
          </Tabs.TabPane>
          <Tabs.TabPane title={tabList[1]}>
            <VChart
              type={Taro.getEnv()}
              canvasId='chartId'
              spec={spec}
              style={{height: '100%', width: '100%'}}
              onChartInit={chart => {}}
              onChartReady={chart => {}}
              onChartUpdate={chart => {}}
            />
          </Tabs.TabPane>
          <Tabs.TabPane title={tabList[2]}>
            <VChart
              type={Taro.getEnv()}
              canvasId='chartId'
              spec={spec}
              style={{height: '100%', width: '100%'}}
              onChartInit={chart => {}}
              onChartReady={chart => {}}
              onChartUpdate={chart => {}}
            />
          </Tabs.TabPane>
          <Tabs.TabPane title={tabList[3]}>
            <VChart
              type={Taro.getEnv()}
              canvasId='chartId'
              spec={spec}
              style={{height: '100%', width: '100%'}}
              onChartInit={chart => {}}
              onChartReady={chart => {}}
              onChartUpdate={chart => {}}
            />
          </Tabs.TabPane>
          <Tabs.TabPane title={tabList[4]}>
            <VChart
              type={Taro.getEnv()}
              canvasId='chartId'
              spec={spec}
              style={{height: '100%', width: '100%'}}
              onChartInit={chart => {}}
              onChartReady={chart => {}}
              onChartUpdate={chart => {}}
            />
          </Tabs.TabPane>
        </Tabs>
      </View>
    </View>
  );
};

export default DataCenterPage;
