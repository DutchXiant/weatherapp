import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Hero(props) {

  const {asPath, pathname } = useRouter();
  console.log(asPath)

  console.log(props)
  return (
    <div className='w-100 '>
         <header 
        className={"p-5 w-full h-[300px] bg-[url('https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center flex justify-center items-center"}>
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className=" text-center lg:text-5xl sm:text-3xl xs:text-3xl text-white font-bold drop-shadow-lg">{props.description}
            <span className="bg-[#FFA400] text-black font-bold py-1 px-3"> {props.title}</span>
            </h1>
            {asPath == '/' && (
              <div className='flex flex-col items-center justify-center'>
                  <Link  href="/funnel" className="mt-8 px-12 py-3 bg-gradient-to-r from-[#FFA400] to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full">Start de quiz</Link>
                  
                  </div>
            )}
        </div>
    </header>
    </div>
  )
}
