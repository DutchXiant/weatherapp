import React from 'react'
import Link from 'next/link';

export default function Navbar() {


  return (
    <div className='flex bg-[#232528] text-center gap-3 shadow-xl '>
      <div className='flex w-[70%] m-auto lg:justify-around md:justify-around '>
        <div className='py-1 flex flex-col'>
            <img src='https://i.ibb.co/rbdwt0r/myfitcamp-1.png' className='md:w-[200px] lg-[200px] sm:w-[200px] xs:w-[200px] m-auto justify-center items-center'></img>
        </div>
        <div className='flex gap-2 items-center '>
          <Link href="/afvallen"><button className="bg-[#FFA400] px-5 py-1 rounded-lg flex flex-col items-center justify-center shadow-md sm:w-[80px]"><h1 className='font-bold'>Afvallen</h1> <img className='w-[50px]' src="https://i.ibb.co/gPNv9z9/weight-loss-svgrepo-com-removebg-preview.png"></img></button></Link>
          <Link href="/afvallen"><button  className="bg-[#FFA400] px-5 py-1 rounded-lg flex flex-col items-center justify-center sm:-w[70px] xs:w-[80px] md:w-100"><h1 className='font-bold'>Aankomen</h1><img className='w-[50px]' src="https://i.ibb.co/Dwqs6N5/muscle-svgrepo-com-1.png"></img></button></Link>
        </div>
        </div>
    </div>
  )
}
