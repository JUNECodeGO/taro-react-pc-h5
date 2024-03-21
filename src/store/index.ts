/** @format */

import React from 'react';
import UseUserStore from './modules/user';
import {observer} from 'mobx-react';
import {makeAutoObservable} from 'mobx';

class RootStore {
  useUserStore: UseUserStore;

  // eslint-disable-next-line no-restricted-syntax
  constructor() {
    this.useUserStore = new UseUserStore();
    makeAutoObservable(this, {}, {autoBind: true});
  }
}

const useStore = () => React.useContext(storesContext);
export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
export {observer, useStore};
