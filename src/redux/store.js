import { carReducer } from "./slices";
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    cars: carReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}