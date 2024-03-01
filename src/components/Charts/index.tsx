/** @format */
import {useCallback, useEffect, useRef, useState} from 'react';
import Echarts, {EChartOption, EchartsHandle} from 'taro-react-echarts';
import echarts from '@/assets/js/echarts.js';
import {getNurseryLists, getOverviewByGermType} from '@/api/search';
import Taro from '@tarojs/taro';

interface Props {
  type: 'nursery' | 'overview';
}
const MyChart = (props: Props) => {
  const {type} = props;
  const echartsRef = useRef<EchartsHandle>(null);
  const [data, setData] = useState<EChartOption>({});

  const getList = useCallback(async () => {
    const isLine = type === 'nursery';
    const fn = isLine ? getNurseryLists : getOverviewByGermType;
    try {
      Taro.showLoading();
      const {data = []} = await fn();
      const [xAxisData, seriesData] = data.reduce(
        (cur, pre) => {
          cur[1].push(+pre.count);
          cur[0].push(pre.nursery_name || pre.germ_type);
          return cur;
        },
        [[], []]
      );

      setData({
        legend: {
          top: 50,
          left: 'center',
          z: 100,
        },
        tooltip: {
          trigger: 'axis',
          show: true,
          confine: true,
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
          nameTextStyle: {
            width: '15px',
            overflow: 'break',
          },
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: seriesData,
            type: isLine ? 'bar' : 'pie',
          },
        ],
      });
    } catch (error) {
    } finally {
      Taro.hideLoading();
    }
  }, [type]);

  useEffect(() => {
    getList();
  }, []);

  return <Echarts echarts={echarts} option={data} ref={echartsRef}></Echarts>;
};

export default MyChart;
