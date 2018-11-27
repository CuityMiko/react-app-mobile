import React, {Component} from 'react'

import LoginForm from './components/LoginForm'
import {Button, WhiteSpace} from 'antd-mobile'

import PropTypes from 'prop-types'

export default class Login extends Component {

    static proptypes = {
        name: PropTypes.string.isRequired,
        // 数组定义数据类型
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        // 对象定义数据类型
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
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