import React, {Component} from 'react'
import {WhiteSpace} from 'antd-mobile'

import './home.less'

export default class Home extends Component {
    state = {
        title: '首页'
    }

    render() {
        const {title} = this.state;
        const {params, query} = this.props;
        return (
            <div>
                <h3>
                    {title}
                </h3>
                <h3>
                    <span>params.mid：{params.mid}</span>
                    <WhiteSpace />
                    <span>query.name：{query.name}</span>
                </h3>
            </div>
        )
    }
}