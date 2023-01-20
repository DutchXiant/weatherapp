
import { useState } from 'react'; 
import Onboard from '../../Components/Funnel/Onboard';
import React from 'react'



export default function index() {

    const [count, setCount] = useState(0); 

    return (
    <div className='flex-1 flex min-h-[80vh] lg:flex xs: justify-center items-center flex-col'>
        <Onboard />
    </div>
  )
}
