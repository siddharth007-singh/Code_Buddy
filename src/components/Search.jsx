import React from 'react'


const Search = () => {
    return (
        <div className='justify-between gap-5 mx-auto shadow-lg'>
            <input type="text" className="text-gray-900 border border-amber-950 py-1.5 pr-7 pl-10" placeholder="Search Bar"/>
            <button type='submit' className='text-gray-900 border border-amber-950 py-1.5 pr-4 pl-4 cursor-pointer'>Submit</button>
        </div>

    )
}

export default Search