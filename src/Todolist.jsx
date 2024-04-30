import React, { useState } from 'react'

function Todolist() {
    console.log("Todolist rendered");
    var [newtodo,setNewTodo] = useState("")
    var [todos,setTodos] = useState([
        'get bmw',
        'moksha fee',
        'get home',
        'manas bus fee'
    ])
    function addTodo(){
        setTodos([...todos,newtodo])
    }
  return (
    <div className="border border-2 border-info m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={()=>{addTodo()}}>Add Todo</button>
        <ul>
            {
                todos.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </ul>
    </div>
  )
}

export default React.memo(Todolist)