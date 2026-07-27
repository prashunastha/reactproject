import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-[80vh] '>
      Page Not Found. Go to 
      <Link to='/' className='text-blue-500 underline'> Home</Link>
    
    </div>
  )
}

export default NotFound