import React, { useEffect } from 'react'
import { useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from '../../service/postsAPI'
import { useNavigate } from 'react-router-dom'

function Posts() {
    var navigate=useNavigate()
    var {isLoading,data}=useGetAllPostsQuery()
    var [lazyGetAllPostsFn]=useLazyGetAllPostsQuery()
    var [deletePostFn]=useDeletePostMutation()
    function deletePostHandler(id){
        deletePostFn(id).then(()=>{
            lazyGetAllPostsFn()
        })
    }
    function editPost(post){
        console.log("Post",post)
        navigate('/editpost',{state:post})
    }
    useEffect(()=>{
        lazyGetAllPostsFn()
    },[])
    console.log("Posts ",isLoading)
    console.log("Posts ",data)
  return (
    <div>
            <h1>
            Posts
            </h1>
            {
                isLoading && (<h4>Loading.......</h4>)
            }
            <ul>
            {
                !isLoading && (
                    data?.map((p)=>{
                        return <li>
                                {p.title}- {p.author}
                                    <button onClick={()=>{deletePostHandler(p.id)}}>Delete</button>
                                    <button onClick={()=>{editPost(p)}}>Edit</button>
                                </li>
                    })
                )
            }
            </ul>
        
    </div>
  )
}

export default Posts