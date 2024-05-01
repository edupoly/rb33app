import React, { useContext } from 'react'
import { MyContext } from './MyContext'

function GrandGrandChild() {
    var x = useContext(MyContext)
    console.log(x)
    return (
        <div className='border border-2 border-primary p-2 m-2'>
            <h1>GrandGrandChild,{x.mydetails.firstname}</h1>
        </div>
    )
}

export default GrandGrandChild