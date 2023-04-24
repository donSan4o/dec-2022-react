import React from 'react';

const Todo = ({item}) => {
    return (
        <div className='list-item'>
            {item.id} - {item.title}
        </div>
    );
}

export default Todo;
