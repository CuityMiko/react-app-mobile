import React, {Component} from 'react'

export default class NotFound extends Component {
    state = {
        title: '404页'
    }

    render() {
        return (
            <div>{this.state.title}</div>
        )
    }
}