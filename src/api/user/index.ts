/** @format */

import {http} from '@/api';
import {UserInfo} from './dto';
// 登录
export const loginAPI = data =>
  http<{token: string}>('POST', '/wx_signin', data);

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
export const updatePwdAPI = data =>
  http('PUT', '/user/profile/updatePwd', data);

export const getVerification = () => http('POST', '/verification');
