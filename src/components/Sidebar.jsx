import { BookMarked, ChartArea, Home, Tag, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='mt-3 ml-5'>
        <ul className='flex flex-col gap-4 font-semibold text-lg cursor-pointer'>
            <li className='flex gap-2'><Home/> <Link to="/">Home</Link></li>
            <li className='flex gap-2'><ChartArea/> Questions</li>
            <li className='flex gap-2'><Tag/> Tags</li>
            <li className='flex gap-2'><BookMarked/>
                <a href='/users'>Saves</a>
            </li>
            <li className='flex gap-2'><Users/> Users</li>
            <li>
                <button>Logout</button>
            </li>

                <div>
                    <img src="/teams-promo.svg" alt="Teams Promo" className="w-32 h-auto mt-4" />
                    <span className='font-extralight text-sm'>Ask questions, find answers and <br/>
                        collaborate at work with <br/>
                        Stack Overflow for Teams.
                    </span>
                </div>
        </ul>
    </div>
  )
}

export default Sidebar




