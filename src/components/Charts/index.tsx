/** @format */
import {useCallback, useEffect, useRef, useState} from 'react';
import Echarts, {EchartsHandle} from 'taro-react-echarts';
import echarts from '@/assets/js/echarts.js';

interface Props {
  type: 'nursery' | 'overview';
  data: any;
}

const MyChart = (props: Props) => {
  const {type, data = []} = props;
  const [option, setOption] = useState({});
  const echartsRef = useRef<EchartsHandle>(null);

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

  const formatData = useCallback(
    data => {
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
        setOption(option);
      } catch (error) {
        console.log(error, '____');
      }
    },
    [type]
  );

  useEffect(() => {
    if (data.length) {
      formatData(data);
    }
  }, [data]);

  return (
    <Echarts
      echarts={echarts}
      option={option}
      ref={echartsRef}
      lazyUpdate
      isPage={false}
    />
  );
};

export default MyChart;
