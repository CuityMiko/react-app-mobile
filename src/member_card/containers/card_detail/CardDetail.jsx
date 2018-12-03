import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';

import './card_detail.less'

class CardDetail extends Component {
    state = {
        title: '会员卡详情'
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

export default CardDetail;