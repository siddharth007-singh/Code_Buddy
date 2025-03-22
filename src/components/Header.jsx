import React from 'react';
import Search from "./Search";
import { Link } from 'react-router-dom';



const Header = ()=>{
    return (
        <nav className="w-full bg-amber-500 px-5 py-5 flex flex-row items-center gap-5">
            <div className='text-3xl font-extrabold'><a href='/'>Code Buddy</a></div>

            <Search size={20}/>

            <ul className='flex flex-row justify-between gap-5 mx-auto'>
                <li>Home</li>
                <li>Questions</li>
            </ul>
        
        </nav>
    )
}
 
export default Header;

