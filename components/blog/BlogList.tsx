"use client"
import React, { Suspense } from 'react'
import BlogCard from './BlogCard'
import { useSearchParams } from 'next/navigation'
import { Metadata } from '@/app/blog/utils'

export type BlogArticles = {
    metadata: Metadata;
    slug: string;
    content: string;
}

const BlogList = ({articles}: {articles: BlogArticles[]}) => {

    const search = useSearchParams().get('category')
    const filteredArticles = articles.filter(i => i.metadata.category === search)


  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid lg:grid-cols-2 gap-6">
    
      {
       search ? filteredArticles.map(i => (
        <Suspense>
          < BlogCard key={i.slug} metadata={i.metadata} slug={i.slug}/>
          </Suspense>
        )) : articles.map(i => (
            < BlogCard key={i.slug} metadata={i.metadata} slug={i.slug}/>
        ))
      }
  </div>
  </div>
  )
}

export default BlogList