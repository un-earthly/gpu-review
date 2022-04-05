import React from 'react'

export default function H1({ classList, text }) {
    return (
        <h1 className={`md:text-4xl text-xl text-center capitalize md:m-3 ${classList}`} >{text}</h1>
    )
}
