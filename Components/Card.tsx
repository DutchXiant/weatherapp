import React from 'react'
import Link from 'next/link'
import { PromiseProvider } from 'mongoose'
import { useRouter } from 'next/router'


export default function Card(props) {

  const {asPath, pathname } = useRouter();

  if(asPath == '/') {
    return (
      <div>
           <div className='flex flex-col flex-1 text-white p-5 shadow-md'> 
                      <h1 className='font-bold text-2xl'>{props.title}</h1>
                      <p>{props.description}</p>
                      <Link href="/tools" className='bg-[#FFA400]  text-center font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>{props.btnText}</Link> 
            </div>
      </div>
    )
      }  return (
        <div>
          <div className='flex flex-col flex-1 text-white p-5 shadow-md'> 
                    <h1 className='font-bold text-2xl'>{props.title}</h1>
                    <p>{props.description}</p>
                    <Link href="/tools" className='bg-red-500  text-center font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>{props.btnText}</Link> 
          </div>
    </div>
    )
}
