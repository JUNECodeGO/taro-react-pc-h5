/** @format */

import {http} from '@/api';
import {Cate} from './dto';

export const searchListAll = data =>
  http<{
    list: Cate[];
    total: number;
    hasMode: boolean;
  }>('GET', '/get_categories', data);

export const searchListMine = data =>
  http<{
    list: Cate[];
    total: number;
    hasMode: boolean;
  }>('GET', '/get_categories', data);
