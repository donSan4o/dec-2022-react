import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commentService } from '../services';
import { commentActions } from '../redux/slices';
import { Comment } from './Comment';

const Comments = () => {
    const dispatch = useDispatch();
    const { comments } = useSelector((state) => state.comments);

    useEffect(() => {
        commentService
            .getAll()
            .then((value) => value.data)
            .then((value) => dispatch(commentActions.setAll(value)));
    }, [dispatch]);
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export { Comments };
