import React from 'react'

export default function Button({ btnText, classList }) {
    return (
        <button className={`px-8 text-xl py-4 ${classList}`}>{btnText}</button>
    )
}
