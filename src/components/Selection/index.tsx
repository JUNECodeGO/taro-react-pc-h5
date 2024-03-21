/** @format */

import {ArrowRight} from '@nutui/icons-react-taro';
import {Cell, Form, Picker} from '@nutui/nutui-react-taro';

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
  const {options, onChange, label, name, placeholder, ...rest} = props;

  return (
    <Form.Item
      label={label}
      name={name}
      className='add-form-item'
      trigger='onConfirm'
      getValueFromEvent={(...args) => args[1]}
      onClick={(event, ref: any) => {
        ref.open();
      }}
      {...rest}>
      <Picker options={[options]} onChange={onChange}>
        {(value: any) => {
          return (
            <Cell
              style={{
                padding: 0,
                '--nutui-cell-divider-border-bottom': '0',
              }}
              className='nutui-cell--clickable'
              title={
                value.length
                  ? options.filter(po => po.value === value[0])[0]?.text
                  : placeholder
              }
              extra={<ArrowRight />}
              align='center'
            />
          );
        }}
      </Picker>
    </Form.Item>
  );
};
