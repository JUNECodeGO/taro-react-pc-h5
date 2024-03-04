/** @format */
import React from 'react';

import {Row, Col} from 'antd';
import {FootList} from './constants';

import './index.scss';

const Footer = () => {
  return (
    <Row className='home-footer' gutter={16}>
      {FootList.map(item => (
        <Col key={item.title} xs={24} md={6} lg={6} xl={6}>
          <div className='home-footer-title'>{item.title}</div>
          {item.items.map(data => {
            if (data.link) {
              return (
                <a
                  href={data.link}
                  key={data.title}
                  className='home-footer-sub'>
                  {data.title}
                </a>
              );
            }
            return (
              <div key={data.title} className='home-footer-sub'>
                {data.title}
              </div>
            );
          })}
        </Col>
      ))}
    </Row>
  );
};

export default React.memo(Footer);
