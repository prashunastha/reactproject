import React from 'react'



const PersonCard = (props) => {
     //destructuring the object
 const{name, address, phone}=props
   // let person={
     //   name:"Prashuna Shrestha",
       // address:"Bhaktapur",
       // phone:"9845006334"
   // }
  

  return (
    <div className='p-5 shadow-lg rounded m-3'>
        <h1>Name: {props.name}</h1>
        <h2>Address: {props.address}</h2>
        <h2>Phone: {props.phone}</h2>


    </div>
  )
}

export default PersonCard