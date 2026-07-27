import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
//store ={counter:0}
//let count=useSelector(store=>store.count)
let {count} =useSelector (store=> store.counterStore)


   // let counterStore=useSelector(store=>store)
    //let count= counterStore.count

    const dispatch =useDispatch()

    
  return (
    <div className='d-flex justify-content-center p-5 my-5'>
        <h2>Counter: {count}</h2>

        <button className='btn btn-success' onClick={()=>dispatch({type:"INCREASE"})}>
            Increase
        </button>

       <button className='btn btn-warning' onClick={()=>dispatch({type:"DECREASE"})}>
            Decrease
        </button>

       <button className='btn btn-danger'onClick={()=>dispatch({type:"RESET"})}>
            Reset
        </button>
    </div>
  )
}

export default ReduxCounter