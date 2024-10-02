import Chat from '@/components/Playground/ai-ecommerce/Chat'
import React from 'react'
import { AI } from './actions'

const page = async () => {
  return (
    <AI>
    <Chat/>
    </AI>
  )
}

export default page