import React from 'react'
import Link from 'next/link';

export default function Navbar() {


  return (
    <div className='flex bg-[#232528] text-center gap-3 shadow-xl'>
      <div className='flex w-[70%] m-auto lg:justify-around md:justify-around xs:flex-col md:flex-row lg:flex-row items-center p-5'>
        <div className='py-0 flex'>
            <img src='https://i.ibb.co/rbdwt0r/myfitcamp-1.png ' className='m-auto md:w-[200px] lg:w-[250px] sm:w-[250px] justify-center items-center'></img>
        </div>
        </div>
    </div>
  )
}
