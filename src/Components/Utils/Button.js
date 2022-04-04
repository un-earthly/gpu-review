import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ btnText, classList, to }) {
    return (
        <Link to={to} className={`px-8 text-xl py-4 duration-500 ${classList}`}>{btnText}</Link>
    )
}
