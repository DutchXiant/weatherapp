import type { NextPage } from 'next'
import Link from 'next/link'
import Hero from '../Components/Hero'



const Home: NextPage = () => {
  return (
    <>
        <hr  className='text-white'/>
        <Hero />
        {/* Section Header */ }
        <div className='container width-[85%] m-auto'>
            <section className='flex mt-5 mb-5 xs:flex-col md:flex-col sm:flex-col lg:flex-col xl:flex-row'>
            
                <div className='flex flex-col flex-1 text-white p-5 shadow-md  '>
                   <h1 className='font-bold text-2xl'>Fitness Tools</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque harum soluta sunt veniam tenetur dicta, qui quas vitae suscipit unde.</p>
                   <button className='bg-[#FFA400] font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>Bekijk de tools</button>
                </div>
                <div className='flex flex-col flex-1 text-white p-5 shadow-md '>
                   <h1 className='font-bold text-2xl'>Community</h1>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolore suscipit illo autem ullam facilis odit exercitationem veritatis consequuntur sapiente?</p>
                   <button className='bg-[#FFA400] font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3 '>Join discord</button>
                </div>
                <div className='flex flex-col flex-1 text-white p-5 shadow-md'> 
                    <h1 className='font-bold text-2xl'>Gratis leerstof</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officia. Nesciunt quo incidunt enim fugit! Quisquam labore molestiae mollitia cum?</p>
                    <button className='bg-[#FFA400] font-bold rounded-bl-xl rounded-tr-xl py-1 mt-3'>Download gratis ebooks</button>
                </div>
            </section>

           
       </div>
    </>


  )
}

export default Home
