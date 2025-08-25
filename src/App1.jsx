import React, { useState } from 'react'
import Formhandling from './Component/Formhandling'
import { useForm } from 'react-hook-form'


function App1() {

{/*const {register,handleSubmit}= useForm( )*/}

   {/* const [val,setval]=useState({name:""})

    const handelsubmit = (event)=>{
      event.preventDefault()
      console.log(val)
    }
  */}
  
  return (
    <div>
     {/* <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
        <input {...register('name')} type="text" placeholder='name' />
        <input {...register('email')} type="email" placeholder='email' />
        <input type="Submit" />
  </form>*/}
<Formhandling/>
     {/* <form action="" onSubmit={handelsubmit}>
        <input onChange={(event)=>setval({name : event.target.value})} type="text" placeholder='name' />
        <input type="Submit" />
</form>*/}
    </div>
  )

  }
export default App1