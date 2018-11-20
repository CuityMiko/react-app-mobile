import React, {Component} from 'react'

import {WingBlank, WhiteSpace, NavBar, Icon} from 'antd-mobile'

import Student from './Student/Index'

import Student1 from './Student1/Index'

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
                    <Student1 />
                </WingBlank>
            </div>
        )
    }
}