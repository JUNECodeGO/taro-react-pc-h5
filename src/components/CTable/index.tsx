/** @format */
import React, {useCallback, useMemo} from 'react';
import {View} from '@tarojs/components';
import {ArrowSize6} from '@nutui/icons-react-taro';

import './index.scss';

const CTable = props => {
  const {columns, data, style, className, pageParams, handleTableChange} =
    props;

  const disabledNext = useMemo(() => {
    const {current, pageSize, total} = pageParams;
    return current * pageSize >= total;
  }, [pageParams]);

  const handleChange = useCallback(
    type => {
      let disabled = true;
      switch (type) {
        case 'next':
          disabled = disabledNext;
          break;
        default:
          disabled = pageParams.current === 1;
      }
      if (disabled) return;
      handleTableChange(type);
    },
    [pageParams, disabledNext, handleTableChange]
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
        <View className='pagination'>
          <ArrowSize6
            size={12}
            className={`pre ${pageParams.current === 1 ? 'grey' : ''}`}
            onClick={() => handleChange('pre')}
          />
          <View className='line' />
          <ArrowSize6
            size={12}
            className={`next ${disabledNext ? 'grey' : ''}`}
            data-type='next'
            onClick={() => handleChange('next')}
          />
        </View>
      ) : null}
    </>
  );
};

export default React.memo(CTable);
