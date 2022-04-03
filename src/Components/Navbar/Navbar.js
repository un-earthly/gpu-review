import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="md:flex justify-around items-center">
            <div className="logo"></div>
            <ul className="flex items-center justify-center">
                <NavLink activeclassname='active' className=''>1</NavLink>
                <NavLink activeclassname='active' className=''>2</NavLink>
                <NavLink activeclassname='active' className=''>3</NavLink>
                <NavLink activeclassname='active' className=''>4</NavLink>
            </ul>
        </nav>
    )
}
