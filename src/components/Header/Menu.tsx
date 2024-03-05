/** @format */
import React, {useCallback} from 'react';
import {Tabs} from '@nutui/nutui-react-taro';
import Navigator from '@/common/utils/navigator';

const Menu = ({list, className, handleUrl}) => {
  const handleChange = useCallback(path => {
    const isActive = handleUrl === `/${path}/index`;
    if (isActive) return;
    Navigator.navigateTo(path);
  }, []);

  return (
    <Tabs defaultValue={0} className={className} onChange={handleChange}>
      {list.map(item => (
        <Tabs.TabPane title={item.name} key={item.name} value={item.path} />
      ))}
    </Tabs>
  );
};

export default React.memo(Menu);
