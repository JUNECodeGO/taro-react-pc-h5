/** @format */

import {View} from '@tarojs/components';
// import Header from '@/components/Header';
import Table from '@/components/Table';
import {Add} from '@nutui/icons-react-taro';

import Filter from '@/components/Filter';
import './index.scss';

const Home = () => {
  return (
    <View className='home'>
      <View className='home-create-button'>
        <Add size='24' />
      </View>
      {/* <Header /> */}
      <Filter />
      <Table />
    </View>
  );
};
export default Home;
