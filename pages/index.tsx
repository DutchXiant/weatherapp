import type { NextPage } from 'next'
import Link from 'next/link'
import Hero from '../Components/Hero'



const Home: NextPage = () => {
  return (
    <>
        <Hero title="MyFitCamp" description="Fit worden begint bij" />
        {/* Section Header */ }
        <div className='container width-[85%] m-auto'>
            <section className='flex mt-5 mb-5 xs:flex-col md:flex-col sm:flex-col lg:flex-col xl:flex-row'>
            
                <div className='flex flex-col flex-1 text-white p-5 shadow-md  '>
                   <h1 className='font-bold text-2xl'>Fitness Tools</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque harum soluta sunt veniam tenetur dicta, qui quas vitae suscipit unde.</p>
                   <Link href="/tools" className='bg-[#FFA400]  text-center font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>Bekijk de tools</Link>
                </div>
                <div className='flex flex-col flex-1 text-white p-5 shadow-md '>
                   <h1 className='font-bold text-2xl'>Community</h1>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolore suscipit illo autem ullam facilis odit exercitationem veritatis consequuntur sapiente?</p>
                   <Link href="/tools" className='bg-[#FFA400]  text-center font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>Join discord</Link>
                </div>
                <div className='flex flex-col flex-1 text-white p-5 shadow-md'> 
                    <h1 className='font-bold text-2xl'>Gratis leerstof</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officia. Nesciunt quo incidunt enim fugit! Quisquam labore molestiae mollitia cum?</p>
                    <Link href="/tools" className='bg-[#FFA400]  text-center font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>Download gratis ebooks</Link>
                </div>
            </section>

           
       </div>
    </>


  )
}

export default Home
