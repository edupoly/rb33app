import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/actions'

function Todolist(props) {
    console.log("props inside todolist",props)
  return (
    <div className='border border-2 border-secondary m-2 p-2'>
        <h1>Todolist</h1>
        <input type="text" id='nt'/>
        <button onClick={()=>{props.addTodo(document.getElementById('nt').value)}} className='btn btn-warning'>Add Todo</button>
        <ul>
            {
                props.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}
function mapStateToProps(state){
    return state.todolistReducer
}
function mapDispatchToProps(dispatch){
    return {
        addTodo:(nt)=>{dispatch(addTodo(nt))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)