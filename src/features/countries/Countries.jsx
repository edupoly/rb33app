import React, { useEffect } from 'react'
import { useGetAllCountriesQuery } from '../../service/countriesApi'
import { updateCoutries } from './CountriesSlice';
import { useDispatch, useSelector } from 'react-redux';

function Countries() {
    var {isLoading,data}=useGetAllCountriesQuery();
    var countries = useSelector(state=>state.countriesReducer.countries)

    var dispatch = useDispatch()
    useEffect(()=>{
        if(isLoading===false){
            dispatch(updateCoutries(data))
        }
    },[isLoading])
    console.log(isLoading)
    console.log(data)
    console.log(countries)
  return (
    <div>
        <h1>Countries</h1>
        {isLoading && (<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>)}
        <ul>
            {isLoading===false && (
                countries?.map(function(country){
                    return <li>{country.name.common}</li>
                })
            )}
        </ul>
    </div>
  )
}

export default Countries