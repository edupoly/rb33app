import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useAddPostMutation, useUpdatePostMutation } from '../../service/postsAPI'
import { useLocation, useNavigate } from 'react-router-dom'
function EditPost() {
    var {state} = useLocation();
    var navigate = useNavigate()
    useEffect(()=>{
        editPostForm.setValues(state)
    },[state])
    var [updatePostFn]=useUpdatePostMutation()
    var editPostForm = useFormik({
        initialValues:{
            title:'',
            author:'',
            id:''
        },
        onSubmit:(values)=>{
            updatePostFn(values).then((res)=>{
                navigate("/posts")
            })
        }
    })
  return (
    <div>
        <h1>Edit Post</h1>
        <form onSubmit={editPostForm.handleSubmit}>
            <input placeholder='title' type="text" {...editPostForm.getFieldProps('title')}/>
            <br />
            <input placeholder='author' type="text" {...editPostForm.getFieldProps('author')}/>
            <br></br>
            <button>Update Post</button>
        </form>
    </div>
  )
}

export default EditPost