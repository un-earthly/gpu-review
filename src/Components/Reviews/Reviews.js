import React from 'react'
import useReview from '../hooks/useReview'

export default function Reviews() {

    const [review, setReview] = useReview()
    return (
        <div>Reviews : {review.length}</div>
    )
}
