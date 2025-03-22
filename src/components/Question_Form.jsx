import React from 'react'
import Header from './Header'

const QuestionForm = () => {
  return (
    <div> 
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tags</label>
                <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Ask Question</button>
        </form>
    </div>
  )
}

export default QuestionForm