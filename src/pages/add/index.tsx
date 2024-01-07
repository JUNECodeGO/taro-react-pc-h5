/** @format */

import Header from "@/components/Header";
import { View, Text } from "@tarojs/components";
import { Button, Form, Input } from "@nutui/nutui-react-taro";

import "./index.scss";

const AddPage = () => {
  return (
    <View>
      <Header />
      <Form
        labelPosition="right"
        footer={
          <>
            <Button block type="primary">
              Submit
            </Button>
          </>
        }
      >
        <View className="add-container">
          <View className="card">
            <Text>基本信息</Text>
            <Form.Item
              required
              label="Field A"
              name="username"
              rules={[
                { max: 5, message: "Field A cannot exceed 5 characters" },
                { required: true, message: "Please enter Field A" },
              ]}
            >
              <Input
                className="nut-input-text"
                placeholder="Please type in Field A"
                type="text"
              />
            </Form.Item>
          </View>
          <View className="card">
            <Text>信息录入</Text>
          </View>
        </View>
      </Form>
    </View>
  );
};

export default AddPage;
