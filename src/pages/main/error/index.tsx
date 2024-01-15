/** @format */

import {Result, Button} from 'antd';

export default function Error() {
  return (
    <Result
      status='500'
      title='500'
      subTitle='抱歉，平台发生错误请稍后再试'
      extra={<Button type='primary'>返回首页</Button>}
    />
  );
}
