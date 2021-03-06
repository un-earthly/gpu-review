import React from 'react'
import useReview from '../hooks/useReview'
import Review from './Review'

export default function Reviews() {

    const [review, setReview] = useReview()
    return (
        <div className='md:p-12 p-3'>

            <h1 className="md:text-5xl text-xl my-14 text-[cyan] text-center">
                Lets Hear Others Thought !!
            </h1>
            {
                review.map(review => {
                    return <Review
                        key={review.id}
                        name={review.name}
                        comment={review.comment}
                        img={review.img}
                        email={review.email}
                        id={review.id}
                        ratings={review.ratings}
                        className='border-cyan-500'
                    />
                })
            }
        </div>
    )
}
