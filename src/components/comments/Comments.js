import {useEffect, useState} from 'react';
import ApiService from '../../services/api.service';
import { Outlet } from 'react-router-dom';
import Comment from '../comment/Comment';

const Comments = () => {
    let apiService = new ApiService('comments');
    let [comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setComments([...value]))
    }, []);
    return (
        <div className='comments'>
            <div className='left'>
                <h3>Comments</h3>
                <div className="comments-wrapper">
                    {
                        comments.map(value => <Comment key={value.id} item={value}/>)
                    }
                </div>
            </div>
            <div className='right'>
                <h3>Comment Details</h3>
                <Outlet/>
            </div>
        </div>
    );
}

export default Comments;
