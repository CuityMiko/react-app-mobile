import React, {Component} from 'react'

import LoginForm from './components/LoginForm'
import {Button, WhiteSpace} from 'antd-mobile'

import Proptypes from 'prop-types'

export default class Login extends Component {

    static proptypes = {
        name: Proptypes.string.isRequired
    }

    static defaultProps = {
        name: '自定义'
    }

    state = {
        title: '登录'
    }

    render() {
        return (
            <div>
                {this.state.title}
                <hr />
                <LoginForm>
                    <WhiteSpace/>
                    <Button type='primary'>{this.props.name}&nbsp;点&nbsp;击&nbsp;按&nbsp;钮</Button>
                </LoginForm>
            </div>
        )
    }
}