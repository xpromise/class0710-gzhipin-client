import React, {Component} from 'react';
import {NavBar, InputItem, Button, List, TextareaItem } from 'antd-mobile';

import HeaderSelector from '../header-selector';

class LaobanInfo extends Component {
  render () {
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector />
        <InputItem>招聘职位:</InputItem>
        <InputItem>公司名称:</InputItem>
        <InputItem>职位薪资:</InputItem>
        <TextareaItem title="职位要求" rows={3} />
        <Button type="primary">保 存</Button>
      </div>
    )
  }
}

export default LaobanInfo;