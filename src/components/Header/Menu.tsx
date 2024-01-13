/** @format */
import { Tabs } from "@nutui/nutui-react-taro";
import React from "react";

const Menu = ({ list, className }) => {
  return (
    <Tabs defaultValue={0} className={className}>
      {list.map((item) => (
        <Tabs.TabPane title={item.name} key={item.name} />
      ))}
    </Tabs>
  );
};

export default React.memo(Menu);
