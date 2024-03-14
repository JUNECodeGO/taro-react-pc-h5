/** @format */

import { Form } from "@nutui/nutui-react-taro";
import { Select } from "antd";
import "./index.scss";
interface Props {
  options: any[];
  onChange?: (val: any) => void;
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  rules?: any;
}
export default (props: Props) => {
  const { options = [], onChange, label, name, placeholder, ...rest } = props;

  return (
    <Form.Item label={label} name={name} {...rest}>
      <Select
        onChange={onChange}
        className="special_selection"
        placeholder={placeholder}
        options={
          options.map
            ? options.map(({ value, text }) => ({
                value,
                label: <span>{text}</span>,
              }))
            : []
        }
      />
    </Form.Item>
  );
};
