import React, {Component} from 'react'

import {List} from 'antd-mobile'
import StuItem from './StuItem'
import PropTypes from 'prop-types'

export default class StuList extends Component {

    static propTypes = {
        students: PropTypes.array.isRequired,
        delStudent: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <List>
                    {
                        this.props.students.map((item, index) => (
                            <StuItem student={item} key={index} index={index} delStudent={this.props.delStudent}/>
                        ))
                    }
                </List>
            </div>
        )
    }
}