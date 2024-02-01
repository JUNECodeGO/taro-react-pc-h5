/** @format */
import {useCallback, forwardRef, useState, useImperativeHandle} from 'react';
import {View} from '@tarojs/components';
import {Collapse, Radio} from '@nutui/nutui-react-taro';
import {ArrowUp2} from '@nutui/icons-react-taro';
import {FilterCategory} from './constants';
import {TableTabType} from '@/common/type';
import {CommonOption} from '@/api/search/dto';

import './index.scss';

interface SideFilterProps {
  className?: string;
  handleSearch?: (val: string) => void;
  tab: TableTabType;
  cates: CommonOption[];
  selectedOption: CommonOption | null;
}

const SideFilter = forwardRef((props: SideFilterProps, ref) => {
  const {className = '', handleSearch, cates, tab, selectedOption} = props;
  const [selected, setSelected] = useState();

  const handleChange = useCallback(val => {
    setSelected(val);
    handleSearch?.(val);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      handleClean: () => {
        setSelected(undefined);
      },
      handleSave: () => selected,
    };
  });

  // console.log(selection.name === 'category' ? cates : selection.items, '+++');

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
              value={selected}
              defaultValue={selectedOption?.value}
              onChange={handleChange}>
              {cates.map(item => (
                <Radio value={item.value} key={item.value}>
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
