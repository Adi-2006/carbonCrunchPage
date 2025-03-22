import React from 'react'
import Frame1 from './Frame1.jsx'
import Frame2 from './Frame2.jsx'
import Frame3 from './Frame3.jsx'

function Container() {
  return (
    // Main Container
   <div className='w-screen '>
    <Frame1/>
    <Frame2/>
    <Frame3/>

   </div>
  )
}

export default Container