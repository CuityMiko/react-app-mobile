import React, {Component} from 'react'

export default class HomeComponent extends Component {
    state = {
        title: '首页-组件'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}