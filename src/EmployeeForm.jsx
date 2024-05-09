import React from 'react'
import { Field, Form, Formik } from 'formik'
function EmployeeForm() {
  return (
    <div>
        <h1>EmployeeForm</h1>
        <Formik
            initialValues={{
                fullname:"",
                dob:"",
                place:""
            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
        >
           
            <Form>
                <Field name="fullname" type="text"></Field>
                <br />
                <Field name="dob" type="text"></Field>
                <br />
                <Field name="place" type="text"></Field>
                <br />
                <button>Save Form</button>
            </Form>
        </Formik>
    </div>
  )
}

export default EmployeeForm