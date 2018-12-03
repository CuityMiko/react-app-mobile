import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';

import './agreement.less'

class Agreement extends Component {
    state = {
        title: '会员协议'
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

export default Agreement;