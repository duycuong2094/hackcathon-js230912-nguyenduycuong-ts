import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import publicAxios from '../../config/public.config';
import { User } from '../../components/utils/user';
export const   getUsersApi:any=createAsyncThunk("users/getUsers",async()=>{
    const user=await publicAxios.get("api/v1/todo")
    return user.data.result
})
export const   AddUsersApi:any=createAsyncThunk("users/addUsers",async(todo)=>{
    await publicAxios.post("api/v1/todo",todo)
})

interface Todo{
    entities:User[]
}
const initialState:Todo={
    entities:[]
}
const todoSlice:any=createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers:(buider)=>{
        buider
        .addCase(getUsersApi.fulfilled,(state:Todo,action:PayloadAction<User[]>)=>{
            console.log(action.payload);
            state.entities=[...action.payload]
            
        })
        .addCase(AddUsersApi.fulfilled,(state:Todo,action:PayloadAction<any>)=>{
            state.entities
           
        })
    }
})
export default todoSlice.reducer