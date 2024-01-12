/** @format */
import Table from '@/components/Table';
import Filter from '@/components/Filter';
import BasicLayout from '@/components/BasicLayout';
import './index.scss';

const Index = () => {
  return (
    <BasicLayout title='资源列表'>
      <Filter />
      <Table />
    </BasicLayout>
  );
};
export default Index;
