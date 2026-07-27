import React from 'react'
import { Outlet } from 'react-router-dom'

const Profiles = () => {
  return (
    <div>
        <h1> Welcome to profile page</h1>
        <div className='p-5 w-50 shadow-lg rounded mx-auto'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Profiles