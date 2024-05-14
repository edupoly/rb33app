import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllCountries } from './store/actions'

function Countries(props) {
    useEffect(()=>{
        props.getCountries()
    },[])
    
  return (
    <div>
        <h1>Countries</h1>
        {
            props.isLoading && <h3>Loading.....</h3>
        }
        {
            props.countries?.map((country)=>{
                return <li>
                        <h1>{country.name.common}</h1>
                        <img src={country.flags[0]} alt="" style={{width:"200px"}}/>
                        </li>
            })
        }
        
    </div>
  )
}
function mapStateToProps(state){
    return state.countriesReducer
}
function mapDispatchToProps(dispatch){
    return {
        getCountries:()=>{dispatch(getAllCountries())},
        stopLoading:()=>{dispatch({type:'UPDATELOADING',payload:false})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Countries)