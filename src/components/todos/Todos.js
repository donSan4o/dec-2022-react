import React, { useEffect, useState } from 'react';
import ApiService from '../../services/api.service';
import Todo from '../todo/Todo';

const Todos = () => {
    let apiService = new ApiService('todos');
    const [todos, setTodos] = useState([])
    useEffect(() => {
        apiService.getAllData().then(value => setTodos([...value]))
    }, []);
    return (
        <div>
            <h3>List of Todos</h3>
            {
                todos.map(value => <Todo key={value.id} item={value}/>)
            }
        </div>
    );
}

export default Todos;
