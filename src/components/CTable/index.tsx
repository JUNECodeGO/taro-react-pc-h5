/** @format */
import React, {useMemo} from 'react';

import './index.scss';
import {Col, Grid, Row} from '@nutui/nutui-react-taro';
import {View} from '@tarojs/components';

const CTable = props => {
  const {columns, data, style, className} = props;

  const realColumns = useMemo(() => {
    const total = columns.reduce((cur, pre) => cur + pre.width, 0);
    return columns.map(column => ({
      ...column,
      span: Math.floor((column.width * 24) / total),
    }));
  }, []);

  return (
    <View className={`${className} ctable`} style={style}>
      <View className='ctable-content'>
        <Row className='ctable-row'>
          {realColumns.map(item => (
            <Col
              key={item.key}
              className='ctable-col'
              style={{width: item.width}}>
              {item.title}
            </Col>
          ))}
        </Row>
        {data.map(target => (
          <Row className='ctable-row'>
            {realColumns.map(item => (
              <Col
                key={item.key}
                style={{width: item.width}}
                className='ctable-col'>
                {item.render ? item.render(target) : target[item.key]}
              </Col>
            ))}
          </Row>
        ))}
      </View>
    </View>
  );
};

export default React.memo(CTable);
