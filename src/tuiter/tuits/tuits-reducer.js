import {createSlice} from "@reduxjs/toolkit";
import tuits from '../data/posts.json'


const currentUser = {
    'userName': 'Hermione Granger',
    'handle': '@hgranger',
    'image':'hg',
};

const templateTuit = {
    ...currentUser,
    'topic': 'Magic',
    'time': '2h',
    'liked': false,
    'replies': 0,
    'retuits': 0,
    'likes': 0,
}

const tuitsSlice = createSlice({
    name:'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action){
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        }
    }

    }
);

export const{createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer