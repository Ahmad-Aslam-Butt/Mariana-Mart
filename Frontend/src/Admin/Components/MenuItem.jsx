import React from 'react'
import { Link } from 'react-router-dom'

export const MenuItem = ({ title, link}) => {
    return (
        <Link to={link} className='md:hover:cursor-pointer'>
            <div className='md:hover:bg-[#ffffff20] md:px-4 md:py-2 md:hover:cursor-pointer text-sm w-[100%]'>
                <p className='md:hover:cursor-pointer'>{title}</p>
            </div>
        </Link>
    )
}
