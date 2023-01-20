import type { NextPage } from 'next'
import Link from 'next/link'
import Hero from '../Components/Hero'
import Card from '../Components/Card'



const Home: NextPage = () => {
  return (
    <>
        <Hero title="MyFitCamp" description="Fit worden begint bij" />
        {/* Section Header */ }
        <div className='container width-[85%] m-auto'>
            <section className='flex mt-5 mb-5 xs:flex-col h-5 md:flex-col sm:flex-col lg:flex-col xl:flex-row'>
                {/* All card */}
              <center>
                <h1 className='text-white font-bold md:text-3xl sm:text-2xl'>Workout Schema binnen 1 minuut!</h1>
               <div className='max-w-[500px]' > <p className=' text-gray-500'>Loop je ooit in de sportschool, en denk je: had ik nou maar een vast workout schema afsteld op mijn doelen? Dan is MyFitCamp de enige oplossing. Start de quiz hier boven en laat een workoutschema, en voedingsschema op maat maken <b>binnen 1 minuut!</b> </p></div>
              </center>
          </section>
       </div>
    </>


  )
}

export default Home
