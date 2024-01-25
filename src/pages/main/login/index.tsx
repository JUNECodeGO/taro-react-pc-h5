/** @format */
import {View, Text, Button} from '@tarojs/components';
import {Radio} from '@nutui/nutui-react-taro';
import LoginSignInWrapper from '@/components/LoginSignInWrapper';
import Taro from '@tarojs/taro';

import {useCallback, useState} from 'react';

import './index.scss';
import {loginAPI} from '@/api/user';

export default function Login() {
  const [checked, setChecked] = useState(false);

  const handleGetUserInfo = useCallback(async () => {
    if (!checked) {
      Taro.showToast({
        title: '您未同意并阅读用户协议和隐私政策',
        icon: 'none',
        duration: 1000,
      });
      return false;
    }

    try {
      Taro.showLoading({title: '授权中'});
      const loginInfo = await Taro.login();
      const profile = (await Taro.getUserInfo()) || {};
      const res =
        (await loginAPI({
          code: loginInfo?.code,
          encrypted_data: profile.encryptedData,
          iv: profile.iv,
        })) || {};
      console.log(res);
      if (res?.code === 0) {
        //   storage.setUserToken(data.token);
        //   this.options.success({code: 0});
      } else {
        // this.options.success({code: 1001});
      }
      return;
    } catch (e) {
      Taro.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 1000,
      });
      // this.options.success({code: 1002});
    } finally {
      Taro.hideLoading();
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
          openType='getUserInfo'
          onGetUserInfo={handleGetUserInfo}>
          微信一键登录
        </Button>
        <View className='forget '>
          <Radio checked={checked} onChange={handleCheck} />
          <Text>
            若手机号未注册则进入注册流程，注册即为同意《用户注册协议》《隐私政策》
          </Text>
        </View>
      </View>
    </LoginSignInWrapper>
  );
}
