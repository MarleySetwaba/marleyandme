
import BlogCard from '@/components/blog/BlogCard'
import { useSearchParams } from 'next/navigation'
import { articles } from '@/components/blog/articles'
import React from 'react'
// import BlogList from '@/components/blog/BlogList'
import { getBlogPosts } from './utils'
import BlogList from '@/components/blog/BlogList'

const page = async () => {

const allBlogs = getBlogPosts()
// const search = useSearchParams().get('category')





  return (
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
<BlogList articles={allBlogs}/>

    </div>
  )
}

export default page