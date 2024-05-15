import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    todos:['get icecream','pay electricity bill','goto goa']
}
var todoSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})

export const {addTodo}=todoSlice.actions;
export default todoSlice.reducer;