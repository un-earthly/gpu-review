import React from 'react'

export default function Review({ name, img, email, comment, ratings, className }) {
    return (
        <article className={`${className} text-lg border duration-500 ease-in my-1 md:my-4 rounded p-2 md:p-10`}>
            <div className='md:flex md:justify-between md:text-left text-center text-sm'>
                <div className='flex items-center justify-center flex-col md:flex-row'>
                    <img src={img} className='rounded-full w-10 h-10 mr-2 md:mr-4' alt="" />
                    <div className=''>
                        <p> Name : {name}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
                <p>Rating: <span className="text-[orange]">{ratings}</span></p>
            </div>
            <q className='text-center text-2xl md:text-4xl md:mx-24 md:mt-10 m-5 block capitalize text-[orange]'>{comment}</q>
        </article>
    )
}
