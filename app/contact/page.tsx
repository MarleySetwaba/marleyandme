import React from 'react'

const page = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-eerie_black sm:text-4xl ">
            Let's Connect.
          </h1>
          <p className="mt-1 text-davys_gray ">
            I'd love to know how I can help you.
          </p>
        </div>
    
        <div className="mt-12 mx-auto gap-6 lg:gap-16 w-full md:w-1/2">
          <div className="flex flex-col border border-davys_gray-800 rounded-xl p-4 sm:p-6 lg:p-8 ">
            <h2 className="mb-8 text-xl font-semibold text-eerie_black text-center">
              Pop in your details.
            </h2>
    
            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                    <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className='form-input' placeholder="First Name"/>
                  </div>
    
                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                    <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="form-input" placeholder="Last Name"/>
                  </div>
                </div>
    
                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                  <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1"  className="form-input" placeholder="Email"/>
                </div>
    
                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
                  <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="form-input" placeholder="Phone Number"/>
                </div>
    
                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
                  <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows={4} className="form-input" placeholder="Details"></textarea>
                </div>
              </div>
    
              <div className="mt-4 grid">
                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  bg-blue-600 text-seasalt hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
              </div>
    
              <div className="mt-3 text-center">
                <p className="text-sm text-davys_gray">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
    
      
        </div>
      </div>
    </div>
  )
}

export default page