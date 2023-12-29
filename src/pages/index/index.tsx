/** @format */

import {View} from '@tarojs/components';
import Header from '@/components/Header/index';
import Table from '@/components/Table';
import {Add} from '@nutui/icons-react-taro';
import Filter from '@/components/Filter';
import {Sticky} from '@nutui/nutui-react-taro';
import Layout from '@/components/Layout';
import './index.scss';

const Index = () => {
  return (
    <Layout>
      <View className='home'>
        <Header />
        <Filter />
        <Table />
        <Sticky threshold={57} position='bottom'>
          <View className='home-create-button'>
            <Add size='24' />
          </View>
        </Sticky>
      </View>
    </Layout>
  );
};
export default Index;
