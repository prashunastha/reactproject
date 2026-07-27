import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'

const Post = () => {
let[post, setPost]= useState({})

const {id}= useParams()

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id} `)
    .then (response => setPost (response.data))
    .catch(error => console.log(error))
},[])
  return (


    <div className='w-50 m-auto p-5 shadow-lg my-5'>
        <h2>{post.title}</h2>
        <p>
            {post.body}
        </p>
    </div>
  )
}

export default Post