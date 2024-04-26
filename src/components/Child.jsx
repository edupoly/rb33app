import React from 'react'

function Child(props,refs) {
    console.log(refs)
  return (
    <div className='border border-2 border-success m-2 p-2'>
        <h1>Child</h1>
        <input type="text" ref={refs}/>
    </div>
  )
}

export default React.forwardRef(Child)