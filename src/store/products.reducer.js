import details from './products.json';
const initialState={
    products:details.products,
    cart:[]
}
function productsReducer(state=initialState,action){
    if(action.type==='ADDTOCART'){
        return {...state,cart:[...state.cart,action.payload]}
    }
    return state
}
export default productsReducer;