/** @format */
import React, {useCallback, useEffect, useState} from 'react';
import {View} from '@tarojs/components';
import {Collapse, Radio} from '@nutui/nutui-react-taro';
import {ArrowUp2} from '@nutui/icons-react-taro';
import {FilterCategory} from './constants';
import {TableTabType} from '@/common/type';

import './index.scss';
import {getCategories} from '@/api/search';

interface SideFilterProps {
  className?: string;
  handleSearch: (val: string) => void;
  tab: TableTabType;
}

const SideFilter = React.memo((props: SideFilterProps) => {
  const {className = '', handleSearch, tab} = props;
  const [filters, setFilters] = useState<string[]>([]);
  const [cates, setCates] = useState([]);

  const handleChange = useCallback(val => {
    setFilters([val]);
    handleSearch(val);
  }, []);

  const initList = useCallback(async () => {
    try {
      const {List = []} = await getCategories();
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    initList();
  }, []);
  return (
    <View className={`side-filter ${className}`}>
      <Collapse defaultActiveName={['category']}>
        {FilterCategory[tab].map(selection => (
          <Collapse.Item
            key={selection.name}
            title={selection.title}
            name={selection.name}
            expandIcon={<ArrowUp2 size='16' />}>
            <Radio.Group
              className='radio-wrapper'
              value={filters[0]}
              onChange={handleChange}>
              {selection.items.map(item => (
                <Radio value={item.label} key={item.label}>
                  {item.label}
                </Radio>
              ))}
            </Radio.Group>
          </Collapse.Item>
        ))}
      </Collapse>
    </View>
  );
});

export default SideFilter;
