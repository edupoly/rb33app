import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { useGetAllCoursesQuery } from '../../service/coursesApi'
function CRMDashboard() {
    var {isLoading,data} = useGetAllCoursesQuery()
    console.log("isLoading",isLoading)
    console.log("data",data)
  return (
    <div className='border border-4 border-success m-2 p-2'>
        <div className='d-flex flex-wrap justify-content-between'>
            <h1>
                CRMDashboard
            </h1>
            <Link to="/crm/addContact"><button className='btn btn-success'>+AddContact</button></Link>
        </div>
        
        <Outlet></Outlet>
    </div>
  )
}

export default CRMDashboard