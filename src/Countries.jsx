import React, { useState } from 'react'
import { useEffect } from 'react'

function Countries() {
    var [countries,setCountries] = useState()
    useEffect(()=>{
        fetch("https://restcountries.com/v3/all")
        .then((res)=>{
            res.json().then(data=>{
                setCountries(data)
            })
        })
    },[])
  return (
    <div>
        <h1>Countries</h1>
        {
            countries?.map((c)=>{
                return <li>{c.name.common}</li>
            })
        }
    </div>
  )
}

export default Countries