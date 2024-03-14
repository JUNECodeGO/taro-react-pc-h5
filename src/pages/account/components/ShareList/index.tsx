/** @format */
import CTable from "@/components/CTable";
import { useCallback } from "react";

const columnsStickRight = [
  {
    title: "圃编号",
    key: "id",
    width: "70px",
  },
  {
    title: "作物名称",
    key: "zuowuname",
    width: "80px",
  },
  {
    title: "所属单位",
    key: "ownercompany",
    width: "100px",
  },
  {
    title: "提供时间",
    key: "tgtime",
    width: "100px",
  },
  {
    title: "提供数量",
    key: "tgnum",
    width: "60px",
  },
  {
    title: "提供形态",
    key: "tgwzxt",
    width: "100px",
  },
  {
    title: "利用单位",
    key: "usecompany",
    width: "100px",
  },
  {
    title: "联系电话",
    key: "mobile",
    width: "100px",
  },
  {
    title: "地址",
    key: "address",
    width: "100px",
  },
  {
    title: "利用目的",
    key: "usepurpose",
    width: "100px",
  },
  {
    title: "利用材料",
    key: "usematerial",
    width: "100px",
  },
];

export default ({ fetchShareList, pageParams, data }) => {
  const handleTableChange = useCallback(
    (props) => {
      fetchShareList(props);
    },
    [pageParams]
  );

  return (
    <CTable
      columns={columnsStickRight}
      data={data}
      style={{ minHeight: 200 }}
      handleTableChange={handleTableChange}
      pageParams={pageParams}
    />
  );
};
