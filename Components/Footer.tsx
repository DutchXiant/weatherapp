import React from 'react'

export default function Footer() {
  return (
    <>
       <div className="bg-gray-900 mt-[200px]">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy;  AventuraMedia. </p>
          <div className="order-1 md:order-2">
            <span className="px-2">Over ons</span>
            <span className="px-2 border-l">Contact</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
