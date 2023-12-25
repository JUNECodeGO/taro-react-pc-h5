/** @format */

import {Tabbar} from '@nutui/nutui-react-taro';
import {Category, Home, User} from '@nutui/icons-react-taro';

const TabBarMini = () => {
  if (process.env.TARO_ENV === 'h5') return null;
  return (
    <Tabbar>
      <Tabbar.Item title='资源' icon={<Home size={18} />} dot />
      <Tabbar.Item title='数据' icon={<Category size={18} />} />
      <Tabbar.Item title='我的' icon={<User size={18} />} />
    </Tabbar>
  );
};

export default TabBarMini;
