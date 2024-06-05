import Image from 'next/image'
import React from 'react'
import { articles } from './blog/articles'
import BlogSideColumn from './blog/BlogSideColumn'

const blog_articles = articles.slice(0,3)

const Bio = () => {
  return (
    <>
    <div className="relative w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <blockquote className="text-center lg:mx-auto lg:w-3/5">

    
        <div className="mt-6 lg:mt-10">
          <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium ">
            <svg className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-davys_gray-900 sm:h-24 sm:w-24" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z" fill="currentColor"/>
            </svg>
            <span className="relative z-10 italic text-davys_gray-400">The beginning of wisdom is this: Get wisdom. Though it cost all you have, get understanding.</span>
          </p>
        </div>
    
        <footer className="mt-6">
          <div className="text-sm text-davys_gray">Proverbs 4:7</div>
        </footer>
      </blockquote>
    </div>



<div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
  <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">

    <div className="lg:col-span-2">
      <div className="py-8 lg:pe-8">
        <div className="space-y-5 lg:space-y-8">

          <h2 className="text-4xl text-eerie_black font-bold lg:text-5xl text-center">What I Do.</h2>

    

          <p className="text-lg text-davys_gray-300 text-center">

          If you're looking to invest into digital solutions to improve your business, then I can 
help you get the most out of your investment. 

</p>
<p className="text-lg text-davys_gray-300 text-center">
With insight into market-leading technologies, industry standard business processes and solutions, and being a software developer myself, I can help
you and your organization open the door to tech solutions that fit your companies goals, budget and timeline.
</p>
<p className="text-lg text-davys_gray-300 text-center">
I take on projects that solve-problems, whether its joining a government initiative to provide 
technical support in order to digitize civic records, or just building an eCommerce website
from scratch for my fathers auto parts business. 
          </p>
<p className="text-lg text-davys_gray-300 text-center">
I take projects from whatever stage they are in, recommend the best solutions within the scope of resources at hand, then plan and execute the solution. 
          </p>

          <div className="text-center">
            <div className="grid lg:grid-cols-2 gap-3">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                <figure className="relative w-full h-60">
                <Image width={500} height={500} className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
                </figure>
                <figure className="relative w-full h-60">
                  <Image width={500} height={500} className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1529797233791-cb08843aeac2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
                </figure>
              </div>
              <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                  <Image width={500} height={500} className="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
              </figure>
            </div>

            <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
              Marley &amp; The Process
            </span>
          </div>


        </div>
      </div>
    </div>

   <BlogSideColumn/>
  </div>
</div>
    </>
  )
}

export default Bio