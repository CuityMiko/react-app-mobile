import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';

import './oil_detail.less'

class OilDetail extends Component {
    state = {
        title: '油卡详情'
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

export default OilDetail;