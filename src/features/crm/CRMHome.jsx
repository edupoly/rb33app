import React from 'react'
import { useGetAllCoursesQuery } from '../../service/coursesApi'

function CRMHome() {
  var {isLoading,data}=useGetAllCoursesQuery();
  console.log("courseHome",isLoading)
  console.log("courseHome",data)
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h2>CRMHome</h2>
    </div>
  )
}

export default CRMHome