import React, { useCallback, useState } from 'react'
import Todo from './Todo';

function Todolist() {
    console.log("TOdolist rendered")
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
    var deleteTodo=useCallback(function(id){
        setTodos((oldtodos)=>{
            oldtodos.splice(id,1);
            console.log(oldtodos)
            return [...oldtodos];
        })
    },[])
  return (
    <div className="border border-2 border-info m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={()=>{addTodo()}}>Add Todo</button>
        <ul className='p-0'>
            {
                todos.map((t,i)=>{
                    return <Todo todo={t} id={i} delTodo={deleteTodo}></Todo>
                })
            }
        </ul>
    </div>
  )
}

export default React.memo(Todolist)