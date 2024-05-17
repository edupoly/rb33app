import React from 'react'
import { useFormik } from 'formik'
import { useAddPostMutation } from '../../service/postsAPI'
function AddPost() {
    var [addPostFn]=useAddPostMutation()
    var postForm = useFormik({
        initialValues:{
            title:'',
            author:''
        },
        onSubmit:(values)=>{
            addPostFn(values).then((res)=>{
                console.log(res)
            }).catch()
        }
    })
  return (
    <div>
        <h1>Add Post</h1>
        <form onSubmit={postForm.handleSubmit}>
            <input placeholder='title' type="text" {...postForm.getFieldProps('title')}/>
            <br />
            <input placeholder='author' type="text" {...postForm.getFieldProps('author')}/>
            <br></br>
            <button>Add Post</button>
        </form>
    </div>
  )
}

export default AddPost