import React, {Component} from 'react'

import StuAdd from './components/StuAdd'
import StuList from './components/StuList'

export default class Student extends Component {
    state = {
        students: [
            {id: 1, name: 'zhangsan', age: 26}
        ]
    }

    addStudent = (student) => {
        const {students} = this.state
        if (students.length > 0) {
            student.id = students.sort((a, b) => (a.id - b.id))[0].id + 1
        } else {
            student.id = 1
        }
        students.unshift(student);
        this.setState({
            students
        })
        console.log(this.state.students);
    }

    delStudent = (index) => {
        const {students} = this.state
        students.splice(index, 1);
        this.setState({
            students
        })
    }

    render() {
        return (
            <div>
                <StuAdd students={this.state.students} addStudent={this.addStudent} />
                <StuList students={this.state.students} delStudent={this.delStudent} />
            </div>
        )
    }
}