import React, { useState } from 'react'
import { getBlogPosts } from './utils'
import BlogList from '@/components/blog/BlogList'
import { baseUrl } from '../sitemap'



const page = async () => {

const allBlogs = getBlogPosts()
return (
    <BlogList articles={allBlogs}/>  

  )
}

export default page