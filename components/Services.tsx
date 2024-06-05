import { offerings } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import TechStack from './TechStack'



const Services = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <Image width={900} height={900} className="rounded-xl" src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
        </div>
    
        <div className="mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-eerie_black text-center">
                What I Offer.
              </h2>
              <p className="text-lg text-davys_gray-300 text-center pt-5 md:pt-2">
                I usually work with many start-up enterprises as a partner for digitalization and business management. Often undertaking many tasks to add value to their company, these tasks include: 
              </p>
            </div>
    
            <ul className="space-y-6 md:space-y-4">
              {
                offerings.map(i => (
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-600 text-seasalt ">
                  <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
    
                <span className="text-base md:text-sm text-davys_gray-200 ">
                 {i.title}
                </span>
              </li>
                ))
              }
    
        
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services