/** @format */

import {Button, Result} from 'antd';

export default function NotFound() {
  return (
    <Result
      status='404'
      title='404'
      subTitle='抱歉，该页面不存在。'
      extra={<Button type='primary'>返回首页</Button>}
    />
  );
}
