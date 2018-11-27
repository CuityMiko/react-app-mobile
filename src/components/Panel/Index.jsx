import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './panel.less'

export default class Panel extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        headerButtons: PropTypes.element.isRequired,
        footerButtons: PropTypes.node.isRequired
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {this.props.headerButtons}
                <hr/>
                <div style={{width: 75}}>
                    <button className='panebtn'></button>
                    {this.props.children}
                </div>
                <div>
                    {this.props.footerButtons}
                </div>
            </div>
        )
    }
}