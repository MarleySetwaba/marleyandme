import React, { useState } from 'react'
import BlogList from '@/components/Marley/blog/BlogList'
import { getBlogPosts } from './utils'




const page = async () => {

const allBlogs = getBlogPosts()
return (
    <BlogList articles={allBlogs}/>  

  )
}

export default page