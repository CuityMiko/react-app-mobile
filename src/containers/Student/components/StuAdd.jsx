import React, {Component} from 'react'
import {Button, WhiteSpace, InputItem} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class StuAdd extends Component {

    static propTypes = {
        addStudent: PropTypes.func.isRequired
    }

    state = {
        name: '',
        age: ''
    }

    handleChange = (key, val) => {
        this.setState({
            [key]: val
        })
    }

    addStudent = () => {
        var {name, age} = this.state;
        var student = {
            name,
            age
        }
        this.props.addStudent(student);
        this.setState({
            name: '',
            age: ''
        })
    }

    render() {
        return (
            <div>
                <InputItem placeholder='请输入姓名' value={this.state.name} onChange={val => {this.handleChange('name', val)}}>姓&nbsp;名:</InputItem>
                <WhiteSpace/>
                <InputItem placeholder='请输入年龄' value={this.state.age} onChange={val => {this.handleChange('age', val)}}>年&nbsp;龄:</InputItem>
                <WhiteSpace/>
                <Button type='primary' onClick={this.addStudent}>添&nbsp;加</Button>
                <WhiteSpace/>
            </div>
        )
    }
}