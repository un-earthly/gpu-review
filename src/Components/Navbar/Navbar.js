import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className={`sticky z-50 top-0 shadow-md shadow-[#ff000063] backdrop-blur-sm `} >
            <nav className="flex justify-center items-center md:p-4 px-2">
                <NavLink to='/' activeclassname='active' className='uppercase text-xs md:text-lg mx-2 my-1 py-1 md:px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>Home</NavLink>
                <NavLink to='/reviews' activeclassname='active' className='uppercase text-xs md:text-lg mx-1 my-2 py-1 md:px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>reviews</NavLink>
                <NavLink to='/dashboard' activeclassname='active' className='uppercase text-xs md:text-lg mx-1 my-2 py-1 md:px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>dashboard</NavLink>
                <NavLink to='/blogs' activeclassname='active' className='uppercase text-xs md:text-lg mx-2 my-1 py-1 md:px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>blogs</NavLink>
                <NavLink to='/about' activeclassname='active' className='uppercase text-xs md:text-lg mx-2 my-1 py-1 md:px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>about</NavLink>
            </nav>
        </header>
    )
}
