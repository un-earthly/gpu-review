import React from 'react'

export default function Review({ name, img, email, comment, ratings, className }) {
    return (
        <article className={`${className} text-lg border duration-500 ease-in my-4 rounded p-10`}>
            <div className='flex justify-between text-sm'>
                <div className='flex items-center justify-center'>
                    <img src={img} className='rounded-full w-10 h-10 mr-4' alt="" />
                    <div>
                        <p> Name : {name}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
                <p>Ratings: <spam className="text-[orange]">{ratings}</spam></p>
            </div>
            <q className='text-center text-4xl mx-24 mt-10 block capitalize'>{comment}</q>
        </article>
    )
}
