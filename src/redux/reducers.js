/*
  reducers函数： 根据之前的状态和action来产生新的状态
 */

import {combineReducers} from 'redux';

const xxxState = 123;

function xxx(preState = xxxState, action) {
  switch (action.type) {
    default :
      return preState;
  }
}

const yyyState = [{}];

function yyy(preState = yyyState, action) {
  switch (action.type) {
    default :
      return preState;
  }
}

//如何暴露, 合并多个reducers函数
export default combineReducers({
  xxx,
  yyy
})
/*
  最终向外暴露： {xxx: xxx(), yyy: yyy()}
 */