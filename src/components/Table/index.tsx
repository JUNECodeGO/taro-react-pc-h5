/** @format */

import { Button, Table as NutiTable } from "@nutui/nutui-react-taro";
import { useCallback, useMemo, useState } from "react";
import { View } from "@tarojs/components";
import { ArrowSize6 } from "@nutui/icons-react-taro";
import "./index.scss";

const Table = () => {
  const [data6, setData6] = useState([
    {
      name: "Tom",
      sex: "男",
      record: "小学",
      birthday: "2010-01-01",
      age: 10,
    },
    {
      name: "Lucy",
      sex: "女",
      record: "本科",
      birthday: "2000-01-01",
      age: 30,
    },
    {
      name: "Jack",
      sex: "男",
      record: "高中",
      birthday: "2020-01-01",
      age: 4,
    },
    {
      name: "Sara",
      sex: "女",
      record: "高中",
      birthday: "2020-01-01",
      age: 6,
    },
    {
      name: "Frank",
      sex: "男",
      record: "幼儿园",
      birthday: "2020-01-01",
      age: 3,
    },
    {
      name: "Tom",
      sex: "男",
      record: "小学",
      birthday: "2010-01-01",
      age: 10,
    },
    {
      name: "Lucy",
      sex: "女",
      record: "本科",
      birthday: "2000-01-01",
      age: 30,
    },
    {
      name: "Jack",
      sex: "男",
      record: "高中",
      birthday: "2020-01-01",
      age: 4,
    },
    {
      name: "Sara",
      sex: "女",
      record: "高中",
      birthday: "2020-01-01",
      age: 6,
    },
    {
      name: "Frank",
      sex: "男",
      record: "幼儿园",
      birthday: "2020-01-01",
      age: 3,
    },
    {
      name: "Tom",
      sex: "男",
      record: "小学",
      birthday: "2010-01-01",
      age: 10,
    },
    {
      name: "Lucy",
      sex: "女",
      record: "本科",
      birthday: "2000-01-01",
      age: 30,
    },
    {
      name: "Jack",
      sex: "男",
      record: "高中",
      birthday: "2020-01-01",
      age: 4,
    },
    {
      name: "Sara",
      sex: "女",
      record: "高中",
      birthday: "2020-01-01",
      age: 6,
    },
    {
      name: "Frank",
      sex: "男",
      record: "幼儿园",
      birthday: "2020-01-01",
      age: 3,
    },
    {
      name: "Tom",
      sex: "男",
      record: "小学",
      birthday: "2010-01-01",
      age: 10,
    },
    {
      name: "Lucy",
      sex: "女",
      record: "本科",
      birthday: "2000-01-01",
      age: 30,
    },
    {
      name: "Jack",
      sex: "男",
      record: "高中",
      birthday: "2020-01-01",
      age: 4,
    },
    {
      name: "Sara",
      sex: "女",
      record: "高中",
      birthday: "2020-01-01",
      age: 6,
    },
    {
      name: "Frank",
      sex: "男",
      record: "幼儿园",
      birthday: "2020-01-01",
      age: 3,
    },
  ]);

  const columnsStickRight = useMemo(
    () => [
      {
        title: "种质编号",
        key: "name",
        align: "center",
        width: 80,
      },
      {
        title: "作（植）物名称",
        key: "sex",
        width: 110,
      },
      {
        title: "种质名称",
        key: "record",
        width: 80,
      },
      {
        title: "科名",
        key: "birthday",
        width: 80,
      },
      {
        title: "属名或亚属名",
        key: "birthday",
        width: 100,
      },
      {
        title: "操作",
        key: "age",
        fixed: "right",
        width: 80,
        render: () => {
          return (
            <Button fill="none" size="mini">
              共享资源
            </Button>
          );
        },
      },
    ],
    []
  );

  const handleTableChange = useCallback(() => {}, []);

  return (
    <View className="table-wrapper">
      <View className="home-table">
        <NutiTable
          columns={columnsStickRight}
          data={data6}
          style={{ height: 350 }}
        />
        <View className="pagination">
          <ArrowSize6 size={12} className="pre" color="grey" />
          <ArrowSize6 size={12} className="next" />
        </View>
      </View>
    </View>
  );
};

export default Table;
