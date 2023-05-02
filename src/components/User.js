import React, { Component } from 'react'

class User extends Component {
    render() {
        const {id, name, email} = this.props.user;
        return (
            <div className='list-item'>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
            </div>
        )
    }
}

export default User