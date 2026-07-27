import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'

const DataFetch = () => {
    let [posts, setPosts]=useState([])
    let [length , setLength ]= useState(20)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then ( data =>setPosts(data.slice(0,length)))
        .catch(error => console.log(error))
        

    },[length])

  return (

    <div>
        {
            posts.length > 0 &&
            posts.map((post, i)=>{
                return <Link to={`/post/${post.id}`} className='d-block text-center'  key={i}>
                    {post.title}
                </Link>
            })
        }
        {
            length<100?
            
                <button className='btn btn-success' onClick={()=> setLength(length+20)}>Show More</button>
                :
                <div>All Data Loaded</div>
            
        }
        {
            length>20 &&
            
                <button className='btn btn-danger' onClick={()=> setLength(length-20)}>Show Less</button>
            
            
        }


        

    </div>
  )
}

export default DataFetch