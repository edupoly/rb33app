const initialState = {
    countries:[],
    isLoading:true
}
const countriesReducer=(state=initialState,action)=>{
    if(action.type=='LOADCOUNTRIES'){
        return {...state,countries:action.payload,isLoading:false}
    }
    if(action.type==='UPDATELOADING'){
        return {...state,isLoading:action.payload}
    }
    return state
}
export default countriesReducer;