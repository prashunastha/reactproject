import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxPerson = () => {
    let {name, age}=useSelector(store=>store.personStore )

    let[person, setPerson]=useState({name: '', age:''})

    const dispatch=useDispatch()


  return (
    <div className='d-flex flex-column justify-content-center align-items-center'> 
            <h1> Name:{name}</h1>
            <h1> Age:{age} </h1>
        
        <div className='d-flex'>
            <input type="text" placeholder='enter your name to update' className='form-control' 
            onChange={e=>setPerson({...person, name: e.target.value})}/>
            <button className='btn btn-success' onClick={()=> dispatch({type: "UPDATE_NAME", payload: person.name})}> Update Name</button>
        </div>
        <div className='d-flex'>
            <input type="text" placeholder='enter your age to update' className='form-control' onChange={e=> setPerson({...person, age: e.target.value})}/>
            <button className='btn btn-warning' onClick={()=> dispatch({type: "UPDATE_AGE", payload: person.age})}> Update age</button>
        </div>
    </div>


  )
}

export default ReduxPerson