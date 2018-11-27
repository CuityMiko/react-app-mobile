import React, {Component} from 'react'

import {WingBlank, WhiteSpace, NavBar, Icon} from 'antd-mobile'

// import Student from './Student/Index'

import Student1 from './Student1/Index'

import Login from './login/index'

import Panel from '../components/Panel/Index'

export default class App extends Component {
    state = {
        students: [],
    }

    handelHClick = () => {
        console.log('header组件按钮点击')
    }

    handelFClick = () => {
        console.log('footer组件按钮点击')
    }

    render() {
        const headerButtons = (
            <div>
                <button onClick={this.handelHClick}>按钮1</button>
                <button>按钮2</button>
                <button>按钮3</button>
            </div>
        )

        const footerButtons = (
            <div style={{textAlign: 'center'}}>
                <button onClick={this.handelFClick}>确定</button>
                <button>取消</button>
            </div>
        )
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
                    {/* <Student1 /> */}
                    <Panel title="panel标题" headerButtons={headerButtons} footerButtons={footerButtons}>
                        <div>
                            <h3>this is a body</h3>
                        </div>
                    </Panel>
                    {/* <Login name='新的'/> */}
                </WingBlank>
            </div>
        )
    }
}