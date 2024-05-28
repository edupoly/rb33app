import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useGetAllCoursesQuery } from '../../service/coursesApi'
import { useAddContactMutation } from '../../service/contactsApi';

function AddContactForm() {
    var {isLoading:isCoursesLoading,data:courses} = useGetAllCoursesQuery();
    var [addContactFn] = useAddContactMutation()
    var [technologies,setTechnologies] = useState(null)
    var [selectedTech,setSeletedTech] = useState([])
    var contactForm=useFormik({
        initialValues:{
            "fullname":"",
            "mobile":0,
            "email":"",
            "remarks":"",
            "ctime":Date.now(),
            "nextcalltime":"",
            "course":"",
            "technologies":[],
            "fee":0,
            "discountPercentage":0,
            "discountReason":""
        },
        onSubmit:(values)=>{
            console.log(values)
            addContactFn(values).then((res)=>{console.log(res)})
        },

    })
    useEffect(()=>{
        setTechnologies(courses?.find((course)=>{
            return course.title===contactForm.values.course
        })?.technologies)
        
    },[contactForm.values.course])
    function updateTechnologies(ev){

        if(ev.target.checked){
            setSeletedTech([...selectedTech,ev.target.value])
        }
        else{
            var temp = JSON.parse(JSON.stringify(selectedTech));
            temp = temp.filter((t)=>{
                if(t!==ev.target.value){
                    return true
                }
                else{
                    return false
                }
            })
            setSeletedTech([...temp])
        }
    }
    useEffect(()=>{
        contactForm.setFieldValue('technologies',selectedTech)
    },[selectedTech])
  return (
    <div>
        <h3>AddContactForm</h3>
        <form onSubmit={contactForm.handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" {...contactForm.getFieldProps('fullname')} className="form-control" id="floatingInput" placeholder="Full Name" />
                <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" {...contactForm.getFieldProps('mobile')} className="form-control" id="floatingInput" placeholder="Mobile" />
                <label htmlFor="floatingInput">Mobile Number</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" {...contactForm.getFieldProps('email')} className="form-control" id="floatingInput" placeholder="Email" />
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" {...contactForm.getFieldProps('remarks')} class="form-control" id="floatingInput" placeholder="Remarks" />
                <label for="floatingInput">Remarks</label>
            </div>
            <div class="form-floating mb-3">
                <input type="date" {...contactForm.getFieldProps('nextcalltime')} class="form-control" id="floatingInput" placeholder="NextCallDate" />
                <label for="floatingInput">Next Call</label>
            </div>
            
            <select {...contactForm.getFieldProps("course")} class="form-select form-control m-3 p-2 w-50" aria-label="Default select example">
                <option selected>Select Your Course</option>
                {
                    !isCoursesLoading && courses.map((course)=>{
                        return (<option>{course.title}</option>)
                    })
                }
            </select>
            {
                contactForm.values.course && (
                    <div>
                <b>Technologies</b>
                <br />
                {
                    contactForm.values.course && technologies?.map((t)=>{
                        return <><input type='checkbox' onChange={(e)=>{updateTechnologies(e)}} value={t}/>:{t} &nbsp; &nbsp;</>
                    })
                }
            </div>
                )
            }

            <div class="form-floating mb-3">
                <input type="text" {...contactForm.getFieldProps('fee')} class="form-control" id="floatingInput" placeholder="NextCallDate" />
                <label for="floatingInput">Fee</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" {...contactForm.getFieldProps('discountPercentage')} class="form-control" id="floatingInput" placeholder="NextCallDate" />
                <label for="floatingInput">Discount Percentage</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" {...contactForm.getFieldProps('discountReason')} class="form-control" id="floatingInput" placeholder="NextCallDate" />
                <label for="floatingInput">Discount Reason</label>
            </div>
            <button>Add Contact</button>
        </form>
    </div>
  )
}
            // "course":"",
            // "technologies":[],
            // "fee":0,
            // "discountPercentage":0,
            // "discountReason":""
export default AddContactForm