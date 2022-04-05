import React from 'react'
import { Link } from 'react-router-dom'
import H1 from '../Utils/H1'

export default function Error() {
    return (
        <div className="min-h-[87.7vh] p-10 text-center flex flex-col items-center justify-center relative bg-contain capitalize">
            <H1 classList='md:text-[200px] text-8xl text-[red]' text={'404!'} />
            <p className='text-[cyan] text-4xl'>The Route You're Looking For is Not Found!!</p>
            <p className='my-4 text-gray-500 text-sm'>Possible Routes</p>
            <ul className='md:m-3 flex flex-col gap-2' >
                <Link className='uppercase px-4 border border-orange-600 md:mx-2 md:py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/'>home</Link>
                <Link className='uppercase px-4 border border-orange-600 md:mx-2 md:py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/about'>about</Link>
                <Link className='uppercase px-4 border border-orange-600 md:mx-2 md:py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/blogs'>blogs</Link>
                <Link className='uppercase px-4 border border-orange-600 md:mx-2 md:py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/review'>review</Link>
                <Link className='uppercase px-4 border border-orange-600 md:mx-2 md:py-2 rounded-full hover:bg-orange-600 hover:text-black hover:font-bold duration-500' to='/dashboard'>dashboard</Link>
            </ul>
        </div>
    )
}
