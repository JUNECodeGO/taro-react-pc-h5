/** @format */

import {isH5} from '@/common/utils';

const MenuListPC = [
  {
    key: '资源检索',
    name: '资源检索',
  },
  {
    key: '资源管理',
    name: '资源管理',
  },
  {
    key: '数据中心',
    name: '数据中心',
  },
 
  {
    key: '科研项目汇交',
    name: '科研项目汇交',
  },
];

const MenuListMini = [
  {
    key: '种植首页',
    name: '种植首页',
  },
  {
    key: '数据中心',
    name: '数据中心',
  },
  {
    key: '资源管理',
    name: '资源管理',
  },
  {
    key: '科研项目汇交',
    name: '科研项目汇交',
  },
];

export const MenuList = isH5 ? MenuListPC : MenuListMini;
