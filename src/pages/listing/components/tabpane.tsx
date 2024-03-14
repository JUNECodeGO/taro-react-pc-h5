/** @format */
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { searchListAll, searchListMine } from "@/api/search";
import Taro from "@tarojs/taro";
import Table from "@/components/Table";
import Filter, { FilterForm } from "@/components/Filter";
import { Form } from "@nutui/nutui-react-taro";
import { TableTabType } from "@/common/type";
import { useRouter } from "@tarojs/taro";
import Navigator from "@/common/utils/navigator";
import { createEventHook } from "@/common/event";

interface TabPaneProps {
  tab: TableTabType;
  changePopupVisible: (e: any) => void;
  selectedOption?: string;
  handleClean?: () => void;
}
const TabPane = React.memo(
  React.forwardRef((props: TabPaneProps, ref) => {
    const { tab, changePopupVisible, selectedOption, handleClean } = props;
    const [data, setData] = useState<any>([]);
    const [form] = Form.useForm();
    const currentFilterParams = useRef({});
    const router = useRouter();
    const initParams = Navigator.serialize(router.params) || {};

    const [pageParams, setPageParams] = useState({
      current: 1,
      pageSize: 5,
      total: 0,
    });

    const fetchList = useCallback(
      async (params?: any) => {
        try {
          Taro.showLoading();
          const { current = 1, cleanSelect, ...rest } = params || {};
          const { pageSize } = pageParams;
          const fn = tab === TableTabType.ALL ? searchListAll : searchListMine;
          const values = {
            ...rest,
            ...(cleanSelect
              ? { type: undefined, states: undefined, holders: undefined }
              : {}),
          };
          const res = await fn({
            page_num: current,
            page_size: pageSize,
            ...values,
          });

          if (res && !res.code) {
            currentFilterParams.current = values;
            const { lists = [], counts = "0" } = res.data || {};
            setData(lists);
            setPageParams((pre) => ({
              ...pre,
              ...params,
              current,
              total: +counts,
            }));
          }
        } catch (error) {
        } finally {
          Taro.hideLoading();
        }
      },
      [tab, pageParams]
    );

    const handleSearch = useCallback(
      (values) => {
        const allValues = { ...currentFilterParams.current, ...values };
        fetchList(allValues);
      },
      [fetchList]
    );

    const handleRemoveSelection = useCallback(() => {
      handleClean?.();
      fetchList({ cleanSelect: true, ...currentFilterParams.current });
    }, [handleClean, fetchList]);

    const handleTableChange = useCallback(
      (current) => {
        try {
          fetchList({ current, ...currentFilterParams.current });
        } catch (error) {}
      },
      [pageParams, fetchList]
    );

    const handleReset = useCallback(() => {
      form.resetFields();
      handleClean?.();
      fetchList();
    }, []);

    useEffect(() => {
      if (tab === TableTabType.ALL && Object.values(initParams).length) {
        fetchList(initParams);
        form.setFieldsValue(initParams);
      } else {
        fetchList();
      }
    }, []);

    useImperativeHandle(ref, () => ({
      handleSearch: handleSearch,
      handleReset: handleReset,
    }));

    createEventHook("MY_REFRESH")(fetchList);

    return (
      <>
        <Filter
          handleSubmit={() => {
            form.submit();
          }}
          total={pageParams.total}
          tab={tab}
          selectedOption={selectedOption}
          handleClean={handleRemoveSelection}
          handleReset={handleReset}
        />
        <FilterForm
          tab={tab}
          changePopupVisible={changePopupVisible}
          form={form}
          handleSearch={handleSearch}
        />
        <Table
          data={data}
          setData={setData}
          tab={tab}
          handleTableChange={handleTableChange}
          pageParams={pageParams}
        />
      </>
    );
  })
);

export default TabPane;
