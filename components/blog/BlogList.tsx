"use client"
import React from 'react'
import BlogCard from './BlogCard'
import { useSearchParams } from 'next/navigation'
import { articles } from './articles'
import { Metadata, getBlogPosts } from '@/app/blog/utils'

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
          < BlogCard key={i.slug} metadata={i.metadata} slug={i.slug}/>
        )) : articles.map(i => (
            < BlogCard key={i.slug} metadata={i.metadata} slug={i.slug}/>

        ))
      }
  </div>
  </div>
  )
}

export default BlogList