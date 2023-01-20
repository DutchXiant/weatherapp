import type { NextPage } from 'next'
import Link from 'next/link'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import { Training } from '../Components/svgs'




const Home: NextPage = () => {
  return (
    <>
        <Hero title="MyFitCamp" description="Fit worden begint bij" />
        {/* Section Header */ }
        <div className='container width-[60%] m-auto '>
            <div className='flex lg:flex-row  md:flex-row sm:flew-col xs:flex-col m-10'>
                   <div className='grow md:w-1/2 lg:w-1/2'>
                      <h1 className='text-white text-3xl font-bold'>Wordt ook KAST!🔥</h1>
                      <br />
                      <p className='text-gray-500'>Lorem ipsum dolor sit amet conuis eaque asperiores similique in nihil beatae, non iure iste, tempora possimus officiis. Numquam soluta quae cum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad itaque vel sed neque mollitia perferendis, nihil consequuntur veritatis labore corporis accusantium iure illum aut quae ratione deserunt. Laborum corporis numquam delectus est at excepturi aliquam debitis, laboriosam commodi dolorem placeat reiciendis soluta consectetur veniam nulla enim dignissimos rem quasi repudiandae..</p>
                      <p className='text-gray-500'>Lorem ipsum doli ate est hdebitis commodi illo? Dolor.</p>
                      <button className='mt-8 px-12 py-3 bg-gradient-to-r from-[#FFA400] to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full'>Bekijk succes verhalen!</button>
                      <br />
            
                   </div>
                   <br />
                   <div className=' md:w-1/2 lg:w-1/2'>
                      <img src="https://i.ibb.co/dfwhG16/mh-12-18-transformation-social-1576705630.jpg"></img>
                  </div>
            </div>
       </div>
    </>


  )
}

export default Home
