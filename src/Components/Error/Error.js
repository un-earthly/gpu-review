import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        // <div className='h-[87.7vh] text-center flex flex-col items-center justify-center bg-contain bg-center  bg-no-repeat bg-[url("https://img.freepik.com/free-vector/404-error-page-found-natural-fantasy-illustration-concept-web-missing-page_111925-144.jpg?w=740")]'>
        <div className='h-[87.7vh] text-center flex flex-col items-center justify-center'> <h1 className='capitalize text-7xl text-[red]'> 404! </h1>
            <p className='text-4xl'>possible routes</p>
            <ul className='text-[orange] '>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/reviews'>Reviews</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/blogs'>Blogs</Link>
                </li>
                <li>

                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
        // </div>
    )
}
