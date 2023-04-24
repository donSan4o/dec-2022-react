import React, { useState, useEffect } from 'react';
import ApiService from '../../services/api.service';
import { useParams } from 'react-router-dom';

const CommentDetails = () => {
    let [comment, setComment] = useState({});
    let apiService = new ApiService('comments');
    let {id} = useParams();
    useEffect(() => {
        apiService.getSingleData(id).then(value => setComment({...value}))
        
    }, [id]);
    return (
        <div>
            { comment.body }
        </div>
    );
};

export default CommentDetails;
