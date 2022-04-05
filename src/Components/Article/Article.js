import React from 'react'
import H1 from '../Utils/H1'

export default function Article({ className, paragraph, heading }) {
    return (
        <div className={`flex flex-col items-center justify-center text-center md:p-10 p-5 ${className}`}>
            <H1 text={heading} classList='text-[cyan]' />
            <p className={`capitalize m-1 md:mx-10 md:text-xl text-[#00b9b9] `}>{paragraph}</p>
        </div>
    )
}
