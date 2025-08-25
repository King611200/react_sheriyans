import React, { useRef } from 'react'

function Formhandling() {
  const name = useRef(null);
  const age = useRef(null)

  const handelsubmit = (details)=>{
    details.preventDefault()
    console.log(name.current.value,age.current.value)
  }

  return (
   <form action="" onSubmit={handelsubmit}>
    <input ref={name} type="text" placeholder='Name' />
    <input ref={age} type="text" placeholder='Age' />
    <input type="Submit" />
   </form>
  )
}

export default Formhandling
