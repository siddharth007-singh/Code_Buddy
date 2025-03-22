import { Pencil } from 'lucide-react'
import React from 'react'

const RightContent = () => {
  return (
    <div className='mr-5'>
      <div className=' text-gray-800 p-4 mt-4 h-100 w-80 bg-[#fdf7e7]'>
        <h3 className='font-extrabold'>The Overflow Blog</h3>

        <div className='mt-3 text-sm'>
          <span className='flex'><Pencil size={23}/>Improving error monitoring with AI</span>
          <span>Improving error monitoring with AI</span>
        </div>
      </div>
    </div>
  )
}

export default RightContent