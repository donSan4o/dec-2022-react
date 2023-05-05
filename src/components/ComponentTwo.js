import React from 'react';
import { useDispatch } from 'react-redux';
import { count2Actions } from '../redux';

const ComponentTwo = () => {
    const dispatch = useDispatch;
    return (
        <div>
            <button onClick={() => dispatch(count2Actions.inc())}>Increment</button>
            <button onClick={() => dispatch(count2Actions.dec())}>Decrement</button>
            <button onClick={() => dispatch(count2Actions.reset(555))}>Reset</button>
        </div>
    );
}

export {ComponentTwo};
