/** @format */

import axios, {type Method} from 'taro-axios';
import {rootStore} from '@/store';
import Taro from '@tarojs/taro';
import Navigator from '@/common/utils/navigator';
import {isH5} from '@/common/utils';

const instance = axios.create({
  baseURL: isH5 ? '/api' : 'https://ctcgris.cn/ctbigdata/home/api',
  timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
  (response: any) => {
    const {token} = rootStore.useUserStore || {};
    // token配置请求头
    if (!response.headers?.authorization && token) {
      response.headers.Authorization = `Bearer ${token}`;
    }

    return response;
  },
  error => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    httpMessageHandle(response?.data);
    if (response?.data) {
      return response.data;
    }
    return null;
  },
  error => {
    const {data} = error.response || {};
    httpMessageHandle(data, true);
    return Promise.reject(error);
  }
);

const httpMessageHandle = (
  data: {code: any; message: any},
  isError = false
) => {
  const {
    useUserStore: {removeLocalToken, logout, changeLogout, removeUserInfo},
  } = rootStore;

  const handleSuccess = res => {
    if (res.confirm) {
      changeLogout(true);
      removeLocalToken('');
      removeUserInfo();
      Navigator.redirectTo('main/login');
    } else if (res.cancel) {
      changeLogout(false);
    }
  };
  switch (data && data.code) {
    case '400':
      Taro.showToast({
        title: `${data.message}`,
        icon: 'error',
        duration: 2000,
      });
      break;
    case 4003:
      if (logout) {
        Taro.showModal({
          title: '系统提示',
          content: '登录状态已过期，您可以继续留在该页面，或者重新登录',
          cancelText: '取消',
          confirmText: '重新登录',
          success: handleSuccess,
        });
      }
      break;
    case 4002:
      if (logout) {
        Taro.showModal({
          content: '请登录',
          cancelText: '取消',
          confirmText: '确认',
          success: handleSuccess,
        });
      }
      break;
    case '403':
      Taro.showToast({
        title: `${data.message}`,
        icon: 'error',
        duration: 2000,
      });
      break;
    case '500':
      Taro.showToast({
        title: `${data.message}`,
        icon: 'error',
        duration: 2000,
      });
      break;

    default:
      isError &&
        Taro.showToast({
          title: '未知错误，请联系管理人员',
          icon: 'error',
          duration: 2000,
        });
      break;
  }
};

// 后端返回的接口数据格式
export interface ResponseData<T> {
  status: number;
  data: T;
  code: number;
}

/**
 * axios 二次封装
 * @param {String} url  请求地址
 * @param {String} method  请求类型
 * @param {Object} submitData  对象类型，提交数据
 */
export const http = function <T>(
  method: Method,
  url: string,
  submitData?: unknown
) {
  return instance.request<T, ResponseData<T>>({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData,
  });
};

export default instance;
