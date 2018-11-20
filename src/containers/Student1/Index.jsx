import React, {Component} from 'react'

import StuAdd from './components/StuAdd'
import StuList from './components/StuList'

import {sub_addStudent, sub_delStudent} from './student.events'

export default class Student extends Component {
    state = {
        students: [
            {id: 1, name: 'zhangsan', age: 26}
        ]
    }

    componentDidMount() {
        var _self = this;
        sub_addStudent((student) => {
            const {students} = _self.state
            if (students.length > 0) {
                student.id = students.sort((a, b) => (a.id - b.id))[0].id + 1
            } else {
                student.id = 1
            }
            students.unshift(student);
            _self.setState({
                students
            })
        })

        sub_delStudent((index) => {
            const {students} = _self.state
            students.splice(index, 1);
            _self.setState({
                students
            })
        })
    }

    render() {
        return (
            <div>
                <StuAdd students={this.state.students} />
                <StuList students={this.state.students} />
            </div>
        )
    }
}