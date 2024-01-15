/** @format */

import {makeAutoObservable} from 'mobx';
import Taro from '@tarojs/taro';

export default class UseUserInfoStore {
  userInfo = {};

  roles = [] as string[];

  permissions = [] as string[];

  token = '' as string;
  isLoading = false; // 控制全局loading效果

  logout = true; // 退出弹窗控制

  // eslint-disable-next-line no-restricted-syntax
  constructor() {
    // 响应式处理
    makeAutoObservable(this);
    this.token = Taro.getStorageSync('youcha-token');
  }

  setUserInfo = data => {
    this.userInfo = data.userInfo;
    this.roles = data.roles;
    this.permissions = data.permissions;
  };

  removeUserInfo = () => {
    this.userInfo = {};
    this.roles = [];
    this.permissions = [];
  };

  setProfile = data => {
    this.userInfo = data;
  };

  setToken = (token: string) => {
    this.token = token;
    Taro.setStorage({
      key: 'youcha-token',
      data: token,
    });
  };

  removeLocalToken = (token: string) => {
    this.token = token;
    Taro.removeStorage({
      key: 'youcha-token',
    });
  };

  changeLogout = (bol: boolean) => {
    this.logout = bol;
  };
}
