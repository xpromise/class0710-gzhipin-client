import React, {Component} from 'react';
import {NavBar, List, InputItem, Button, WingBlank, WhiteSpace} from 'antd-mobile';

import Logo from '../logo';
import {reqLogin} from '../../api';

class Register extends Component {
  state = {
    username: '',
    password: ''
  }
  
  handleChange = (name, val) => {
    //更新状态
    this.setState({
      [name]: val
    })
  }
  
  login = async () => {
    //获取表单数据
    const {username, password} = this.state;
    //发送ajax请求
    const data = await reqLogin({username, password});
    console.log(data);
  }
  
  goRegister = () => {
    //跳转到登录路由，编程式导航
    this.props.history.replace('/register');  //替换浏览历史记录
  }
  
  render () {
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo />
        <WingBlank>
          <form>
            <List>
              <WhiteSpace />
              <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
              <WhiteSpace />
              <InputItem
                placeholder="请输入密码"
                type="password"
                onChange={val => this.handleChange('password', val)}
              >密码：</InputItem>
              <WhiteSpace />
              <Button type="primary" onClick={this.login}>登 录</Button>
              <WhiteSpace />
              <Button onClick={this.goRegister}>没有账户</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Register;