import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    nextPage: null,
    prevPage: null
}

const slice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            const {results, info: {prev, next}} = action.payload;
            state.characters = results
            state.prevPage = prev
            state.nextPage = next
        }
    }
})

const {reducer:characterReducer, actions} = slice;

const charactersActions = {
    ...actions
}

export {
    characterReducer,
    charactersActions
}