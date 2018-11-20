import React from 'react'

export default class LoginForm extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <h3>这是个button</h3>
                {this.props.children}
            </div>
        )
    }
}