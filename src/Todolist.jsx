import React from 'react'
import { connect } from 'react-redux'
function Todolist(props) {
    console.log("props inside todolist",props)
  return (
    <div className='border border-2 border-secondary m-2 p-2'>
        <h1>Todolist</h1>
        <input type="text" id='nt'/>
        <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:document.getElementById("nt").value})}} className='btn btn-warning'>Add Todo</button>
        <ul>
            {
                props.todolistReducer.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default connect(store=>store)(Todolist)