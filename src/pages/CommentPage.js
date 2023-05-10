import React from 'react';
import { Comments } from '../components/Comments';
import { CommentForm } from '../components/CommentForm';

const CommentPage = () => {
    return (
        <div>
            <CommentForm/>
            <Comments/>
        </div>
    );
}

export {CommentPage};
