import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Footer = () => {
    const hover = 'hover:text-white transition';

    return (
        <div className='flex flex-col m-5 rounded-3xl overflow-hidden'>
            <footer className='bg-[#222222] flex items-stretch justify-end max-lg:flex-col'>

                <div className="w-3/6 flex flex-col gap-8 ites-end py-15 px-15 max-lg:w-full max-lg:px-5 max-lg:py-5">
                    <div className="  flex items-center justify-center gap-5 border border-[#FFFFFF26] px-20 py-5 rounded-2xl max-lg:px-5 max-sm:flex-col max-lg:items-start">
                        <div className="flex items-center text-white gap-3">
                            <i className="bi bi-envelope-fill text-[#ED5548]"></i>
                            <span className="semibold">
                                contact@example.com
                            </span>
                        </div>
                        <div className="flex items-center text-white gap-3">
                            <i className="bi bi-telephone-fill text-[#ED5548]"></i>
                            <span className="semibold">
                                +208-6666-0112
                            </span>
                        </div>
                        <div className="flex items-center text-white gap-3">
                            <i className="bi bi-geo-alt-fill text-[#ED5548]"></i>
                            <span className="semibold">
                                59 Main Street, USA
                            </span>
                        </div>
                    </div>
                    <div className="flex max-sm:flex-col ">
                        <div className="flex flex-col gap-3 w-1/2 max-sm:w-full max-sm:my-5">
                            <img src="/logo-white.png" alt="" className='h-[40px] w-fit' />
                            <span className="text-[#8e8e8e] max-w-[300px]">
                                Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia
                                curabitur lacinia mollis.
                            </span>
                        </div>
                        <div className="flex flex-col gap-5 text-[#8e8e8e] w-1/3 max-sm:my-5">
                            <span className="text-white bold text-xl">Links</span>
                            <div className="flex flex-col gap-3">
                                <Link to='/about' className={hover}>About us</Link>
                                <Link to='/sccount' className={hover}>My Account</Link>
                                <Link to='/listings' className={hover}>All Listings</Link>
                                <Link to='/pricing' className={hover}>Pricing Plan</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 text-[#8e8e8e] w-1/3 ">
                            <span className="text-white bold text-xl">Explore</span>
                            <div className="flex flex-col gap-3">
                                <Link to='/about' className={hover}>Contact us</Link>
                                <Link to='/sccount' className={hover}>How It Work</Link>
                                <Link to='/listings' className={hover}>Support</Link>
                                <Link to='/pricing' className={hover}>Help</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/6 flex flex-col gap-10 px-12 bg-black py-15 max-lg:w-full max-sm:p-8">

                    <div className="flex gap-2 items-center">
                        <span className='px-3 py-2 rounded-sm border border-[#e2e2e2] hover:bg-[#ed5548] hover:border-[#ed5548] transition duration-300 cursor-pointer  text-white '>
                            <i className="bi bi-facebook"></i>
                        </span>
                        <span className='px-3 py-2 rounded-sm border border-[#e2e2e2] hover:bg-[#ed5548] hover:border-[#ed5548] transition duration-300 cursor-pointer  text-white '>
                            <i className="bi bi-twitter-x"></i>
                        </span>
                        <span className='px-3 py-2 rounded-sm border border-[#e2e2e2] hover:bg-[#ed5548] hover:border-[#ed5548] transition duration-300 cursor-pointer  text-white '>
                            <i className="bi bi-linkedin"></i>
                        </span>
                        <span className='px-3 py-2 rounded-sm border border-[#e2e2e2] hover:bg-[#ed5548] hover:border-[#ed5548] transition duration-300 cursor-pointer  text-white '>
                            <i className="bi bi-youtube"></i>
                        </span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-xl text-white bold">
                            Newsletter
                        </span>
                        <div className="flex justify-between items-center bg-white p-2 rounded-full w-2/3 max-sm:w-full">
                            <input type="text" placeholder='Email address' className='placeholder:text-[#8b8b8b] placeholder:text-sm px-1' />
                            <span className='rounded-full px-3 py-2 bg-[#ed5548] text-white'>
                                <i className="bi bi-arrow-right"></i>
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="" id="" />
                            <span className="text-[#8b8b8b]">I agree to the <span className='text-[#6053f0] underline'>Privacy Policy</span></span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
