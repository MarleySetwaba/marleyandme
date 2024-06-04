import Resume from '@/components/Resume'
import ServiceCards from '@/components/ServiceCards'
import TechStack from '@/components/TechStack'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="mt-3 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-eerie-black text-4xl md:text-5xl lg:text-6xl ">
        Services

          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-davys_gray">
            So, you're a start-up and you've got a product or service that you're just dying to bring to market.
            </p>
            <p className="text-lg text-davys_gray">
            You might lack the technical know-how to handle the modern way of doing business.
            </p>
          <p className="text-lg text-davys_gray">
 Thats where I come in.
            </p>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 border border-transparent text-seasalt text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="/contact">
            Work With Me
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
  
        </div>
        <div className='p-4'>
<ServiceCards/>
        </div>
    <TechStack/>
 <Resume/>
      </div>

  )
}

export default page