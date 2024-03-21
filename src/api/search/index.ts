/** @format */

import {http} from '@/api';
import {Cate, Collection} from './dto';

export const searchListAll = data =>
  http<{
    counts: number;
    lists: Collection[];
  }>('GET', '/search_items', data);

export const getCategories = () =>
  http<{
    list: Cate[];
    total: number;
    hasMode: boolean;
  }>('GET', '/get_categories');

export const getSummarize = () => http('GET', '/get_summarize');

export const getGroupByItems = () => http('GET', '/group_by_items');

export const searchListMine = data =>
  http<{
    counts: number;
    lists: Collection[];
  }>('GET', '/search_user_items', data);

export const getCateDetail = data =>
  http<{data: Cate}>('GET', '/get_detail', data);

export const applyShare = data => http<{}>('POST', '/apply_share', data);

export const searchShareList = data =>
  http<{}>('GET', '/search_share_list', data);

export const createItem = data => http<{}>('POST', '/create_item', data);

export const updateItem = data => http<{}>('POST', '/update_item', data);

export const getCateInfo = () => http('GET', '/get_cate_info');

export const getNurseryLists = () => http('GET', '/get_nursery_lists');

export const getOverviewByGermType = () =>
  http('GET', 'get_overview_by_germ_type');
