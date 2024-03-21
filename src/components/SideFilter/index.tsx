/** @format */
import {
  useCallback,
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useMemo,
} from 'react';
import {View} from '@tarojs/components';
import {Collapse, Radio} from '@nutui/nutui-react-taro';
import {ArrowDown2} from '@nutui/icons-react-taro';
import {GroupType} from './constants';
import {TableTabType} from '@/common/type';

import './index.scss';

interface SideFilterProps {
  className?: string;
  handleSearch?: (val: any) => void;
  tab: TableTabType;
  groupItems: any;
  selectedOption?: string;
}

const SideFilter = forwardRef((props: SideFilterProps, ref) => {
  const {className = '', handleSearch, groupItems = {}, selectedOption} = props;
  const [selected, setSelected] = useState<string | null | undefined>();
  const [activeName, setActiveName] = useState();

  const groupItemskeys = useMemo(() => {
    return Object.keys(groupItems || {});
  }, [groupItems]);

  const handleChange = useCallback(
    val => {
      setSelected(val);
      handleSearch?.({groupItemskeys, selected: val});
    },
    [groupItemskeys]
  );

  const handleCollapseChange = useCallback(val => {
    setActiveName(val);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      handleClean: () => {
        setSelected(null);
      },
      handleSave: () => ({groupItemskeys, selected}),
    };
  });

  useEffect(() => {
    if (!activeName && groupItems) {
      let list = Object.keys(groupItems || {});
      if (list.length) {
        setActiveName(list);
      }
    }
  }, [groupItems]);

  return (
    <View className={`side-filter ${className}`}>
      <Collapse onChange={handleCollapseChange} activeName={activeName}>
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
