/** @format */
import {useCallback, forwardRef, useState, useImperativeHandle} from 'react';
import {View} from '@tarojs/components';
import {Collapse, Radio} from '@nutui/nutui-react-taro';
import {ArrowDown2} from '@nutui/icons-react-taro';
import {GroupType} from './constants';
import {TableTabType} from '@/common/type';

import './index.scss';

interface SideFilterProps {
  className?: string;
  handleSearch?: (val: string) => void;
  tab: TableTabType;
  groupItems: any;
  selectedOption?: string;
}

const SideFilter = forwardRef((props: SideFilterProps, ref) => {
  const {className = '', handleSearch, groupItems = {}, selectedOption} = props;
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

  return (
    <View className={`side-filter ${className}`}>
      <Collapse defaultActiveName={['category']}>
        {Object.entries(groupItems).map(([key, lists = []]) => (
          <Collapse.Item
            key={key}
            title={GroupType[key]}
            name={key}
            expandIcon={<ArrowDown2 size='16' />}>
            <Radio.Group
              className='radio-wrapper'
              value={selected}
              defaultValue={selectedOption}
              onChange={handleChange}>
              {(lists || []).map(item => (
                <Radio value={`${key}--${item.group}`} key={item.group}>
                  {`${item.group}(${item.count})`}
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
