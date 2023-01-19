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
            <section className='flex mt-5 mb-5 xs:flex-col md:flex-col sm:flex-col lg:flex-col xl:flex-row'>
                {/* All card */}
                <Card title="Fitness Tools" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officia. Nesciunt quo incidunt enim fugit! Quisquam labore molestiae mollitia cum?" btnText="Gebruik fitness tools"/>
                <Card title="Gratis leerstof" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officia. Nesciunt quo incidunt enim fugit! Quisquam labore molestiae mollitia cum?" btnText="Download ebooks"/>
                <Card title="Community" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, officia. Nesciunt quo incidunt enim fugit! Quisquam labore molestiae mollitia cum?" btnText="Bekijk community"/> 
          </section>

           
       </div>
    </>


  )
}

export default Home
