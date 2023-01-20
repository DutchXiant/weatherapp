import type { NextPage } from 'next'
import Link from 'next/link'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import { Training } from '../Components/svgs'




const Home: NextPage = () => {
  return (
    <>
        <Hero title="€0,50" description="Gepersonaliseerd training & voedingscchema  voor " />
        {/* Section Header */ }
        <div className='container  '>
            <div className='flex lg:flex-row  md:flex-row sm:flew-col xs:flex-col m-20 gap-3'>
                   <div className='grow md:w-1/2 lg:w-1/2'>
                      <h1 className='text-white md:text-3xl  lg:text-3xl sm:text-2xl xs:text-2xl font-bold'>Hoe Kevin kast is geworden🔥</h1>
                      <br />
                      <p className='text-gray-400'>Mijn naam is Koen. Ik gebruik myfitcamp nu een tijdje om mijn trainingsschema's en voedingsschema's mee te maken. 2 maanden geleden was ik simpelweg dik, totdat ik deze website een kans gaf. Je vult de vragen in bij de quiz, en krijgt binnen 1 minuut een volledig gepersonaliseerd voeding, en trainingsschema. Voor maar 0,50 cent per dag krijg je elke week een nieuw schema, nieuwe recepten en nieuwe boodschappenlijsjtes zodat je super snel je doel behaald. </p>
                   
                      <button className='xs:px-10 sm:px-10  mt-8 px-12 py-3 bg-gradient-to-r from-[#FFA400] to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-tl-xl rounded-br-xl'>Bekijk alle succes verhalen!</button>
                      <br />
            
                   </div>
                   <br />
                   <div className=' md:w-1/2 lg:w-1/2'>
                      <img src="https://i.ibb.co/dfwhG16/mh-12-18-transformation-social-1576705630.jpg" className='m-auto rounded-[20px] '></img>
                  </div>
            </div>
       </div>
    </>


  )
}

export default Home
