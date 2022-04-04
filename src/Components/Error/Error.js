import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className="h-[87.7vh] text-center flex flex-col items-center justify-center relative bg-contain capitalize">
            <h1 className='capitalize text-[200px] text-[red]'> 404! </h1>
            <p className='text-[cyan] text-4xl'>The Route You're Looking For is Not Found!!</p>
            <p className='my-4 text-gray-500 text-sm'>Possible Routes</p>
            <ul className='m-3' >
                <Link className='uppercase px-4 border border-orange-600 mx-2 py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/'>home</Link>
                <Link className='uppercase px-4 border border-orange-600 mx-2 py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/about'>about</Link>
                <Link className='uppercase px-4 border border-orange-600 mx-2 py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/blogs'>blogs</Link>
                <Link className='uppercase px-4 border border-orange-600 mx-2 py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/review'>review</Link>
                <Link className='uppercase px-4 border border-orange-600 mx-2 py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/dashboard'>dashboard</Link>
            </ul>
        </div>
    )
}
