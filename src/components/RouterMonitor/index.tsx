/** @format */

import {observer, useStore} from '@/store';
import {getUserAPI} from '@/api/user';
import {useCallback, useEffect} from 'react';
import Navigator from '@/common/utils/navigator';

const whiteList = ['/main/add', '/main/apply'];

const RouterMonitor = () => {
  const url = window.location.href;
  const handleUrl = url.split('pages')[1]?.split('?')[0];
  const {
    useUserStore: {userInfo, setUserInfo},
  } = useStore();
  // 可以使用所有的 React Hooks

  const initUser = useCallback(async () => {
    if (!userInfo) {
      try {
        const res = await getUserAPI();
        if (res?.data) {
          setUserInfo(res.data);
        }
      } catch (error) {}
    }
  }, []);

  useEffect(() => {
    console.log(123);
    initUser();
  }, []);

  // // 有token去login
  // if (whiteList.some(path => handleUrl.indexOf(path) < 0) && !userInfo) {
  //   Navigator.redirectTo('main/signIn');
  // }

  return <></>;
};

export default observer(RouterMonitor);
