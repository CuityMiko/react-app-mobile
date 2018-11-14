import React, {Component} from 'react'

export default class Login extends Component {
    state = {
        title: '登录'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}