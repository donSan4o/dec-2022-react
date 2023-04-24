import React from 'react';
import { useNavigate } from 'react-router';

const Comment = ({ item }) => {
    let navigate = useNavigate();
    return (
        <div className='item'>
            {item.name} <button onClick={() => navigate(item.id.toString())}>Show more</button>
        </div>
    );
};

export default Comment;
