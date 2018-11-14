import React, {Component} from 'react'

export default class MemberInformation extends Component {
    state = {
        title: '个人信息'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}