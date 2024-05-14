import axios from 'axios'

export function addTodo(newtodo){
    return {type:'ADDTODO',payload:newtodo}
}

export function addToCart(product){
    return {type:"ADDTOCART",payload:product}
}

export function incrementCounter(){
    return {type:'INCREMENT'}
}
export function decrementCounter(){
    return {type:'DECREMENT'}
}

export function getAllCountries(){
    return (dispatch)=>{
        dispatch({type:'UPDATELOADING',payload:true})
        axios.get("https://restcountries.com/v3/all")
        .then((res)=>{
            return dispatch({type:'LOADCOUNTRIES',payload:res.data})
        })
    }
}