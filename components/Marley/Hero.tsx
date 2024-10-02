import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
    <div className="lg:col-span-3">
      <div className='flex flex-row justify-center'>
      <h1 className="text-4xl font-bold text-black md:text-5xl lg:text-6xl">Marley </h1>
      <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl text-blue-600 hover:text-eerie_black-500'>&lt;&#47;&amp;Me.&gt;</h1>
      </div>
      <div>

      <p className="mt-3 text-lg text-davys_gray text-center">IIBA Certified Business Analyst &amp; Full Stack Web Developer</p>
      </div>

      <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <div className="w-full sm:w-auto">
          <label htmlFor="email-input" className="sr-only">Email</label>
          <input type="text" id="email-input" name="email-input" className="form-input" placeholder="Pop In Your Email"/>
        </div>
        <button className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-seasalt hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
         Say Hi.
        </button>
      </div>

      {/* <!-- Brands --> */}
      <div className="mt-6 lg:mt-12">
        <span className="text-xs font-medium text-gray-800 uppercase">Certified by:</span>

        <div className="mt-4 flex gap-x-8">

          <Image src='/marley/home/iiba_img.png' width={500} height={144} className='w-full md:w-1/2 h-auto ' alt='iiba'/>

        </div>
      </div>
    </div>

    <div className="lg:col-span-4 mt-10 lg:mt-0">
      <Image className="w-full rounded-xl" width={500} height={500} src='https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Hero Image"/>
    </div>
  </div>
</div>

  )
}

export default Hero