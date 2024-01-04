/** @format */

import {User} from '@nutui/icons-react-taro';
import {Avatar, Button, Input} from '@nutui/nutui-react-taro';
import {View, Text} from '@tarojs/components';

const LoginComponent = () => {
  return (
    <View>
      <View>
        <Avatar icon={<User />} shape='square' />
      </View>
      <View>
        <Text>用户名/手机号</Text>
        <Input />
      </View>
      <View>
        <Text>密码</Text>
        <Input />
      </View>
      <View>
        <Text>忘记密码</Text>
        <Text>没有账号？快速注册</Text>
      </View>
      <View>
        <Button>登录</Button>
      </View>
    </View>
  );
};

export default LoginComponent;
