import React from 'react'

export default function Hero() {
  return (
  <>
<div className="bg-gray-800 text-white py-16 bg-cover bg-center" style={{backgroundImage: `url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-medium text-black">De online community waar jij fitter van wordt!</h2>
            <p className="text-xl font-light text-black">Krijg dagelijks voedingsplannen, trainingschema's en bereik jouw doelen sneller. </p>
            <br />
            <button className="bg-orange-500 text-black py-2 px-4 rounded-lg hover:bg-orange-600 font-bold">Join het kamp!</button>
        </div>
    </div> 
  </>
  )
}
