import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc,dec,reset } from './counterSlice'
function Counter() {
    var {count} = useSelector(state=>state.counterReducer)
    var disptach = useDispatch();

  return (
    <div className='border border-2 border-success m-2 p-2'>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{disptach(inc())}}>increment</button>
        <button onClick={()=>{disptach(dec())}}>decrement</button>
    </div>
  )
}

export default Counter