/*
  reducers函数： 根据之前的状态和action来产生新的状态
 */

import {combineReducers} from 'redux';
import {ERR_MSG, AUTH_SUCCESS, RESET_USER, UPDATE_USER, UPDATE_USER_LIST, RESET_USER_LIST} from './action-types';

import {getRedirectPath} from '../utils';

//初始化状态（今后reducer函数要管理的状态）
const initUserState = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
};

function user(preState = initUserState, action) {
  switch (action.type) {
    case AUTH_SUCCESS :
      return {...action.data, msg: '', redirectTo: getRedirectPath(action.data.type, action.data.header)}
    case ERR_MSG :
      // 在node中和浏览器端默认对象是不能使用... ，但是react脚手架项目，babel帮我让对象能够使用...
      return action.data;
    case UPDATE_USER :
      return action.data;
    case RESET_USER :
      return action.data;
    default :
      return preState;
  }
}

const initUserListState = [];
function userList(preState = initUserListState, action) {
  switch (action.type) {
    case UPDATE_USER_LIST :
      return action.data;
    case  RESET_USER_LIST :
      return action.data;
    default :
      return preState;
  }
}

//如何暴露, 合并多个reducers函数
export default combineReducers({
  user,
  userList
})
/*
  最终向外暴露： {xxx: xxx(), yyy: yyy()}
 */

