import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    var [fn,setFn]=useState("Praveen")
    function xyz(){
        alert("This is parent xyz function")
    }
  return (
    <div className='border border-2 border-danger p-2 m-2'>
        <h1>Parent:{fn}</h1>
        <button onClick={()=>{xyz()}}>Lets call xyz</button>
        <Child x={fn} y={xyz}></Child>
    </div>
  )
}

export default Parent