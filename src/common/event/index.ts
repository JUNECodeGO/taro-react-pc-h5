/** @format */

import {Events} from '@tarojs/taro';
import {useEffect} from 'react';

const events = new Events();

// 创建普通事件 hook
export function createEventHook(eventName: string) {
  return (callback: (params?: any) => void) => {
    useEffect(() => {
      events.on(eventName, callback);
      return () => {
        events.off(eventName, callback);
      };
    }, [callback]);
  };
}

export default events;
