import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo} from './todolistSlice'
function Todolist() {
    var {todos} = useSelector(state=>state.todoReducer)
    var [newtodo,setNewTodo]=useState('')
    var dispatch = useDispatch();
    console.log(todos)
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(newtodo))}}>Add Todo</button>
        {
            todos?.map((todo)=>{
                return <li>{todo}</li>
            })
        }
    </div>
  )
}

export default Todolist