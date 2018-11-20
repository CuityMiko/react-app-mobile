import React, {Component} from 'react'

import {Button, List} from 'antd-mobile'

import PropTypes from 'prop-types'

import {pub_delStudent} from '../student.events'

const {Item} = List;

export default class StuItem extends Component {

    static propTypes = {
        index: PropTypes.number.isRequired,
        student: PropTypes.object.isRequired
    } 

    state = {

    }

    delstu = () => {
        pub_delStudent(this.props.index)
    }

    render() {
        return (
            <Item>
                <div style={{display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                    <span>姓名：{this.props.student.name}, 年龄：{this.props.student.age}</span><Button size='small' icon="cross-circle" style={{width: 50, marginLeft: 50}} onClick={this.delstu}></Button>
                </div>
            </Item>
        )
    }
}