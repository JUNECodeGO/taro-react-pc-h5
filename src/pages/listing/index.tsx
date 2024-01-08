/** @format */
import Filter from '@/components/Filter';
import Header from '@/components/Header';
import Table from '@/components/Table';
import {Button} from 'antd';

const Listing = () => {
  return (
    <div>
      <Header></Header>
      <div>资源列表</div>
      <Filter>
        <div>
          <Button>创建</Button>
        </div>
        <Table />
      </Filter>
    </div>
  );
};

export default Listing;
