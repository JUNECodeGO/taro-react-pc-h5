/** @format */

import {TableTabType} from '@/common/type';
import BasicLayout from '@/components/BasicLayout';
import Filter from '@/components/Filter';
import {Swiper} from '@nutui/nutui-react-taro';
import {useCallback} from 'react';

const Search = () => {
  const handleSearch = useCallback(() => {}, []);
  return (
    <BasicLayout>
      <Filter
        tab={TableTabType.SUB}
        className='single'
        handleSearch={handleSearch}
        total={0}
      />
    </BasicLayout>
  );
};

export default Search;
