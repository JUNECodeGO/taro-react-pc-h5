/** @format */

import { View, Text } from "@tarojs/components";
import Header from "@/components/Header/index";
import Table from "@/components/Table";
import { Add } from "@nutui/icons-react-taro";
import Filter from "@/components/Filter";
import { Sticky } from "@nutui/nutui-react-taro";
import Layout from "@/components/Layout";
import "./index.scss";

const Index = () => {
  return (
    // <Layout>
    <View className="home">
      <Header />
      <View className="home-content">
        <Text className="home-title">资源列表</Text>
        <Filter />
        <Table />
      </View>
    </View>
    // </Layout>
  );
};
export default Index;
