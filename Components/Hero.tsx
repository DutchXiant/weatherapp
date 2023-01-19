import React from 'react'

export default function Hero() {
  return (
    <div className='w-100 '>
         <header
        class="w-full h-96 bg-[url('https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            <h1 class=" text-center text-5xl text-white font-bold drop-shadow-lg">Welkom bij het
            <span class="text-[#FFA400]"> FitCamp!</span>
            </h1>
            <p class="mt-5 text-center text-lg text-white opacity-70">This webiste is about programming and things like
                that</p>
            <a class="mt-8 px-12 py-3 bg-gradient-to-r from-[#FFA400] to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                href="#">Get Started</a>
        </div>
    </header>
    </div>
  )
}
