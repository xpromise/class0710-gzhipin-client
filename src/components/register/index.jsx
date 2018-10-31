import React, {Component} from 'react';
import {NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Radio} from 'antd-mobile';

import Logo from '../logo';

const Item = List.Item;

class Register extends Component {
  state = {
    username: '',
    password: '',
    rePassword: '',
    type: 'laoban'
  }
  
  /*setUsername = val => {
    //更新状态
    this.setState({
      username: val
    })
  }
  
  setPassword = val => {
    this.setState({
      password: val
    })
  }*/
  
  handleChange = (name, val) => {
    //更新状态
    this.setState({
      [name]: val
    })
  }
  
  register = () => {
    //获取表单数据
    const {username, rePassword, password, type} = this.state;
    console.log(username, rePassword, password, type);
    //发送ajax请求
  }
  
  goLogin = () => {
    //跳转到登录路由，编程式导航
    this.props.history.replace('/login');  //替换浏览历史记录
  }
  
  render () {
    const {type} = this.state;
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
              <InputItem
                placeholder="请输入确认密码"
                type="password"
                onChange={val => this.handleChange('rePassword', val)}>确认密码：</InputItem>
              <WhiteSpace />
              <Item>
                用户类型： &nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={type === 'dashen'}
                  onClick={() => this.handleChange('type', 'dashen')}
                >大神</Radio> &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={type === 'laoban'}
                  onClick={() => this.handleChange('type', 'laoban')}
                >老板</Radio>
              </Item>
              <WhiteSpace />
              <Button type="primary" onClick={this.register}>注 册</Button>
              <WhiteSpace />
              <Button onClick={this.goLogin}>已有账户</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}

export default Register;