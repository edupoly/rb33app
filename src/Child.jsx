import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { MyContext } from './MyContext'

function Child(props) {
    var f=useContext(MyContext);
    console.log(f)
    function abc(){
        alert("HI")
    }
  return (
    <div className='border border-2 border-info p-2 m-2'>
        <h1>Child {props.x},{f.mydetails.firstname}</h1>
        <button onClick={()=>{abc()}}>call abc</button>
        <button class="btn btn-danger" onClick={()=>{props.y()}}> call xyz</button>
        <GrandChild></GrandChild>
    </div>
  )
}

export default Child