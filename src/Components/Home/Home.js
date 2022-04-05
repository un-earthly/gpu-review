import React from 'react'
import useReview from '../hooks/useReview'
import Review from '../Reviews/Review'
import Button from '../Utils/Button'
export default function Home() {
    const [review, setReview] = useReview()
    return (
        <main className="md:p-20">


            <div className="flex mt-24 flex-col md:flex-row p-4 items-center justify-center">
                <img className='md:w-1/2 object-contain rotate-90' src="https://www.scan.co.uk/images/infopages/geforce_rtx/30-series/gigabyte/3080tigamingoc/topimg.png" alt="" />
                <div className='mt-24 mb-12 text-center md:text-left'>
                    <h1 className="md:text-6xl text-xl md:leading-[1.3] text-[cyan]">Your Top Most Desired GPU</h1>
                    <p className="md:text-xl text-sm md:tracking-wider md:leading-7 m-4 md:my-10 capitalize"> Lets hear your thoughs about Latest Market Leading gpu. how was the pricing? what about productivity? was it able to give the best for this price?</p>
                    <Button to='/reviews' btnText='Lets Hear' classList='bg-[rgb(0,139,139,.3)] my-3 hover:bg-[rgb(0,139,139,.7)] duration-500 rounded-xl' />
                </div>
            </div>
            <div className='md:my-40 mt-10 pb-5'>
                <h1 className="md:text-4xl text-center text-[cyan]">Customer Reviews({review.slice(0, 3).length})</h1>
                <div className="flex flex-wrap m-2 md:m-10">
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
                <Button to='/reviews' btnText='See All' classList={'border-[orange] hover:text-black mx-auto block w-3/4 hover:bg-[orange]  border rounded'} />
            </div>
        </main>
    )
}
