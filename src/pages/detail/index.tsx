/** @format */

import BasicLayout from '@/components/BasicLayout';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {Card} from 'antd';

const DetailPage = () => {
  return (
    <BasicLayout>
      <Card title='Default size card' className='card'>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Footer />
    </BasicLayout>
  );
};

export default DetailPage;
