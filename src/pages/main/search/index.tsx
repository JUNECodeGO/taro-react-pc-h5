/** @format */

import {TableTabType} from '@/common/type';
import BasicLayout from '@/components/BasicLayout';
import Filter from '@/components/Filter';
import {Swiper} from '@nutui/nutui-react-taro';
import {View} from '@tarojs/components';
import {useForm} from 'antd/es/form/Form';

const Search = () => {
  const [form] = useForm();
  const list = ['red', 'green', 'blue', 'yellow'];
  return (
    <BasicLayout>
      <Filter
        tab={TableTabType.SUB}
        className='single'
        handleSubmit={() => {
          form.submit();
        }}
        total={0}
        selectedOption={null}
      />
      <Swiper height={220} direction='horizontal' loop={false} indicator={true}>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <View
                style={{width: 50, height: 50, backgroundColor: list[index]}}
              />
            </Swiper.Item>
          );
        })}
      </Swiper>
    </BasicLayout>
  );
};

export default Search;
