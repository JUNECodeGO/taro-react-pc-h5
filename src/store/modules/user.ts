/** @format */

import {makeAutoObservable} from 'mobx';
import Taro from '@tarojs/taro';
import {UserInfo} from '@/api/user/dto';

export default class UseUserInfoStore {
  userInfo: UserInfo | null = null;

  role = null;

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
    const {role, ...rest} = data || {};
    this.userInfo = rest;
    this.role = role;
  };

  removeUserInfo = () => {
    this.userInfo = null;
    this.role = null;
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
