/** @format */

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {Card} from 'antd';

const DetailPage = () => {
  return (
    <div className='detail-container'>
      <Header />
      <Card title='Default size card' className='card'>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Footer />
    </div>
  );
};

export default DetailPage;
