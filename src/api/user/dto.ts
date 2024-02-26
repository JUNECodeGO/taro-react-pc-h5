/** @format */

export enum UserRole {
  Normal = '1',
  TOP = '2',
}

export interface UserInfo {
  avatar?: string;
  email?: string;
  nickname?: string;
  role: UserRole;
  username: string;
}

export enum CodeType {
  LOGIN = 1,
  PASSWORD = 2,
}
