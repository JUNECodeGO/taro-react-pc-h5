/** @format */

import {useCallback, useEffect} from 'react';
import {useDidShow, useDidHide} from '@tarojs/taro';
import {getUserAPI} from './api/user';
import {storesContext, useStore} from './store';
import {Provider} from 'mobx-react';

import './app.scss';

function App(props) {
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

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return <Provider store={storesContext}>{props.children}</Provider>;
}

export default App;
