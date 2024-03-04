/** @format */

import {isH5} from '@/common/utils';

const MenuListPC = [
  {
    path: 'listing',
    name: '资源检索',
    key: 'listing',
  },
  {
    path: 'datacenter',
    name: '数据中心',
    key: 'datacenter',
  },
  {
    path: 'account',
    name: '个人中心',
    key: 'account',
  },
];

const MenuListMini = [];

export const MenuList = isH5 ? MenuListPC : MenuListMini;
