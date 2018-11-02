/*
  action creators模块：用来创建action对象的工厂函数模块
    - 同步action creator： 返回值是action对象
    - 异步action creator： 返回值是一个回调函数
 */

import {reqLogin, reqRegister} from '../api';
import {ERR_MSG, AUTH_SUCCESS} from './action-types';

//同步action   注册成功   action-types有几个值，actions中就有几个同步action
export const authSuccess = user => ({type: AUTH_SUCCESS, data: user});

//同步action  注册失败
export const errMsg = msg => ({type: ERR_MSG, data: msg});

//注册的异步的action
export const register = data => {
  return dispatch => {
    //发送ajax
    reqRegister(data)
      .then(res => {
        //请求成功
        const result = res.data;
        if (result.code === 0) {
          //注册成功
          dispatch(authSuccess(result.data));
        } else {
          console.log(result.msg);
          //注册失败
          dispatch(errMsg(result.msg));
        }
      })
      .catch(err => {
        //请求失败
        //注册失败
        dispatch(errMsg('网络不稳定，请重新试试~'));
      })
  }
}

/*
  修改步骤：
  1. actions / action-types
  2. reducers
  3. 容器组件
  4. 入口文件
  5. UI组件
 */