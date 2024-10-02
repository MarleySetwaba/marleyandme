import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { items } from './items'

export const ProductsContainer = ({ item }: {item: any[]}) => {
  

  return (
    <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
{item.map(i => (
  <Product product={i}/>
))}
        </div>
  )
}

export const Product = ({product}: {product: any} ) => {
    return (
        <Link className="group flex flex-col focus:outline-none max-w-2xl md:max-w-5xl" href="#">
        <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-rose_quartz-900 rounded-2xl p-4">
          <Image className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-contain rounded-2xl max-w-[300px]" src={product.image_url} alt="Blog Image" width={400} height={400} priority placeholder='empty'/>
        </div>
    
        <div className="pt-4">
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 ">
            {product.name}
          </h3>
          <span className='pl-4 text-sm text-davys_gray'>ZAR {product.price}</span>
          <p className="mt-1 text-davys_gray-600">
            A revamped and dynamic approach to yoga analytics
          </p>
    
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="py-1.5 px-3 bg-white text-davys_gray-300 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
             {product.category}
            </span>
 
          </div>
        </div>
      </Link>
    )
}

