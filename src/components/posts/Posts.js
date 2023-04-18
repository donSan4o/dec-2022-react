import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
const Posts = ({lift}) => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts);
            });
    }, []);
    return (
        <div className='left'>
            {
                posts.map((value, index) => 
                    <Post 
                        value={value} 
                        key={index}
                        lift={lift}
                    />)
            }
        </div>
    );
};

export default Posts;
