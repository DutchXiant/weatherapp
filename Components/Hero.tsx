import React from 'react'
import { useRouter } from 'next/router'

export default function Hero(props) {

  const {asPath, pathname } = useRouter();
  console.log(asPath)

  console.log(props)
  return (
    <div className='w-100 '>
         <header
        className={"w-full h-96 bg-[url('https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center flex justify-center items-center"}>
        <div className="flex flex-col justify-center items-center">
            <h1 className=" text-center lg:text-5xl sm:text-3xl xs:text-3xl text-white font-bold drop-shadow-lg">{props.description}
            <span className="text-[#FFA400]"> {props.title}</span>
            </h1>
            {asPath == '/' && (
              <div className='flex flex-col items-center justify-center'>
                  <a className="mt-8 px-12 py-3 bg-gradient-to-r from-[#FFA400] to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                  href="#">Nu starten!</a>
                  <p className="mt-5 text-center text-lg text-white opacity-70">Weet wat je moet eten om jouw doelen te behalen</p>
                  </div>
            )}
        </div>
    </header>
    </div>
  )
}
