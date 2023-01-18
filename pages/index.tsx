import type { NextPage } from 'next'
import Link from 'next/link'
import Hero from '../Components/Hero'



const Home: NextPage = () => {
  return (
    <>
    <Hero />
    <div className='w-[85%] m-auto p-5 flex flex-col flex-1 justify-center items-center'>
       <section className='flex gap-3 sm:flex-col lg:flex-row md:flex-col xs:flex-col'>
        <div className='p-5 shadow-md md:max-w-[80%] flex flex-col gap-3  md:m-auto'>
             <p className='font-bold  text-3xl text-white'>Join ons discord kamp!🧑‍🤝‍🧑</p> 
             <p className='text-[#bcbcbc] text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa repudiandae porro. Eum iure laborum nobis, quod placeat accusantium quos.</p>
             <button className='relative bottom-0 text-lg bg-[#fba400] text-black font-bold py-2'>Join nu!</button>
            </div>
          <div className='p-5 shadow-md md:max-w-[80%] flex flex-col gap-3 md:m-auto'>
            <p className='font-bold text-3xl text-white'>Gepersonaliseerd Trainings Schema🏋️ </p>
            <p className="text-[#bcbcbc] text-lg">Ontvang binnen 1 minuut een professioneel trainingsschema afsteld op jouw fitness doelen.    </p>
            <Link href="/trainingsschema" className='bg-[#fba400] py-2 text-black font-bold text-center'> <button>Maak trainingsschema!</button></Link>
           </div>
           <div className='p-5 shadow-md md:max-w-[80%] flex flex-col gap-3  md:m-auto'>
            <p className='font-bold text-3xl text-white'>Gepersonaliseerd voedingschema's📝</p>
            <p className="text-[#bcbcbc] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus in harum ea. Sequi adipisci similique dolorum vitae laboriosam deserunt!</p>
            <button className=' bg-[#fba400] py-2 font-bold text-black'>Maak budget voedingsschema</button>
           </div>
       </section>
       <br />
       <br />
        <hr  className='text-white'/>

        {/* Section one  */}
       <section className='flex flex-row gap-9  p-5 xs:flex-col md:flex-row lg:flex-row'>
         <div className="flex-1   ">
             <h1 className='font-bold text-3xl text-white'>Elke week een boodschappenlijstje📝</h1>
            <p className='text-[#bcbcbc] text-lg'>Met MyFitCampPro krijg jij elke week jouw gepersonaliseerde boodschappen lijstje gestuurd in je e-mail. Dit lijstje bevat de voeding die jij nodig hebt om jouw fitness doel te behalen!  </p>
            
         </div>
         <div className='flex-1 rounded-xl shadow-3xl'><img  className='rounded-3xl w-[600px]  m-auto items-center shadow-3xl' src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img></div>
       </section>

       {/* Section 2 */}
       <section className='flex flex-row gap-9  p-5 xs:flex-col md:flex-row lg:flex-row'>
       <div className='flex-1 rounded-xl shadow-3xl xs:order-1 md:order-none'><img  className='rounded-3xl w-[600px]  m-auto items-center shadow-3xl' src="https://images.pexels.com/photos/8154267/pexels-photo-8154267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img></div>
         <div className="flex-1   ">
             <h1 className='font-bold text-3xl text-white'>MyFitCamp Pro</h1>
            <p className='text-[#bcbcbc]  text-lg'>Meten is weten. Met MyFitCamp Pro krijg jij wekelijks een dagelijks voedingplan opgestuurd. Je krijgt een voedingschema, een boodschappenlijstje en de bereidingswijze elke dag in je mail gestuurd. Alle recepten duren slechts 5 minuten om te maken! </p>
            
         </div>
       </section>

  
    </div>
    </>


  )
}

export default Home
