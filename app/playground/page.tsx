import Schedule from '@/components/Schedule'
import React from 'react'

const page = () => {
  return (
    <div>
    <h2 className='text-blue-600 text-2xl text-center'>Schedule</h2>
    <Schedule start_date='2024-07-26'/>
    </div>
  )
}

export default page