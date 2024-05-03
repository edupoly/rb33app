import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'
function CountryDetails() {
    var {cname} = useParams();
    var [details,setDetails] = useState(null)
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3/name/${cname}`).then((res)=>{
            setDetails({...res.data[0]})
        })
    },[])
  return (
    <div>
        <h2>CountryDetails of {JSON.stringify(details?.name?.common)}</h2>
        <img src={details?.flags[1]} width='200px' alt="" />
    </div>
  )
}

export default CountryDetails