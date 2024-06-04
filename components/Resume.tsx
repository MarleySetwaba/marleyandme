import React from 'react'

const Resume = () => {
    const pdfUrl = '/malesela_setwaba_resume_062024.pdf'
  return (
    <div className='w-full md:w-1/2 mx-auto'>
      <iframe src={pdfUrl + '#view=FitH'} className='w-full h-[600px]' />
    </div>
  )
}

export default Resume