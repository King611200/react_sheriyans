import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Userdetails() {
  const {name} = useParams()
  const navigate = useNavigate()
  
  const GoBackHandler = ()=>{
    //navigate("/user")
    navigate(-1)
  }
  return (
    <div className=' mt-10'>
       <h1 className='text-red-600 text-5xl mb-2'>User Details</h1>
       <h1 className='text-2xl mt-3 '>Hii! {name}</h1>
       <p className='m-5 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolor molestiae harum cupiditate natus fuga non a nihil vel? Modi laboriosam excepturi a cumque error odio dolor veritatis architecto repellendus.</p>
      
       <button onClick={GoBackHandler} className='mb-10 mt-1 px-3 py-2 bg-red-300 rounded-md text-xl text-white'>Go Back</button>
   </div>
  )
}

export default Userdetails