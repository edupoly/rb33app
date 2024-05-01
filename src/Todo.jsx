import React from 'react'

function Todo(props) {
    console.log(props.todo,"::Todo Rendered")

  return (
    <li className='d-flex justify-content-between p-2 my-2 bg-secondary text-light'>
        <h3>{props.todo}</h3>
        <button onClick={()=>{props.delTodo(props.id)}}>Delete</button>
    </li>
  )
}

export default React.memo(Todo)