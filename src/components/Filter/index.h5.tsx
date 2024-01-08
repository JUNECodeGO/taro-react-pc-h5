/** @format */

import {Button, Col, Form, Input, Row} from 'antd';
import './index.h5.scss';

const Filter = props => {
  return (
    <div className='filter-container'>
      <div></div>
      <div className='filter'>
        <div className='filter-header'>
          <Form>
            <Row gutter={24} wrap>
              <Col span={8}>
                <Form.Item label='名称' name='username'>
                  <Input placeholder='请输入字段A' type='text' />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label='特性' name='username'>
                  <Input placeholder='请输入字段A' type='text' />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label='用途' name='username'>
                  <Input placeholder='请输入字段A' type='text' />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label='描述' name='username'>
                  <Input placeholder='请输入字段A' type='text' />
                </Form.Item>
              </Col>
            </Row>
            <div className='filter-header-button'>
              <Button>重置</Button>
              <Button type='primary'>搜索</Button>
            </div>
          </Form>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Filter;
