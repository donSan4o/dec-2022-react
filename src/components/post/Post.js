import React from 'react';

const Post = ({ value, lift }) => {
    return (
        <div className='post-item'>
            <p>Post ID - {value.id}</p>
            <p>{value.title}</p>
            <button onClick={() => lift(value)}>Show Post</button>
        </div>
    );
};

export default Post;
