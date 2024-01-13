/** @format */

import { View } from "@tarojs/components";

import "./index.scss";

const LoginSignInWrapper = (props) => {
  return (
    <View className="login-container">
      <View className="content">{props.children}</View>
      <View className="pic" />
    </View>
  );
};

export default LoginSignInWrapper;
