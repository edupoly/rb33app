import React,{useReducer} from 'react'
function reducer(state,action){
    if(action.type==='ADDTODO'){
        return {
            todos:[...state.todos,state.newtodo],
            newtodo:''
        }
    }
    if(action.type==='UPDATENEWTODO'){
        console.log("hi",action.payload)
        return {
            ...state,
            newtodo:action.payload
        }
    }
}
function TodolistR() {
    var [state,dispatch]=useReducer(reducer,{
        todos:['Moksha Fee','House','get BMW'],
        newtodo:''
    })
  return (
    <div className="border border-2 border-warning m-2 p-2">
        <h1>TodolistR</h1>
        <input type="text" className='form-control' id='d1' value={state.newtodo} onChange={(e)=>{dispatch({type:'UPDATENEWTODO',payload:e.target.value})}}/>
        <button className='btn btn-success' onClick={()=>{dispatch({type:"ADDTODO"})}}>Add Todo</button>
        <ul>
            {
                state.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default TodolistR