import { offerings } from '@/lib/constants'
import React from 'react'
import { Code } from './SVG'

const ServiceCards = () => {
  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
        {
          offerings.map(i => (
        <div className="shadow-lg rounded-lg p-5 h-full">
          <div className="flex items-center gap-x-4 mb-3">
            <div className="inline-flex justify-center items-center rounded-full">
{i.icon()}
            </div>
            <div className="">
              <h3 className="text-lg font-semibold text-eerie_black-200 ">{i.title}</h3>
            </div>
          </div>
          <p className="text-davys_gray dark:text-neutral-400">{i.description}</p>
        </div>
          ))
        }

      </div>
    </div>
  )
}

export default ServiceCards