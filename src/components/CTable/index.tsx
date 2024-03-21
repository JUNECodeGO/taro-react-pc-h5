/** @format */
import React, {useCallback} from 'react';
import {View} from '@tarojs/components';
import {Pagination} from '@nutui/nutui-react-taro';
import './index.scss';

const CTable = props => {
  const {columns, data, style, className, pageParams, handleTableChange} =
    props;

  const handleChange = useCallback(
    props => {
      handleTableChange(props);
    },
    [handleTableChange]
  );
  return (
    <>
      <View className={`${className} ctable`} style={style}>
        <View className='ctable-content'>
          <View className='ctable-row head'>
            {columns.map(item => (
              <View
                key={item.key}
                className='ctable-col'
                style={{width: item.width}}>
                {item.title}
              </View>
            ))}
          </View>
          {data.map(target => (
            <View className='ctable-row'>
              {columns.map(item => (
                <View
                  key={item.key}
                  style={{width: item.width}}
                  className='ctable-col'>
                  {item.render ? item.render(target) : target[item.key]}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      {pageParams.total > pageParams.pageSize ? (
        <Pagination
          value={pageParams.current}
          total={pageParams.total}
          pageSize={pageParams.pageSize}
          mode='simple'
          onChange={handleChange}
        />
      ) : null}
    </>
  );
};

export default React.memo(CTable);
