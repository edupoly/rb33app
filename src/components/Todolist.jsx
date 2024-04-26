import React, { useEffect, useRef } from 'react'
import Child from './Child';

function Todolist() {
    var tref = useRef();
    var bref = useRef();
    var cref = useRef();
    useEffect(()=>{
        tref.current.focus();
    },[])
    function checkEnter(e){
        if(e.key==='Enter'){
            bref.current.focus()
        }
    }
  return (
    <div className='border border-2 border-warning m-2 p-2'>
        <h1>Todolist</h1>
        <input ref={tref} type="text" onKeyUp={(e)=>{checkEnter(e)}}/>
        <button ref={bref} onClick={()=>{cref.current.focus()}}>Add Todo</button>
        <Child ref={cref}></Child>
    </div>
  )
}

export default Todolist