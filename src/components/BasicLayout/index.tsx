/** @format */

import Header from "../Header";
import { View, Text } from "@tarojs/components";

import "./index.scss";

const BasicLayout = (props) => {
  const { title, className = "", leftSlot } = props;
  return (
    <View className={`layout-wrapper ${className}`}>
      <Header />
      <View className="layout-wrapper-side">
        {leftSlot}
        <View className="layout-wrapper-content">
          {title && <Text className="layout-wrapper-title">{title}</Text>}
          {props.children}
        </View>
      </View>
    </View>
  );
};

export default BasicLayout;
