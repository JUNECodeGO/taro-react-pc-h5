/** @format */

import React from 'react';
import UseUserStore from './modules/user';
import {observer} from 'mobx-react';
import {makeAutoObservable} from 'mobx';

class RootStore {
  useUserStore: UseUserStore;

  // eslint-disable-next-line no-restricted-syntax
  constructor() {
    // 对引入进行来的子模块进行实例化操作，并挂载到RootStore上
    this.useUserStore = new UseUserStore();
    makeAutoObservable(this, {}, {autoBind: true});
  }
}

// 实例化操作

const useStore = () => React.useContext(storesContext);
export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
export {observer, useStore};
