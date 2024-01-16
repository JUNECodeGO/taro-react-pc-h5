/** @format */
import React from 'react';
import {Tabs} from '@nutui/nutui-react-taro';

const Menu = ({list, className}) => {
  return (
    <Tabs defaultValue={0} className={className}>
      {list.map(item => (
        <Tabs.TabPane title={item.name} key={item.name} />
      ))}
    </Tabs>
  );
};

export default React.memo(Menu);
