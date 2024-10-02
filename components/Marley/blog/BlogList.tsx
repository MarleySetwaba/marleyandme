"use client"
import React, { Suspense, useState } from 'react'
import BlogCard from './BlogCard'
import { useSearchParams } from 'next/navigation'
import { Transition } from '@headlessui/react'
import { blogLinks } from '@/lib/constants'
import Link from 'next/link'
import { Metadata } from '@/app/marley/blog/utils'

export type BlogArticle = {
    metadata: Metadata;
    slug: string;
    content: string;
}

const BlogList = ({articles}: {articles: BlogArticle[]}) => {
  const [isOpen, setIsOpen] = useState(false)
const [posts, setPosts] = useState(articles) 
const [categoryLink, setCategoryLink] = useState<string>('all')

const handleClick = (category: string) => {
  if(category === 'all'){
    setPosts(articles)
    setCategoryLink('all')
  }
  else {
  const filteredPosts = articles.filter(i => i.metadata.category === category)
  setPosts(filteredPosts)
  setCategoryLink(category)
}
}

  return (
    <>
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 lg:w-1/2 w-3/4 text-sm mx-auto">
  <nav className="mt-6 w-full bg-white border border-blue-500 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-neutral-800 dark:border-neutral-700" aria-label="Global">
    <div className="flex items-center justify-between">
    <div className='flex flex-row justify-center'>
      <h1 className="text-xl font-semibold text-black ">Marley </h1>
      <Link className='text-xl font-semibold  text-blue-600 hover:text-eerie_black-500' href='#'>&lt;&#47;&amp;Blog.&gt;</Link>
      </div>
      <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-blue-600 text-davys_gray disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
      </div>


    </div>
    <div className="hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
       {
        blogLinks.map(i => (

          <button className={`py-3 ps-px px-3 font-medium hover:text-eerie_black-500 ${ categoryLink === i.category ? 'text-blue-600' : 'text-davys_gray'}`} onClick={() => handleClick(i.category)} >{i.title}</button>
        ))
       }
       
       
      </div>
    </div>

    <div className='md:hidden'>
        <Transition show={isOpen}>
        <div className="flex flex-col py-2 md:py-0 md:ps-7">
          {
            blogLinks.map(i => (

              <button className={`py-3 ps-px sm:px-3 font-medium text-center ${ categoryLink === i.category ? 'text-blue-600' : 'text-davys_gray'}`} onClick={() => handleClick(i.category)}>{i.title}</button>
            ))
          }
    
      </div>
        </Transition>
    </div>
  </nav>
</header>
{/* Posts */}
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
    <div className="mt-3 max-w-2xl text-center mx-auto">
      <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
Blog.
      </h1>
    </div>

    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-davys_gray">
        Keep up with me, read about all my projects, ideas and interests.<br/>
        Keep up-to-date with the latest Business Analyst and Dev trends that I think you might find as interesting as I do.<br/>
        Read Case Studies on past projects and gain some insight into how I work.
       </p>

    </div>
    </div>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid lg:grid-cols-2 gap-6">

    {
    posts.map(i => (
        <BlogCard metadata={i.metadata} slug={i.slug}/>
      ))
    }
 
  </div>
  </div>
  </>
  )
}

export default BlogList