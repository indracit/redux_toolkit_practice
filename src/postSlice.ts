import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface postType  {
    id: number,
    title: string,
    body: string,
    userId: number
}

const initialState : postType[] = [];

const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{
        addpost : (state,action) => {
            state = [...state,{id: new Date().getSeconds(),title: action.payload.title,body:action.payload.post,userId:1}]
        },
        deletepost : (state,action) => {
            state = [...state.slice(0,action.payload.index),...state.slice(action.payload.index+1,state.length)]
        }
    }
})

export const {addpost,deletepost} = postSlice.actions

export const selectPost = (state:RootState) => state.posts;

export default postSlice.reducer;