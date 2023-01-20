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
        <div className='w-[85%] m-auto text-center flex flex-col gap-3 items-center '>
            <div>
                <h1 className='text-3xl font-bold text-white mt-5'>Stap 2. Belangrijke gegevens</h1>
                <br />
                <div className='flex flex-col gap-3 justify-center flex-1'>
                    <input type="text" className="px-2 py-2" placeholder='Man of vrouw?'></input>
                    <input type="text" className="px-2 py-2" placeholder='Leeftijd'></input>
                    <input type="text" className="px-2 py-2" placeholder='Gewicht'></input>
                    <input type="text" className="px-2 py-2" placeholder='Lengte'></input>
                    <button className='font-bold px-2 py-1 bg-[#fba503] rounded-xl' onClick={() => clickHandler(1)}>Door naar volgende stap!</button>
                </div>
                <div className='flex justity-center mt-10 xs:px-20 border-[#fba503] border-2 p-3 shadow-[#fba503] shadow-2xl rounded-xl'>
                   <Image src="/body1.png" className='m-auto' width={200} height={200} alt="hello"></Image>
                </div>
            </div>
        </div>
    )
  }



  if(count === 2) { 
    return ( 
        <div className='w-[85%] m-auto text-center flex flex-col gap-3 items-center '>
            <div>
                <h1 className='text-3xl font-bold text-white mt-5'>Stap 3. Doel stellen</h1>
                <p className='text-white'>Jouw BMI is: 52.2. </p>
                <br />
                <div className='flex flex-col gap-3 justify-center flex-1'>
                    <textarea id="w3review" name="w3review" rows="4" cols="50" className='p-2 rounded-xl'></textarea>
                    <button className='font-bold px-2 py-1 bg-[#fba503] rounded-xl' onClick={() => clickHandler}>Door naar volgende stap!</button>
                </div>
              
            </div>
        </div>
    )
  }


  
  
}
