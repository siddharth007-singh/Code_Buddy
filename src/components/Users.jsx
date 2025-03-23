import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Search from './Search'

const users=[
  {
    "name": "John Doe",
    "country": "USA",
    "no_of_questions_answered": 120,
    "image": "https://example.com/user1.jpg"
  },
  {
    "name": "Alice Smith",
    "country": "Canada",
    "no_of_questions_answered": 95,
    "image": "https://example.com/user2.jpg"
  },
  {
    "name": "Raj Kumar",
    "country": "India",
    "no_of_questions_answered": 150,
    "image": "https://example.com/user3.jpg"
  },
  {
    "name": "Maria Lopez",
    "country": "Spain",
    "no_of_questions_answered": 80,
    "image": "https://i.pravatar.cc/150?img=3"
  }
]

const Users = () => {   

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Sidebar + Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Search Bar */}
          <div className="flex justify-center items-center mb-6">
            <input
              type="text"
              className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Search User..."
            />
            <button className="bg-amber-600 text-white px-4 py-2 rounded-r-lg hover:bg-amber-700 transition duration-300">
              Search
            </button>
          </div>


          {users.map((user, i)=>(
            <div key={i} className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center ">
              <img src={user.image} alt={user.name} className="w-16 rounded-full" />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.country}</p>
                <p className="text-gray-500">{user.no_of_questions_answered} Questions Answered</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Users