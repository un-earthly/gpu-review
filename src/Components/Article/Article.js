import React from 'react'

export default function Article({ className, paragraph, heading }) {
    return (
        <div className={`flex flex-col items-center justify-center p-10 ${className}`}>
            <h1 className={`text-4xl capitalize text-center text-[cyan] m-3 `}>
                {heading}
            </h1>
            <p className={`capitalize m-1 mx-10 text-xl text-[#00b9b9] text-center `}>{paragraph}</p>
        </div>
    )
}
