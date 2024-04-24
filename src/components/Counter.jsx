import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment,reset } from '../redux/counterSlice'

function Counter() {
    const [range,setRange]=useState("")
     //call useDispatch() - inorder to access the action/function
    const dispatch = useDispatch()
    //useSelector() - inorder the access the state 
    const count = useSelector((state)=>state.counterReducer.value)
    
    console.log(range);
  return (
    <div className='mt-4 d-flex justify-content-center align-items-center w-100 flex-column'>
       <h1 style={{fontSize:'70px'}}>{count}</h1>
       <div className="d-flex mt-5 justify-content-evenly w-75">
            <button className='btn btn-success p-3' onClick={()=>dispatch(increment(Number(range)))}>increment</button>
            <button className='btn btn-danger p-3' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-warning p-3' onClick={()=>dispatch(decrement(Number(range)))}>decrement</button>
       </div>
       <div className="mt-5 w-100">
         <input type="text" placeholder='Enter the range' className='form-control' onChange={(e)=>setRange(e.target.value)}/>
       </div>
    </div>
  )
}

export default Counter
