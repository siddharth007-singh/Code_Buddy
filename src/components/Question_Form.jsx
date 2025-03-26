import React, {useState} from 'react'
import Header from './Header'

const QuestionForm = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='font-bold text-3xl py-10 px-10'>Ask a public question</h1>

        
        <div className='flex flex-row gap-10'>
            {/*Form*/}
            <div className='w-full h-full border border-gray-100 shadow-sm px-5 py-5'>
                <form>
                    <div>
                        <label className='block font-bold text-lg'>Title</label>
                        <span className='text-sm text-gray-500'>Be specific and imagine you’re asking a question to another person</span>
                        <input type='text' className='w-full border border-gray-200 rounded-md px-3 py-2 mt-1'/>
                    </div>
                    <div className='mt-3'>
                        <label className='block font-bold text-lg'>Body</label>
                        <span className='text-sm text-gray-500'>Include all the information someone would need to answer your question</span>
                        <textarea className='w-full border border-gray-200 rounded-md px-3 py-2 mt-1 h-40'/>
                    </div>

                    <div className='mt-3'>
                        <label className='block font-bold text-lg'>Tags</label>
                        <span className='text-sm text-gray-500'>Add up to 5 tags to describe what your question is about</span>
                        <input type='text' className='w-full border border-gray-200 rounded-md px-3 py-2 mt-1'/>
                    </div>


                    <div className='mt-3'>
                        <button className='bg-[#1b74d1] text-white px-5 py-2 rounded '>Review your question</button>
                    </div>
                </form>
            </div>

            {/*step*/}
            
            <div className='w-1/2 h-full bg-pink-400 px-5 py-5'>
                Yash design Part
            </div>
        </div>
    </div>
    
  )
}

export default QuestionForm