import React from 'react'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from './store/actions'
function Counter(props) {
    console.log(props)
    return (
        <div className='border border-2 border-info m-2 p-2'>
            <h1>Counter:{props.counterReducer.count}</h1>
            <button onClick={()=>{props.dispatch(incrementCounter())}}>increment</button>
            <button onClick={()=>{props.dispatch(decrementCounter())}}>decrement</button>
        </div>
    )
}

export default connect(function(store){return store})(Counter)