import { createSlice } from '@reduxjs/toolkit'
const initialState={
    countries:[]
}
export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers:{
        updateCoutries:(state,action)=>{
            state.countries=action.payload
        }
    }
})
export var {updateCoutries} = countriesSlice.actions;
export default countriesSlice.reducer