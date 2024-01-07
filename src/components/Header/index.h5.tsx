/** @format */

import { Button, Flex, Layout, Menu } from "antd";
import "./index.scss";
import { MenuList } from "./constants";

const Header = () => {
  return (
    <Layout.Header className="header">
      <div className="header-title">植物种质资源保存与共享平台</div>
      <Menu
        mode="horizontal"
        items={MenuList}
        className="menu"
        style={{ minWidth: 0, flex: "auto" }}
      />
      <Button size="small" ghost>
        登陆
      </Button>
    </Layout.Header>
  );
};

export default Header;
