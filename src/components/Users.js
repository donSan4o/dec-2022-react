import React, { Component } from 'react';
import { userService } from '../services/user.service';
import User from './User';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        userService.getAll().then(value => value.data).then(value => this.setState({users: value}))
    }
    
    render() {
        return (
            <div className='list'>
                {
                    this.state.users.map(user => <User key={user.id} user={user} /> )
                }
            </div>
        );
    }
}

export default Users;
