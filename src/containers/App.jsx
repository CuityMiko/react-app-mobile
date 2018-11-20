import React, {Component} from 'react'

import {WingBlank, WhiteSpace, NavBar, Icon} from 'antd-mobile'

import Student from './Student/Index'

export default class App extends Component {
    state = {
        students: [],
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    // icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="ellipsis" />
                    ]}>组件通信</NavBar>
                <WingBlank size='lg'>
                    <WhiteSpace size="lg" />
                    <Student />
                </WingBlank>
            </div>
        )
    }
}