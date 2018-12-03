import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';

import './activation.less'

class Activation extends Component {
    state = {
        title: '油卡激活'
    }
    
    render() {
        const {title} = this.state;
        return (
            <div>
                <WhiteSpace size="lg" />
                <h3>{title}</h3>
            </div>
        );
    }
}

export default Activation;