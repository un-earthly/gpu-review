import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [navShadow, setNavShadow] = useState(true)
    return (
        <header className={`sticky z-50 top-0 ${navShadow ? "shadow-md shadow-[#ff000063] backdrop-blur-sm " : 'shadow-none'}`} >
            <nav className="flex justify-center items-center p-4">
                <NavLink to='/' activeclassname='active' className='uppercase mx-3 my-2 py-1 px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>Home</NavLink>
                <NavLink to='/reviews' activeclassname='active' className='uppercase mx-3 my-2 py-1 px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>reviews</NavLink>
                <NavLink to='/dashboard' activeclassname='active' className='uppercase mx-3 my-2 py-1 px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>dashboard</NavLink>
                <NavLink to='/blogs' activeclassname='active' className='uppercase mx-3 my-2 py-1 px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>blogs</NavLink>
                <NavLink to='/about' activeclassname='active' className='uppercase mx-3 my-2 py-1 px-3 border-b-2 hover:border-teal-400 hover:text-teal-600 duration-500 font-bold'>about</NavLink>
            </nav>
        </header>
    )
}
