const initialState = {
    todos:['get bmw','moksha fee','manu bus fee']
}
function todolistReducer(state=initialState,action){
   
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}
export default todolistReducer