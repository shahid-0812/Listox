import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 h-screen '>
            <img src="/404-image.png" className='my-20' alt="" />
            <h1 className='text-4xl bold'>OPPS! This Page is Not Found</h1>
            <span className="text-lg text-[#8b8b8b] text-center max-w-[550px]">
                The page requested could not be found. This could be a spelling error in the URL or a removed page.
            </span>
            <Link to='/' className="text-white max-lg:w-full bg-[#ED5548] px-10 py-4 rounded-full m-2 flex items-center gap-3 cursor-pointer max-sm:justify-center hover:opacity-80 transition duration-300">
                <i className="bi bi-arrow-left-circle"></i>
                <span>Back to Homepage</span>
            </Link>
        </div>
    )
}
