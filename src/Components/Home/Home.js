import React from 'react'
import useReview from '../hooks/useReview'
import Review from '../Reviews/Review'
import Button from '../Utils/Button'
export default function Home() {
    const [review, setReview] = useReview()
    return (
        <main className="p-20">
            {/* home banner */}


            <div className="flex mt-24 ">
                <img className='w-1/2 object-contain rotate-90' src="https://www.scan.co.uk/images/infopages/geforce_rtx/30-series/gigabyte/3080tigamingoc/topimg.png" alt="" />
                <div className="texts">
                    <h1 className="text-6xl leading-[1.3]">Your Top Most Desired GPU</h1>
                    <p className="text-xl tracking-wider leading-7 my-10 capitalize"> Lets hear your thoughs about Latest Market Leading gpu. how was the pricing? what about productivity? was it able to give the best for this price?</p>
                    <Button to='/reviews' btnText='Lets Hear' classList='bg-[rgb(0,139,139,.3)] hover:bg-[rgb(0,139,139,.7)] duration-500 rounded-xl' />
                </div>
            </div>
            {/* reviews */}
            <div className='my-40'>
                <h1 className="text-4xl text-center">Customer Reviews({review.slice(0, 3).length})</h1>
                <div className="flex flex-wrap m-10">
                    {
                        review.slice(0, 3).map(review => <Review
                            className={'border-[#ff8800] w-full text-sm'}
                            key={review.id}
                            name={review.name}
                            email={review.email}
                            ratings={review.ratings}
                            comment={review.comment}
                            img={review.img} />)
                    }
                </div>
                <Button to='/reviews' btnText='See All' classList={'border-[orange] text-center hover:text-black mx-auto block w-3/4 hover:bg-[orange]  border rounded'} />
            </div>
        </main>
    )
}
