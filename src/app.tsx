/** @format */
import {Provider} from 'mobx-react';
import {useDidShow} from '@tarojs/taro';
import {storesContext, useStore} from './store';
import Navigator from '@/common/utils/navigator';
import {useCallback} from 'react';
import {getUserAPI} from './api/user';
import './app.scss';

const whiteList = ['/main/add/index', '/main/apply/index'];

function App(props) {
  const url = window.location.href;
  const handleUrl = url.split('pages')[1]?.split('?')[0];
  const {
    useUserStore: {userInfo, setUserInfo},
  } = useStore();

  const initUser = useCallback(async () => {
    if (!userInfo) {
      let check = true;
      try {
        const res = await getUserAPI();
        if (res?.data) {
          setUserInfo(res.data);
          check = false;
          // 有token去login
        }
      } catch (error) {}
      if (check) {
        if (whiteList.some(path => handleUrl === path)) {
          Navigator.redirectTo('main/signIn');
        }
      }
    }
  }, [userInfo]);

  useDidShow(() => {
    initUser();
  });

  return <Provider store={storesContext}>{props.children}</Provider>;
}

export default App;
