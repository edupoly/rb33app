import React from 'react'

function AnotherChild(props) {
    console.log("Another Child rendered")
  return (
    <div className="border border-2 border-success p-2 m-2">
        <h1>AnotherChild:{props.a1}</h1>
    </div>
  )
}

export default React.memo(AnotherChild)

