/** @format */

import {View, Text} from '@tarojs/components';
import {useCallback, useMemo} from 'react';
import Navigator from '@/Navigator';

import './index.scss';
const Breadcrumb = props => {
  const {items = []} = props;
  const len = useMemo(() => items.length, [items]);
  const handleClick = useCallback(path => {
    Navigator.redirectTo(path);
  }, []);
  return (
    <View className='bread'>
      {items.map((item, index) => {
        const isLast = len === index + 1;
        return (
          <View
            key={item.breadcrumbName}
            onClick={!isLast ? () => handleClick(item.path) : () => {}}>
            <Text className={`normal ${!isLast ? 'last' : ''}`}>
              {item.breadcrumbName}
            </Text>
            {!isLast && <Text className='gt normal'>/</Text>}
          </View>
        );
      })}
    </View>
  );
};

export default Breadcrumb;
