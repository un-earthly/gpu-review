import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ btnText, classList, to }) {
    return (
        <Link to={to} className={`md:px-8 md:text-xl md:py-4 text-xs px-3 py-2 rounded-sm text-center md:rounded-xl duration-500 ${classList}`}>{btnText}</Link>
    )
}
