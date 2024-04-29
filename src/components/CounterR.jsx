import React, { useReducer } from 'react'
function reducer(state,action){
    if(action.type==='INC'){
        return {count:state.count+1}
    }
    if(action.type==='DEC'){
        return {count:state.count-1}
    }
}
function CounterR() {
    var [state,dispatch]=useReducer(reducer,{count:0})
    return (
        <div className="border border-2 border-info m-2 p-2">
            <h1>CounterR:{state.count}</h1>
            <button onClick={()=>{dispatch({type:'INC'})}}>Increment</button>
            <button onClick={()=>{dispatch({type:'DEC'})}}>Decrement</button>
        </div>
    )
}

export default CounterR