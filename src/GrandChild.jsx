import React from 'react'
import GrandGrandChild from './GrandGrandChild'

function GrandChild() {
  return (
    <div className='border border-2 border-secondary p-2 m-2'>
        <h1>GrandChild</h1>
        <GrandGrandChild></GrandGrandChild>
    </div>
  )
}

export default GrandChild