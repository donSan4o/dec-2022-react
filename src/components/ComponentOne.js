import React from 'react';
import { count1Actions } from '../redux';
import { useDispatch } from 'react-redux';

const ComponentOne = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(count1Actions.inc())}>Increment</button>
            <button onClick={() => dispatch(count1Actions.dec())}>Decrement</button>
            <button onClick={() => dispatch(count1Actions.reset())}>Reset</button>
        </div>
    );
};

export { ComponentOne };
