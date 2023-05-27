import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface postType  {
    id: number,
    title: string,
    body: string,
    userId: number
}

const initialState : postType[] = [{
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}];

const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{
        addpost : (state,action) => {
            state.push({id: new Date().getSeconds(),title: action.payload.title,body:action.payload.post,userId:1})
        },
        deletepost : (state,action) => {
            state.splice(action.payload.index,action.payload.index+1)
        }
    }
})

export const {addpost,deletepost} = postSlice.actions

export const selectPost = (state:RootState) => state.posts;

export default postSlice.reducer;