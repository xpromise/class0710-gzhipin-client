import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {NavBar} from 'antd-mobile'

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Personal from "../../containers/personal";
import Laoban from "../../containers/laoban";
import Dashen from "../../containers/dashen";
import Message from "../../containers/message";
import NavFooter from "../../components/nav-footer";

class Main extends Component {
  
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板',
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]
  
  
  
  render () {
    /*
    1. 本地没有cookie，跳转到登录页面（用户没有登录，一上来输入网址访问）
    2. 本地有cookie ， redux没有状态数据（用户登录了，刷新了页面），根据cookie发送请求请求当前用户的状态数据，保存在redux
    3. 本地有cookie ，并且redux有数据， 直接使用
   */
    // 1. 本地没有cookie，跳转到登录页面（用户没有登录，一上来输入网址访问）
    // 2. 本地有cookie ， redux没有状态数据（用户登录了，刷新了页面），根据cookie发送请求请求当前用户的状态数据，保存在redux
    // 3. 本地有cookie ，并且redux有数据， 直接使用
    
    const {navList} = this;
    //获取当前路由路径
    const {pathname} = this.props.location;
    //当前路由路径对应显示的nav对象
    const currentNav = navList.find(nav => pathname === nav.path);
    
    return (
      <div>
        {currentNav ? <NavBar>{currentNav.title}</NavBar> : ''}
        <Switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
        </Switch>
        <NavFooter navList={navList}/>
      </div>
    )
  }
}

export default Main;