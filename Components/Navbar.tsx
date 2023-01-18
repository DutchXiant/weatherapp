import React from 'react'
import Link from 'next/link';

export default function Navbar() {


  return (
    <div className='flex bg-[#232528] text-center gap-3 shadow-xl '>
      <div className='flex w-[85%] m-auto lg:justify-around md:justify-around '>
        <div className='py-1 flex flex-col gap-5'>
            <img src='https://i.ibb.co/rbdwt0r/myfitcamp-1.png' className='w-[300px] m-auto justify-center items-center'></img>
        </div>
        <div className='flex gap-2 items-center '>
          <Link href="/afvallen"><button className="bg-[#FFA400] px-10 py-2 rounded-lg flex flex-col items-center justify-center shadow-md"><h1 className='font-bold'>Afvallen</h1> <img className='w-[50px]' src="https://i.ibb.co/gPNv9z9/weight-loss-svgrepo-com-removebg-preview.png"></img></button></Link>
          <Link href="/afvallen"><button  className="bg-[#FFA400] px-10 py-2 rounded-lg flex flex-col items-center justify-center"><h1 className='font-bold'>Aankomen</h1><img className='w-[50px]' src="https://i.ibb.co/Dwqs6N5/muscle-svgrepo-com-1.png"></img></button></Link>
        </div>
        </div>
    </div>
  )
}
