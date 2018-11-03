/*
  action creators模块：用来创建action对象的工厂函数模块
    - 同步action creator： 返回值是action对象
    - 异步action creator： 返回值是一个回调函数
 */

import {reqLogin, reqRegister, reqUpdateUserInfo, reqGetUserInfo, reqGetUserList} from '../api';
import {ERR_MSG, AUTH_SUCCESS, UPDATE_USER, RESET_USER, RESET_USER_LIST, UPDATE_USER_LIST} from './action-types';

//同步action   注册成功   action-types有几个值，actions中就有几个同步action
export const authSuccess = user => ({type: AUTH_SUCCESS, data: user});

//同步action  注册失败
export const errMsg = msg => ({type: ERR_MSG, data: msg});

//同步action  更新用户信息数据成功
export const updateUser = user => ({type: UPDATE_USER, data: user});

//同步action  更新用户信息数据失败
export const resetUser = msg => ({type: RESET_USER, data: msg});

//同步action  更新用户列表数据成功
export const updateUserList = userlist => ({type: UPDATE_USER_LIST, data: userlist});

//同步action  更新用户列表数据失败
export const resetUserList = msg => ({type: RESET_USER_LIST, data: msg});

//注册的异步的action
export const register = data => {
  //data 用户提交的请求参数
  //表单验证  同步方式
  const {username, password, rePassword, type} = data;
  if (!username) {
    return errMsg({username, password, msg: '请输入用户名'});
  } else if (!password) {
    return errMsg({username, password, msg: '请输入密码'});
  } else if (password !== rePassword) {
    return errMsg({username, password, msg: '两次密码输入不一致，请重新输入'});
  } else if (!type) {
    return errMsg({username, password, msg: '请选择账号类型'});
  }
  //异步的方法
  return dispatch => {
    //表单验证
    /*const {username, password, rePassword, type} = data;
    if (!username) {
      return dispatch(errMsg({username, password, msg: '请输入用户名'}));
    } else if (!password) {
      return dispatch(errMsg({username, password, msg: '请输入密码'}));
    } else if (password !== rePassword) {
      return dispatch(errMsg({username, password, msg: '两次密码输入不一致，请重新输入'}));
    } else if (!type) {
      return dispatch(errMsg({username, password, msg: '请选择账号类型'}));
    }*/
    
    //发送ajax
    reqRegister(data)
      .then(res => {
        //请求成功
        const result = res.data;  // res {header: {}, data: {响应数据}}
        if (result.code === 0) {
          //注册成功
          dispatch(authSuccess(result.data));  // result.data响应信息中的用户信息
        } else {
          console.log(result.msg);
          //注册失败
          dispatch(errMsg({msg: result.msg, username: data.username, type: data.type}));
        }
      })
      .catch(err => {
        //请求失败
        //注册失败
        dispatch(errMsg({msg: '网络不稳定，请重新试试~', username: data.username, type: data.type}));
      })
  }
}

//登录的异步的action
export const login = data => {
  //data 用户提交的请求参数
  //表单验证  同步方式
  const {username, password} = data;
  if (!username) {
    return errMsg({msg: '请输入用户名'});
  } else if (!password) {
    return errMsg({msg: '请输入密码'});
  }
  //异步的方法
  return dispatch => {
    //表单验证
    /*const {username, password, rePassword, type} = data;
    if (!username) {
      return dispatch(errMsg({username, password, msg: '请输入用户名'}));
    } else if (!password) {
      return dispatch(errMsg({username, password, msg: '请输入密码'}));
    } else if (password !== rePassword) {
      return dispatch(errMsg({username, password, msg: '两次密码输入不一致，请重新输入'}));
    } else if (!type) {
      return dispatch(errMsg({username, password, msg: '请选择账号类型'}));
    }*/
    
    //发送ajax
    reqLogin(data)
      .then(res => {
        //请求成功
        const result = res.data;  // res {header: {}, data: {响应数据}}
        if (result.code === 0) {
          //注册成功
          dispatch(authSuccess(result.data));  // result.data响应信息中的用户信息
        } else {
          console.log(result.msg);
          //注册失败
          dispatch(errMsg({msg: result.msg}));
        }
      })
      .catch(err => {
        //请求失败
        //注册失败
        dispatch(errMsg({msg: '网络不稳定，请重新试试~'}));
      })
  }
}

//更新用户数据的异步的action
export const updateUserInfo = data => {
  //data 用户提交的请求参数
  //表单验证  同步方式
  const {header, post, company, salary, info, type} = data;
  if (!header) {
    return resetUser({msg: '请选择头像'});
  } else if (!post) {
    return resetUser({msg: type === 'laoban' ? '请输入招聘职位' : '请输入应聘职位'});
  } else if (!info) {
    return resetUser({msg: type === 'laoban' ?  '请输入公司简介' : '请输入个人简介'});
  }
  
  if (type === 'laoban') {
    if (!company) {
      return resetUser({msg: '请输入公司名称'});
    } else if (!salary) {
      return resetUser({msg: '请输入薪资范围'});
    }
  }

  
  //异步的方法
  return dispatch => {
    //发送ajax
    reqUpdateUserInfo(data)
      .then(res => {
        //请求成功
        const result = res.data;  // res {header: {}, data: {响应数据}}
        if (result.code === 0) {
          //注册成功
          dispatch(updateUser(result.data));  // result.data响应信息中的用户信息
        } else {
          //注册失败
          dispatch(resetUser({msg: result.msg}));
        }
      })
      .catch(err => {
        //请求失败
        //注册失败
        dispatch(resetUser({msg: '网络不稳定，请重新试试~'}));
      })
  }
}

//获取用户信息的异步action
export const getUserInfo = () => {
  return dispatch => {
    //发送请求
    reqGetUserInfo()
      .then(res => {
        const result = res.data;
        if (result.code === 0) {
          //请求成功
          dispatch(updateUser(result.data));
        } else {
          //请求失败
          dispatch(resetUser({msg: result.msg}));
        }
      })
      .catch(err => {
        
        dispatch(resetUser({msg: '网络不稳定，请重新试试~'}));
      })
  }
}

//获取用户列表数据的异步action
export const getUserList = type => {
  return dispatch => {
    //发送请求
    reqGetUserList(type)
      .then(res => {
        const result = res.data;
        if (result.code === 0) {
          //请求成功
          dispatch(updateUserList(result.data));
        } else {
          //请求失败
          dispatch(updateUserList({msg: result.msg}));
        }
      })
      .catch(err => {
        //请求失败
        dispatch(updateUserList({msg: '网络不稳定，请重新试试~'}));
      })
  }
}
