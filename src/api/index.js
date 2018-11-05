/*
  发送请求模块
 */

import ajax from './ajax';

//请求登录的函数
export const reqLogin = data => ajax('/login', data, 'POST');
//请求注册的函数
export const reqRegister = data => ajax('/register', data, 'POST');
//请求更新用户数据的函数
export const reqUpdateUserInfo = data => ajax('/update', data, 'POST');
//请求获取用户数据的函数
export const reqGetUserInfo = () => ajax('/user');
//请求获取用户列表数据的函数
export const reqGetUserList = type => ajax('/userlist', {type});
//请求获取当前用户聊天列表数据的函数
export const reqGetChatMsgs = () => ajax('/msglist');