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