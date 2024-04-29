import React, { useEffect, useState } from 'react'

function Counter() {
    var [c,setC]=useState(0)
    var [myname,setMyname] = useState("")
    function incCnt(){
        setC((oldc)=>{
            return oldc+1
        })
    }
    function decCnt(){
        setC((oldc)=>{
            return oldc-1
        })
    }
    useEffect(()=>{},[])
    useEffect(()=>{})
    useEffect(()=>{
        console.log("useEffect called because c updated")
    },[c])
    useEffect(()=>{
        console.log("useEffect called because myname updated")
    },[myname])
    return (
        <div className="border border-2 border-info m-2 p-2">
            <h1>Counter with useState:{c}</h1>
            <input type="text" onChange={(e)=>{setMyname(e.target.value)}}/>
            <h3>{myname}</h3>
            <button onClick={()=>{incCnt()}}>Increment Count</button>
            <button onClick={()=>{decCnt()}}>Decrement Count</button>
        </div>
    )
}

export default Counter