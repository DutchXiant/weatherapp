import React from 'react'

export default function Hero() {
  return (
  <>
    <div className="bg-gray-800 text-white py-16 bg-cover bg-center" style={{backgroundImage: `url('https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container mx-auto">
            <h2 className="text-3xl font-medium">Join the camp today!</h2>
            <p className="text-xl font-light">Start now and join the revolution</p>
            <button className="bg-orange-500 text-black py-2 px-4 rounded-lg hover:bg-orange-600 font-bold">Start jouw body transformatie</button>
        </div>
    </div> 
  </>
  )
}
