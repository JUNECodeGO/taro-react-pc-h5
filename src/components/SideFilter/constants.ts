/** @format */

import {TableTabType} from '@/common/type';

export const commonCategory = [
  {
    title: '按种质类型',
    name: 'category',
  },
  {
    title: '按地域',
    name: 'place',
    items: [],
  },
];

export const FilterCategory = {
  [TableTabType.ALL]: [
    ...commonCategory,
    {
      title: '按持有人',
      name: 'owner',
      items: [],
    },
  ],
  [TableTabType.MINE]: commonCategory,
};
