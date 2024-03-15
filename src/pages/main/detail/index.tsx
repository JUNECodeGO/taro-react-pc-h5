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
  {name: '种质编号', value: 'enumber'},
  {name: '作物（植物类别)', value: 'cate_name_cn'},
  {name: '作（植）名称', value: 'cate1'},
  {name: '种质名称', value: 'germ_name'},
  {name: '科名', value: 'family'},
  {name: '学名', value: 'scientific_name'},
  {name: '主要特性', value: 'ZX'},
  {name: '保存圃', value: 'nursery_name'},
  {name: '收集时间', value: 'created'},
  {name: '资源描述', value: 'note'},
  {name: '种质图片', value: ''},
];
const Info = ({label, value}) => {
  return (
    <View className='card-info'>
      <Text className='label'>{label}</Text>
      <Text className='value'>{value}</Text>
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
      const res = await getCateDetail({id});
      Taro.hideLoading();
      if (res && !res.code) {
        const {data} = res;
        setData(data);
      }
    } catch (error) {
    } finally {
    }
  }, []);

  const handleJump = useCallback(() => {
    Navigator.navigateTo('main/apply', {
      id,
      name: data?.germ_name,
    });
  }, [id, data]);

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
          <Text className='card-title'>{data?.germ_name || '-'}</Text>
          <Button type='info' onClick={handleJump}>
            获取意向书
          </Button>
        </View>
        <View className='card-content'>
          {InfoList.map(item => (
            <Info
              key={item.name}
              label={item.name}
              value={data?.[item.value] || '未知'}
            />
          ))}
        </View>
      </View>
    </BasicLayout>
  );
};

export default DetailPage;
