/** @format */
import {useCallback, useEffect, useMemo, useState} from 'react';
import {View, Text} from '@tarojs/components';
import {Button} from '@nutui/nutui-react-taro';
import BasicLayout from '@/components/BasicLayout';
import Breadcrumb from '@/components/Bread';

import './index.scss';
import Taro, {useRouter} from '@tarojs/taro';
import Navigator from '@/common/utils/navigator';
import {getCateDetail} from '@/api/search';

const InfoList = [
  {name: '种质编号'},
  {name: '作物（植物类别'},
  {name: '作（植）名称'},
  {name: '种质名称'},
  {name: '科名'},
  {name: '学名'},
  {name: '主要特性'},
  {name: '保存圃'},
  {name: '收集时间'},
  {name: '资源描述'},
  {name: '种质图片'},
];
const Info = ({label}) => {
  return (
    <View className='card-info'>
      <Text className='label'>{label}</Text>
      <Text className='value'>XXX</Text>
    </View>
  );
};

const DetailPage = () => {
  const router = useRouter();
  const {id} = Navigator.serialize(router.params) || {};
  const [data, setData] = useState();
  const breadList = useMemo(
    () => [
      {
        path: 'listing',
        breadcrumbName: '列表',
      },
      {
        breadcrumbName: '详情',
      },
    ],
    []
  );

  const fetchCateDetail = useCallback(async id => {
    try {
      Taro.showLoading();
      const data = await getCateDetail({id});
      console.log(data, '+++');
    } catch (error) {
    } finally {
      Taro.hideLoading();
    }
  }, []);

  useEffect(() => {
    if (id && !data) {
      fetchCateDetail(id);
    }
  }, [id]);

  return (
    <BasicLayout className='detail-container'>
      <Breadcrumb items={breadList} />
      <View className='card'>
        <View className='card-head'>
          <Text className='card-title'>3X10-2BT</Text>
          <Button type='info'>获取意向书</Button>
        </View>
        <View className='card-content'>
          {InfoList.map(item => (
            <Info key={item.name} label={item.name} />
          ))}
        </View>
      </View>
    </BasicLayout>
  );
};

export default DetailPage;
