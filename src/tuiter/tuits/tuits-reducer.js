import {createSlice}
    from "@reduxjs/toolkit";
import tuits from '../data/posts.json';
import {deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
        name: 'tuits',
        initialState,
        extraReducers: {
            [findTuitsThunk.pending]:
                (state) => {
                    state.loading = true
                    state.tuits = []
                },
            [findTuitsThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.tuits = payload
                },
            [findTuitsThunk.rejected]:
                (state) => {
                    state.loading = false
                },
            [deleteTuitThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.tuits = state.tuits
                        .filter(t => t._id !== payload)
                },
            [createTuitThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false

                    state.tuits.push(payload)
                },
            [updateTuitThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    const tuitNdx = state.tuits
                        .findIndex((t) => t._id === payload._id)
                    state.tuits[tuitNdx] = {
                        ...state.tuits[tuitNdx],
                        ...payload
                    }
                }


        },



            reducers: {
        createTuit(state, action) {

        },
        deleteTuit(state, action){

        }
    }



    }
);

export const{createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer


