import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Card(props) {

  const {asPath, pathname } = useRouter();

  if(asPath == '/') {
    return (
      <div>
           <div className='flex flex-col flex-1 text-white p-5 shadow-md'> 
                      <h1 className='font-bold text-2xl text-[#FFA400]'>{props.title}</h1>
                      <p className='text-gray'>{props.description}</p>
                      <Link href="/tools" className='bg-[#284D5B]  text-center font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>{props.btnText}</Link> 
            </div>
      </div>
    )
      }  return (
        <div>
          <div className='flex flex-col flex-1 text-white p-5 shadow-md'> 
                    <h1 className='font-bold text-2xl text-[#FFA400]'>{props.title}</h1>
                    <p className='text-[#f1f1f1]'>{props.description}</p>
                    <Link href="/tools" className='bg-[#8ED67E]  text-center font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>{props.btnText}</Link> 
          </div>
    </div>
    )
}
