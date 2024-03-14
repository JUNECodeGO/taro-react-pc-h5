/** @format */
import { useRef } from "react";
import Echarts, { EchartsHandle } from "taro-react-echarts";
import echarts from "@/assets/js/echarts.js";
interface Props {
  option: any;
}

const MyChart = (props: Props) => {
  const { option } = props;
  const echartsRef = useRef<EchartsHandle>(null);

  return (
    <Echarts
      echarts={echarts}
      option={option}
      ref={echartsRef}
      lazyUpdate={true}
      isPage={false}
    />
  );
};

export default MyChart;
