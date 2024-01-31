/** @format */

import {observer, useStore} from '@/store';
import {getUserAPI} from '@/api/user';
import {useCallback, useEffect} from 'react';

const RouterMonitor = () => {
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
    initUser();
  }, []);

  return <></>;
};

export default observer(RouterMonitor);
