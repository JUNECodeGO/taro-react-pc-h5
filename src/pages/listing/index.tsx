/** @format */
import Table from '@/components/Table';
import Filter from '@/components/Filter';
import BasicLayout from '@/components/BasicLayout';
import './index.scss';
import SideFilter from '@/components/SideFilter/index.h5';
import {isH5} from '@/common/utils';

const Index = () => {
  return (
    <BasicLayout title='资源列表' leftSlot={isH5 ? <SideFilter /> : null}>
      <Filter />
      <Table />
    </BasicLayout>
  );
};
export default Index;
