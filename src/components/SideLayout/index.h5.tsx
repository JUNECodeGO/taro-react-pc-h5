import Navigator from "@/Navigator";
import { Menu } from "antd";
import { useCallback } from "react";
const items = [
  {
    label: "基本资料",
    key: "基本资料",
  },
  {
    label: "修改密码",
    key: "修改密码",
  },
  {
    label: "消息管理",
    key: "消息管理",
  },
];
const SideLayout = () => {
  const handleClick = useCallback((e) => {
    Navigator.navigateTo("account");
  }, []);
  return (
    <Menu
      onClick={handleClick}
      mode="inline"
      inlineCollapsed={false}
      items={items}
      style={{ width: "15rem", flexShrink: 0 }}
    />
  );
};

export default SideLayout;
