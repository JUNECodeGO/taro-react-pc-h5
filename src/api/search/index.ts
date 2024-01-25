/** @format */

import {http} from '@/api';

// 登录
export const searchList = code =>
  http('GET', '/get_categories', {
    page_size: 5,
    page_num: 1,
  });
