import { carReducer, commentReducer, userReducer } from "./slices";
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    users: userReducer,
    comments: commentReducer,
    cars: carReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}