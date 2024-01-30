import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer/todo.reducer"

const store=configureStore({
    reducer:{
        todoSlice
    }
})
export default store