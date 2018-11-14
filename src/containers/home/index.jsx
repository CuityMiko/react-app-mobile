import React, {Component} from 'react'

export default class Home extends Component {
    state = {
        title: '首页'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}