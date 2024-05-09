import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    console.log(props)
    return (
        <div className='border border-2 border-info m-2 p-2'>
            <h1>Counter:{props.count}</h1>
            <button onClick={()=>{props.inc()}}>increment</button>
            <button onClick={()=>{props.dec()}}>decrement</button>
        </div>
    )
}

export default connect(function(state){
    return state.counterReducer
},function(dispatch){
    return {
        inc:()=>{dispatch({type:'INCREMENT'})},
        dec:()=>{dispatch({type:'DECREMENT'})},
    }
})(Counter)