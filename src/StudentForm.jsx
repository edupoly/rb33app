import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
function StudentForm() {
    var studentForm=useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            password:'',
            age:'',
            username:''
        },
        // validationSchema:Yup.object({
        //     firstname:Yup.string()
        //     .required("Please fill the first name it is mandatory")
        //     .max(5,"babu chusuko "),
        //     password:Yup.string().matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Koncham sarigga ivvu"),
        //     age:Yup.number().test("checkage","age is not correct",(x)=>{
        //         if(x>18 && x<=45){
        //             return true
        //         }
        //         else{
        //             return false
        //         }
        //     }),
        //     username:Yup.string().test("uniqueusername","User name already in use",function(un){
        //         var {path,createError} = this;
        //         var p = new Promise((resolve,reject)=>{
        //             axios.get(`https://api.github.com/users/${un}`)
        //             .then((res)=>{
        //                 reject(createError({path}))
        //             })
        //             .catch(err=>{
        //                 resolve(true)
        //             })
        //         })
        //         return p
        //     })
        // }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div>

        <form onSubmit={studentForm.handleSubmit}>
            <input className={studentForm.touched.firstname && studentForm.errors.firstname && 'border border-danger'} type="text" {...studentForm.getFieldProps("firstname")}/>
            <div>
                {studentForm.touched.firstname && studentForm.errors.firstname && <b>Please enter firstname</b>}
            </div>
            <br />
            <input type="text" {...studentForm.getFieldProps("lastname")}/>
            <br />
            <input type="text" {...studentForm.getFieldProps("age")}/>
            <br />
            <input type="text" {...studentForm.getFieldProps("password")}/>
            <br />
            <input type="text" {...studentForm.getFieldProps("username")} placeholder='username'/>
            <br />
            <button>Show Data</button>
            <button onClick={()=>{studentForm.resetForm()}}>Reset</button>
            <button onClick={()=>{studentForm.setFieldValue("lastname","fakshjf")}}>Show values</button>
        </form>
        {JSON.stringify(studentForm.errors)}
    </div>
  )
}

export default StudentForm