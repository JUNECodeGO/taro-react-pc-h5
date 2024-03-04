/** @format */
import {Provider} from 'mobx-react';
import {useDidShow, useDidHide} from '@tarojs/taro';
import {storesContext} from './store';
import RouterMonitor from './components/RouterMonitor';

import './app.scss';

function App(props) {
  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return (
    <Provider store={storesContext}>
      <RouterMonitor />
      {props.children}
    </Provider>
  );
}

export default App;
