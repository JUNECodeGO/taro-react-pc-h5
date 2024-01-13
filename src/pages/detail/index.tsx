/** @format */

import BasicLayout from "@/components/BasicLayout";
import Breadcrumb from "@/components/Bread";
import Footer from "@/components/Footer";
import { View, Text } from "@tarojs/components";

import { useMemo } from "react";
import "./index.scss";
import { Button } from "@nutui/nutui-react-taro";

const InfoList = [
  { name: "种质编号" },
  { name: "作物（植物类别" },
  { name: "作（植）名称" },
  { name: "种质名称" },
  { name: "科名" },
  { name: "学名" },
  { name: "主要特性" },
  { name: "保存圃" },
  { name: "收集时间" },
  { name: "资源描述" },
  { name: "种质图片" },
];
const Info = ({ label }) => {
  return (
    <View className="card-info">
      <Text className="label">{label}</Text>
      <Text className="value">XXX</Text>
    </View>
  );
};

const DetailPage = () => {
  const breadList = useMemo(
    () => [
      {
        path: "/search",
        breadcrumbName: "列表",
      },
      {
        breadcrumbName: "详情",
      },
    ],
    []
  );

  return (
    <BasicLayout className="detail-container">
      <Breadcrumb items={breadList} />
      <View className="card">
        <View className="card-head">
          <Text className="card-title">3X10-2BT</Text>
          <Button type="info">获取意向书</Button>
        </View>
        <View className="card-content">
          {InfoList.map((item) => (
            <Info key={item.name} label={item.name} />
          ))}
        </View>
      </View>
    </BasicLayout>
  );
};

export default DetailPage;
