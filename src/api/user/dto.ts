/** @format */

export enum UserRole {
  Normal = '1',
  TOP = '2',
}

export interface UserInfo {
  avatar?: string;
  email?: string;
  nickName?: string;
  role: UserRole;
  username: string;
}
