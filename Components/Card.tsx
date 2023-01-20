import React from 'react'
import Link from 'next/link'

export default function Card(props) {
    return (
      <div>
           <div className='flex flex-col flex-1 text-white p-5 shadow-md items-center gap-3 '> 
                      <h1 className='font-bold text-2xl text-white'>{props.title}</h1>
                      <p className="text-[#D0D0D0] text-center">{props.description}</p>
                      <Link  href="/tools" className='justify-start outline outline-offset-2 outline-1  text-center font-bold rounded-bl-xl rounded-tr-xl py-2 px-6 mt-3'>{props.btnText}</Link> 
            </div>
      </div>
    )
}
