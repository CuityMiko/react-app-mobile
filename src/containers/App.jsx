import React, {Component} from 'react'

import {Button, WingBlank, WhiteSpace, NavBar, Icon} from 'antd-mobile'

import Routes from '../routes/router';

export default class App extends Component {
    state = {
        title: '容器组件'
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="ellipsis" />
                    ]}>会员中心</NavBar>
                <WingBlank size='lg'>
                    <WhiteSpace size="lg" />
                    <Button type="primary">点击</Button>
                    <Routes />
                </WingBlank>
            </div>
        )
    }
}