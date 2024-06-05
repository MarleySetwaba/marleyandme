import { getBlogPosts } from '@/app/blog/utils'
import { profile_img } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogSideColumn = () => {
const blogs = getBlogPosts()
const featuredBlogs = blogs.slice(0,3)

  return (
    <div className="lg:col-span-1 lg:w-full lg:h-full bg-gradient-to-b from-lime-300 to-seasalt rounded-lg">
      <div className="sticky top-0 start-0 py-8 lg:ps-8 px-4">
        <div className="group flex items-center gap-x-3 border-b border-seasalt pb-8 mb-8">
          <Link className="block flex-shrink-0" href="https://medium.com/@setwabat3">
            <Image width={500} height={500} className="size-10 rounded-full" src={profile_img} alt="Image Description"/>
          </Link>

          <Link className="group grow block" href="https://medium.com/@setwabat3">
            <h5 className="group-hover:text-seasalt text-sm font-semibold text-seasalt-100 dark:group-hover:text-neutral-400 dark:text-neutral-200">
              Malesela Tlou Setwaba
            </h5>
            <p className="text-sm text-seasalt-100">
              Software Developer &amp; Business Analyst            
              </p>
          </Link>

          <div className="grow">
            <div className="flex justify-end">
              <Link href='https://medium.com/@setwabat3' className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg  bg-blue-600 text-seasalt hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                Follow
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6">
            <h3 className='text-davys_gray text-xl text-center'>Featured Blogs</h3>
          {
            featuredBlogs.map(i => (

          <Link className="group flex items-center gap-x-6" href={`/blog/${i.slug}`}>
            <div className="grow">
              <span className="text-sm font-bold text-eerie_black-100 group-hover:text-seasalt dark:text-neutral-200 dark:group-hover:text-blue-500">
       {i.metadata.title}
              </span>
            </div>

            <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
              <Image width={500} height={500} className="size-full absolute top-0 start-0 object-cover rounded-lg" src={i.metadata.image} alt="Image Description"/>
            </div>
          </Link>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default BlogSideColumn