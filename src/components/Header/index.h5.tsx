// /** @format */

// /** @format */

// import {Button, Flex, Layout, Menu} from 'antd';
// import './index.h5.scss';
// import {MenuList} from './constants';

// const Header = () => {
//   return (
//     <Layout.Header className='header'>
//       <div className='header-title'>植物种质资源保存与共享平台</div>
//       <Menu
//         mode='horizontal'
//         items={MenuList}
//         className='menu'
//         style={{minWidth: 0, flex: 'auto'}}
//       />
//       <Button size='small' ghost>
//         登陆
//       </Button>
//     </Layout.Header>
//   );
// };

// export default Header;

/** @format */

import { More } from "@nutui/icons-react-taro";
import { SideNavBar, SideNavBarItem } from "@nutui/nutui-react-taro";
import { View, Text } from "@tarojs/components";
import { useState } from "react";

import "./index.scss";
import { MenuList } from "./constants";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const changeNarBar = () => {
    setVisible((pre) => !pre);
  };

  return (
    <View className="header">
      <Text>植物种质资源保存与共享平台</Text>
      <More color="#fff" size={20} onClick={changeNarBar} />

      <SideNavBar
        title="目录"
        visible={visible}
        position="right"
        onClose={changeNarBar}
      >
        {MenuList.map((menu) => (
          <SideNavBarItem title={menu.key} key={menu.key} value={menu.key} />
        ))}
      </SideNavBar>
    </View>
  );
};

export default Header;
