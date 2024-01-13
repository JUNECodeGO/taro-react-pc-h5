import { ArrowUp2 } from "@nutui/icons-react-taro";
import { Collapse, Radio } from "@nutui/nutui-react-taro";
import { FilterCategory } from "./constants";
import { View } from "@tarojs/components";
import "./index.scss";

const SideFilter = (props) => {
  const { className = "" } = props;
  return (
    <View className={`side-filter ${className}`}>
      <Collapse defaultActiveName={["category"]}>
        {FilterCategory.map((filter) => (
          <Collapse.Item
            key={filter.name}
            title={filter.title}
            name={filter.name}
            expandIcon={<ArrowUp2 size="16" />}
          >
            <Radio.Group className="radio-wrapper">
              {filter.items.map((item) => (
                <Radio value={item.label} key={item.label}>
                  {item.label}
                </Radio>
              ))}
            </Radio.Group>
          </Collapse.Item>
        ))}
      </Collapse>
    </View>
  );
};

export default SideFilter;
