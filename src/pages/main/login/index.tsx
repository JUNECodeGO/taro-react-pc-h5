/** @format */
import {useCallback, useState} from 'react';
import {View, Text} from '@tarojs/components';
import {Radio, Button} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Taro from '@tarojs/taro';
import {getUserAPI, loginAPI, sessionAPI} from '@/api/user';
import {useStore} from '@/store';
import Navigator from '@/common/utils/navigator';

import './index.scss';
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;
  if (root.val === p.val || root.val === q.val) return root;
  let targetA = lowestCommonAncestor(root.left, p, q);
  let targetB = lowestCommonAncestor(root.right, p, q);

  // 在left
  if (targetA && !targetB) return targetA;
  // 在left
  if (!targetA && targetB) return targetB;
  if (!targetA && !targetB) return null;
  return root;
};
export default function Login() {
  const {
    useUserStore: {setToken, setUserInfo},
  } = useStore();
  const [checked, setChecked] = useState(true);

  const handleLogin = useCallback(async profile => {
    try {
      const loginInfo = await Taro.login();
      const user = await Taro.getUserInfo();
      const res =
        (await loginAPI({
          code: loginInfo?.code,
          encrypted_user_phone: profile?.encryptedData,
          iv_user_phone: profile?.iv,
          encrypted_user_info: user.encryptedData,
          iv_user_info: user.iv,
        })) || {};
      if (res && res?.code === 0) {
        const {data} = res || {};
        setToken(data.token);
        return true;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error, '+++');
      return null;
    }
  }, []);

  const handleSuccess = useCallback(async () => {
    try {
      Taro.showLoading;
      const res = await getUserAPI();
      if (res?.data) {
        setUserInfo(res.data);
      }
    } catch (error) {
      Taro.showToast({title: '刷新失败'});
    } finally {
      Taro.hideLoading();
    }
  }, []);

  const handleGetUserInfo = useCallback(async e => {
    if (!checked) {
      Taro.showToast({
        title: '您未同意并阅读用户协议和隐私政策',
        icon: 'none',
        duration: 2000,
      });
      return false;
    }
    Taro.showLoading({title: '授权中'});

    const result = await handleLogin(e.detail);
    Taro.hideLoading();
    if (result) {
      Taro.showToast({
        title: '登录成功',
        duration: 2000,
        icon: 'success',
      });

      Navigator.navigateBack({
        success: handleSuccess,
      });
    } else {
      Taro.showToast({
        title: '授权失败, 请稍后再试',
        icon: 'none',
        duration: 2000,
      });
    }
  }, []);

  const handleCheck = useCallback(() => {
    setChecked(pre => !pre);
  }, []);

  return (
    <LoginSignInWrapper>
      <View className='login-component wx'>
        <Text className='title'>欢迎登录</Text>
        <Button
          className='wx-button'
          type='primary'
          openType='getPhoneNumber'
          onGetPhoneNumber={handleGetUserInfo}>
          微信一键登录
        </Button>
        <View className='forget '>
          <Radio checked={checked} onChange={handleCheck} />
          <Text className='forget-tip'>
            若手机号未注册则进入注册流程，注册即为同意《用户注册协议》《隐私政策》
          </Text>
        </View>
      </View>
    </LoginSignInWrapper>
  );
}
