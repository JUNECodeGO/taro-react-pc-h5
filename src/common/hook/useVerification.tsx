/** @format */
import {useCallback, useMemo, useRef, useState} from 'react';
import Taro from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import {Form, Input} from '@nutui/nutui-react-taro';
import {getVerification} from '@/api/user';

const useVerification = props => {
  const {form, type} = props;
  const [countDownInfo, setCountDownInfo] = useState({
    text: '获取验证码',
    count: 60,
    show: true,
  });
  const timer = useRef<any>();

  const handleGetMsg = useCallback(async () => {
    try {
      let count = countDownInfo.count;
      const phone = form.getFieldValue('phone');
      if (!phone) {
        Taro.showToast({
          title: '  请输入手机号！',
          duration: 2000,
          icon: 'error',
        });
      }
      await getVerification({
        type,
        phone,
      });

      // 60 秒倒计时
      timer.current = setInterval(() => {
        setCountDownInfo(pre => {
          const target = {...pre};
          if (target.count === 1) {
            target.count = 60;
            target.show = true;
            target.text = '获取验证码';
            clearInterval(timer.current);
          } else {
            target.show = false;
            target.count = count--;
            target.text = `${count}s`;
          }
          return target;
        });
      }, 1000);
    } catch (error) {
      Taro.showToast({
        title: '获取验证码失败，请稍后再试',
        duration: 2000,
        icon: 'error',
      });
    }
  }, [countDownInfo, form, type]);

  const Phone = useMemo(() => {
    return (
      <Form.Item
        required
        label='手机号'
        name='phone'
        rules={[
          {required: true, message: '请输入正确的电话号码'},
          {
            validator: (rule, value: string) => {
              return /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(
                value
              );
            },
            message: '请输入正确电话',
          },
        ]}>
        <Input
          className='nut-input-text'
          placeholder='请输入手机号'
          type='text'
        />
      </Form.Item>
    );
  }, []);

  const VerificationGroup = useMemo(() => {
    return (
      <View className='verification'>
        <Form.Item required label='验证码' name='verificationCode'>
          <Input
            className='nut-input-text'
            placeholder='请输入验证码'
            type='number'
          />
        </Form.Item>
        {countDownInfo.show ? (
          <View className='verification-text' onClick={handleGetMsg}>
            <Text>获取验证码</Text>
          </View>
        ) : (
          <View className='verification-text disabled'>
            <Text>{countDownInfo.text}</Text>
          </View>
        )}
      </View>
    );
  }, [countDownInfo, handleGetMsg]);

  return {
    Phone,
    VerificationGroup,
  };
};

export default useVerification;
