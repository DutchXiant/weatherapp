import type { NextPage } from 'next'
import Link from 'next/link'
import Hero from '../Components/Hero'

const Home: NextPage = () => {
  return (
    <>
    <Hero />
    <div className='w-[85%] m-auto p-5 flex flex-col flex-1 justify-center items-center'>
       <section className='flex gap-3 sm:flex-col lg:flex-row md:flex-col xs:flex-col'>
          <div className='p-5 shadow-md md:max-w-[80%] flex flex-col gap-3 md:m-auto'>
            <p className='font-bold text-lg text-white'>Gepersonaliseerd Trainings Schema</p>
            <p className="text-[#bcbcbc]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus in harum ea. Sequi adipisci similique dolorum vitae laboriosam deserunt!</p>
            <button className=' bg-[#fba400] py-2 text-black font-bold'>Leer meer</button>
           </div>
           <div className='p-5 shadow-md md:max-w-[80%] flex flex-col gap-3  md:m-auto'>
            <p className='font-bold text-lg text-white'>Gepersonaliseerd voedingschema's</p>
            <p className="text-[#bcbcbc]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus in harum ea. Sequi adipisci similique dolorum vitae laboriosam deserunt!</p>
            <button className=' bg-[#fba400] py-2 font-bold text-black'>Leer meer</button>
           </div>
           <div className='p-5 shadow-md md:max-w-[80%] flex flex-col gap-3  md:m-auto'>
             <p className='font-bold  text-lg text-white'>Community van fitness die-hards!</p> 
             <p className='text-[#bcbcbc]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa repudiandae porro. Eum iure laborum nobis, quod placeat accusantium quos.</p>
             <button className='relative bottom-0 bg-[#fba400] text-black font-bold py-2'>Leer meer</button>
            </div>
       </section>
    </div>
    </>


  )
}

export default Home
