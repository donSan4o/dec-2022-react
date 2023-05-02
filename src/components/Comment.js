import React, { Component } from 'react'

class Comment extends Component {
    render() {
        const {name, email, body} = this.props.comment;
        return (
            <div className='list-item'>
                <div>{name}</div>
                <div>{email}</div>
                <div>{body}</div>
            </div>
        )
    }
}

export default Comment