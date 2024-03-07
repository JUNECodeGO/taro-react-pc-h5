/** @format */

import {http} from '@/api';
import {CodeType, UserInfo} from './dto';
// 登录
export const loginAPI = data =>
  http<{token: string}>('POST', '/wx_signin', data);
// 获取sessionkey
export const sessionAPI = data =>
  http<{token: string; sessionKey: string}>('POST', '/wx_login', data);

// 登录
export const loginPCAPI = data =>
  http<{token: string}>('POST', '/signin_by_password', data);

// 快速登录
export const quickLoginAPI = data =>
  http<{phone: string; verificationCode: string}>('POST', '/signin', data);

// 获取用户信息(包含权限)
export const getUserAPI = () => http<UserInfo>('GET', '/get_userinfo');

// 修改个人基本信息
export const updateUserInfoAPI = data => http('POST', '/change_userinfo', data);

// 验证图片
export const captchaImageAPI = () => http('GET', '/user/captchaImage');

// 退出登录
export const logoutAPI = () => http('DELETE', '/user/logout');

// 获取用户信息
export const getProfileAPI = () => http('GET', '/user/profile');

// 头像上传
export const uploadAvatarAPI = (data: FormData) =>
  http('POST', '/user/profile/avatar', data);

// 修改密码
export const updatePwdAPI = data => http('POST', '/reset_password', data);

export const getVerification = (data: {type: CodeType; phone: string}) =>
  http('POST', '/verification', data);
