/** @format */
import React from 'react';
import {useCallback} from 'react';
import {ArrowUp2} from '@nutui/icons-react-taro';
import {Collapse, Radio} from '@nutui/nutui-react-taro';
import {FilterCategory} from './constants';
import {View} from '@tarojs/components';

import './index.scss';

const SideFilter = props => {
  const {className = '', filters, setFilters} = props;

  const handleChange = useCallback(val => {
    setFilters([val]);
  }, []);
  return (
    <View className={`side-filter ${className}`}>
      <Collapse defaultActiveName={['category']}>
        {FilterCategory.map(selection => (
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
};

export default React.memo(SideFilter);
