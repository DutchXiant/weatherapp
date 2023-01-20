import React from 'react'
import Link from 'next/link'

export default function Card(props) {
    return (
      <div>
           <div className='flex flex-col flex-1 text-white p-5 shadow-md items-center '> 
                      <h1 className='font-bold text-2xl text-white'>{props.title}</h1>
                      <p className="text-[#D0D0D0] text-center">{props.description}</p>
                      <Link  href="/tools" className='justify-start bg-[#FFA400]  text-center font-bold rounded-bl-xl rounded-tr-xl py-3 px-6 mt-3'>{props.btnText}</Link> 
            </div>
      </div>
    )
}
