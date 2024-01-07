import { isH5 } from "@/common/utils";

const MenuListPC = [
  {
    key: "资源检索",
    label: "资源检索",
  },
  {
    key: "数据中心",
    label: "数据中心",
  },
  {
    key: "资源管理",
    label: "资源管理",
  },
  {
    key: "科研项目汇交",
    label: "科研项目汇交",
  },
];

const MenuListMini = [
  {
    key: "种植首页",
    label: "种植首页",
  },
  {
    key: "数据中心",
    label: "数据中心",
  },
  {
    key: "资源管理",
    label: "资源管理",
  },
  {
    key: "科研项目汇交",
    label: "科研项目汇交",
  },
];

export const MenuList = isH5 ? MenuListPC : MenuListMini;
