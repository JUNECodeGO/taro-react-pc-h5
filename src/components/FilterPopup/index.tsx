/** @format */
import {useCallback, useMemo} from 'react';
import {View, Text, ScrollView} from '@tarojs/components';
import {Button, Popup} from '@nutui/nutui-react-taro';
import {Close} from '@nutui/icons-react-taro';
import SideFilter from '../SideFilter';
import {TableTabType} from '@/common/type';

import './index.scss';

interface FilterPopupProps {
  handleSearch: (values: any) => void;
  changePopupVisible: (
    e?: React.MouseEvent<HTMLButtonElement | Element, MouseEvent>
  ) => void;
  visible: boolean;
  tab: TableTabType;
  groupItems: any;
  selectedOption?: string;
  filterRef: any;
}

const FilterPopup = (props: FilterPopupProps) => {
  const {handleSearch, filterRef, changePopupVisible, visible, ...rest} = props;

  const handleSave = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const selected = filterRef.current?.handleSave();
      handleSearch(selected);
      changePopupVisible(e);
    },
    [handleSearch]
  );

  const content = useMemo(() => {
    if (process.env.TARO_ENV === 'h5')
      return <SideFilter ref={filterRef} className='show' {...rest} />;
    return (
      <ScrollView scrollY scrollWithAnimation style={{height: '100%'}}>
        <SideFilter ref={filterRef} className='show' {...rest} />;
      </ScrollView>
    );
  }, [rest, filterRef]);

  return (
    <Popup visible={visible} className='popup-filter' position='bottom'>
      <View className='popup-filter-content'>
        <View className='popup-filter-title'>
          <Close onClick={changePopupVisible} />
          <Text>搜索过滤</Text>
          <Button type='primary' size='small' onClick={handleSave}>
            保存
          </Button>
        </View>
        {content}
      </View>
    </Popup>
  );
};

export default FilterPopup;
