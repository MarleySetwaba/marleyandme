"use client"
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { useState } from 'react'

const blogLinks = [
  {
    title: 'All',
    category: null,
    href: '/blog'
  },
  {
    title: 'Business Analysis',
    category: 'business_analysis',
    href: '/blog?category=business_analysis'
  },
  {
    title: 'Dev',
    category: 'dev',
    href: '/blog?category=dev'
  },
  {
    title: 'Case Studies',
    category: 'case_studies',
    href: '/blog?category=case_studies'
  },
]


const BlogNav = () => {
const [isOpen, setIsOpen] = useState(false)


  return (

<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 lg:w-1/2 w-3/4 text-sm mx-auto">
  <nav className="mt-6 w-full bg-white border border-blue-500 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-neutral-800 dark:border-neutral-700" aria-label="Global">
    <div className="flex items-center justify-between">
    <div className='flex flex-row justify-center'>
      <h1 className="text-xl font-semibold text-black ">Marley </h1>
      <Link className='text-xl font-semibold  text-blue-600 hover:text-eerie_black-500' href='#'>&lt;&#47;&amp;Blog.&gt;</Link>
      </div>
      <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
      </div>


    </div>
    <div className="hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
       {
        blogLinks.map(i => (

          <Link className="py-3 ps-px px-3 font-medium text-davys_gray hover:text-eerie_black-500" href={i.href}>{i.title}</Link>
        ))
       }
       
       
      </div>
    </div>

    <div className='md:hidden'>
        <Transition show={isOpen}>
        <div className="flex flex-col py-2 md:py-0 md:ps-7">
          {
            blogLinks.map(i => (

              <Link className="py-3 ps-px sm:px-3 font-medium text-center text-davys_gray" href={i.href}>{i.title}</Link>
            ))
          }
    
      </div>
        </Transition>
    </div>
  </nav>
</header>


  )
}

export default BlogNav