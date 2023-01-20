import React, { useState } from 'react'
import Image from 'next/image'



export default function Onboard() {
  const [count, setCount] = useState(0);
  const [selectBody, setSelectedBody] = useState(0);

  const clickHandler = (body) => { 
    const increaseCount = count + 1; 
    setCount(increaseCount)
  }

  if(count == 0) { 
    return (
        <div className='w-[85%] m-auto text-center flex flex-col gap-3 items-center mt-5'>
                   <h1 className='text-white font-bold md:text-4xl lg:text-4xl sm:text-3xl xs:text-3xl'>Stap 1. Selecteer jouw lichaamstype</h1>
                   <p className="text-gray-400">Vul de korte quiz in en ontvang jouw persoonlijke trainingsschema</p>
                   <div className='m-10 flex gap-10 sm:flex-col xs:flex-col md:flex-row lg:flex-row'>
                       <button onClick={() => clickHandler('1')} className='xs:px-20 border-[#fba503] shadow-2xl shadow-[#fba503] border-2 p-3 rounded-xl'>
                           <Image src="/body1.png" width={200} height={200} alt="body1"></Image>
                       </button>
                       <button onClick={() => clickHandler('2')} className='xs:px-20 border-[#fba503] border-2 shadow-[#fba503] shadow-2xl  p-3 rounded-xl'>
                           <Image src="/body2.png" width={200} height={100} alt="body1"></Image>
                       </button>
                       <button onClick={() => clickHandler('3')} className='xs:px-20 border-[#fba503] border-2 p-3 shadow-[#fba503] shadow-2xl rounded-xl'>
                           <Image src="/body3.png" width={200} height={200} alt="body1"></Image>
                       </button>
               </div>
       </div>
    )
  }

  
  if(count === 1) { 
    return ( 
        <div className='w-[85%] m-auto'>
          <div className='flex flex-col gap-3  '>
          <h1 className='text-3xl font-bold text-white mt-5'>Stap 2. Doel stellen</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae a excepturi tempore fugit! Rerum earum possimus dicta accusamus iure.</p>
                    <input type="text" className="px-4 py-2" placeholder='Leeftijd'></input>
                    <input type="text" className="px-4 py-3" placeholder='Gewicht'></input>
                    <input type="text" className="px-4 py-3" placeholder='Lengte'></input>
                    <button className='font-bold px-2 py-3 bg-[#fba503] rounded-sm' onClick={() => clickHandler(1)}>Door naar volgende stap!</button>
                </div>
        </div>
    )
  }



  if(count === 2) { 
    return ( 
      <div className='w-[85%] m-auto'>
          <div className='flex flex-col gap-3  '>
          <h1 className='text-3xl font-bold text-white mt-5'>Stap 2. Doel stellen</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae a excepturi tempore fugit! Rerum earum possimus dicta accusamus iure.</p>
                    <input type="text" className="px-4 py-2" placeholder='Leeftijd'></input>
                    <input type="text" className="px-4 py-3" placeholder='Gewicht'></input>
                    <input type="text" className="px-4 py-3" placeholder='Lengte'></input>
                    <button className='font-bold px-2 py-3 bg-[#fba503] rounded-sm' onClick={() => clickHandler(1)}>Door naar volgende stap!</button>
          </div>
    </div>
    )




  }


  
  
}
