/** @format */
import React, {useRef, useState, useCallback, useImperativeHandle} from 'react';

import {View, Text} from '@tarojs/components';
import SideFilter from '../SideFilter/index.h5';
import {Button, Popup} from '@nutui/nutui-react-taro';
import {Close} from '@nutui/icons-react-taro';

import './index.scss';

const FilterPopup = React.forwardRef((props, ref) => {
  const {handelSave, tab} = props;
  const [visible, setVisible] = useState(false);
  const latestSelection = useRef();
  const changePopupVisible = useCallback(e => {
    setVisible(pre => !pre);
    e?.stopPropagation();
  }, []);

  useImperativeHandle(ref, () => {
    return {
      handleClose: changePopupVisible,
    };
  });

  const handleSearch = selection => {
    latestSelection.current = selection;
  };
  return (
    <Popup
      ref={ref}
      visible={visible}
      className='popup-filter'
      position='bottom'
      onClose={changePopupVisible}>
      <View className='popup-filter-content'>
        <View className='popup-filter-title'>
          <Close onClick={changePopupVisible} />
          <Text>搜索过滤</Text>
          <Button type='primary' size='small' onClick={handelSave}>
            保存
          </Button>
        </View>
        <SideFilter
          className='popup-filter'
          handleSearch={handleSearch}
          tab={tab}
        />
      </View>
    </Popup>
  );
});

export default FilterPopup;
