import React, { useContext, useEffect, useState } from 'react'
import PersonCard from '../components/PersonCard'
import { MyContext } from '../context/MyContext'

const Counter = () => {
    
    let [count, setCount]= useState(0)
    let [data, setData]= useState(100)
    //useState-popular and most used react hook
    //let[variable, function]=useState(initialValue)
    //variable-state variable
    //function-function to update state of state variable
    //0-9:numbers
    //'' or "":string
    //true or false:boolean
    //[]:array
    //{}:object


/*useEffect-to show some side effects when state changes
    Syntax: useEffect(function, [dependency])
    function->side effect to be shown
    dependency->state variable(s) that will trigger the effect
    [a, b, c]->effect is seen on page load, adn when a or b or c updates
    []->effect is seen only on page load
    null->effect is seen only on page load and when any state updates
    ->if no dependency is provided, effect is seen on page load and when any state updates
    */

    
    useEffect(()=>{
        alert("Value updated")
    },[])
   
   
    const increaseCount=()=>{
        setCount(++count)
        console.log(count)
    }

    let msg = useContext(MyContext)

  return (
    <div style={{minheight:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <h1>{msg}</h1>
        <h2>Counter:{count}</h2>
        {
            count<20 &&
        <button className='btn btn-success' onClick={increaseCount}>Increase</button>
        }
        {
            count>0?
        
        <button className='btn btn-warning' onClick={()=>setCount(--count)}>Decrease</button>
        :
        <button className='btn btn-danger' disabled>Decrease</button>
        }
        <button className='btn btn-danger' onClick={()=>setCount(0)}>RESET</button>

        <h2>Data:{data}</h2>
        <div className='btn-group'>
            <button className='btn btn-success' onClick={()=>setData(data-10)}>-</button>
            <button className='btn btn-danger ' onClick={()=>setData(100)}>RESET</button>
            <button className='btn btn-success' onClick={()=>setData(data+10)}>+</button>
        </div>
<PersonCard name='Prashuna' address='Bhaktapur' phone='9845006334'/>
<PersonCard name='Samit' address='Thimi' phone='9741878214'/>
<PersonCard name='Coco' address='Bhaktapur' phone='9845006334'/>


    </div>
  )
}

export default Counter