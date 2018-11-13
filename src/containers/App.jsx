import React, {Component} from 'react'

import {Button} from 'antd-mobile'

export default class App extends Component {
    state = {
        title: '容器组件'
    }
    render() {
        return (
            <div>
                <Button type="primary">点击</Button>
            </div>
        )
    }
}