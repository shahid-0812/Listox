import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const hover = 'regular hover:text-[#ed5548] transition semibold'

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = (scrollY / scrollHeight) * 100

            if (scrollPercent > 1) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav
                className={`fixed  z-101 flex justify-between items-center  backdrop-blur-md transition-all duration-500
      ${scrolled
                        ? 'w-full left-0 top-0 translate-x-0 rounded-none bg-white shadow-md'
                        : 'left-1/2 transform -translate-x-1/2 w-[90%] top-15  rounded-full bg-gray-100 bg-opacity-90 my-10'
                    }`}
            >
                <div className="flex justify-between items-center gap-5 px-8">

                    <img src="/logo.png" alt="logo" className='h-8' />
                    <i className="bi bi-list lg:hidden max-sm:flex" onClick={() => setMenuOpen(!menuOpen)}></i>
                    <div className="flex items-center gap-8 px-10 py-6  max-lg:hidden uppercase text-sm">
                        <NavLink to="/" className={hover}>Home</NavLink>
                        <NavLink to="/listing" className={hover}>listings</NavLink>
                        <NavLink to="/apartment" className={hover}>pricing</NavLink>
                        <NavLink to="/about" className={hover}>pages</NavLink>
                        <NavLink to="/gallery" className={hover}>news</NavLink>
                        <NavLink to="/contact" className={hover}>Contact</NavLink>
                        <NavLink to="/gallery" className={hover}>Gallery</NavLink>
                    </div>
                </div>
                <div className="flex bg-[#6053f0]  items-center px-8 gap-2 max-lg:hidden rounded-full py-4">
                    <button className='px-8 bg-[#8075f3] text-white  text-sm rounded-full py-3 semibold'>Add Listings</button>
                    <span className='bg-[#8075f3] text-white rounded-full px-3 py-2 relative'>
                        <i className="bi bi-cart-fill"></i>
                        <span className="absolute text-xs -top-1 -right-1 bg-white text-black rounded-full px-1">0</span>
                    </span>
                    <span className='bg-[#8075f3] text-white rounded-full px-3 py-2'>
                        <i className="bi bi-search"></i>
                    </span>
                </div>
            </nav>

            {/* Overlay */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40"
                ></div>
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full max-w-sm  p-6 bg-white shadow-lg transform transition-transform duration-300 z-500
      ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
            >
                <div className="flex flex-col h-full relative gap-5">
                    <div className="flex justify-between items-center ">
                        <img src="https://unifato.com/hosue/assets/img/logo/logo3.png" alt="logo" className='h-[38px]' />

                        <i
                            onClick={() => setMenuOpen(false)}
                            className="bi bi-x-lg self-end  cursor-pointer"
                        ></i>
                    </div>

                    <div className="flex flex-col gap-3  ">
                        <NavLink to="/" className={hover}>Home</NavLink>
                        <NavLink to="/about" className={hover}>About Us</NavLink>
                        <NavLink to="/apartment" className={hover}>Apartment</NavLink>
                        <NavLink to="/blogs" className={hover}>Blogs</NavLink>
                        <NavLink to="/gallery" className={hover}>Pages</NavLink>
                        <NavLink to="/testimonials" className={hover}>Testimonials</NavLink>
                        <NavLink to="/contact" className={hover}>Contact</NavLink>


                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl bold">Contact Info</h1>
                            <span className='semibold'> <i className="bi bi-telephone"></i> +3(924)4596512</span>
                            <span className='semibold'> <i className="bi bi-envelope mr-2"></i>info@example.com</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl bold">Our Location</h1>
                            <span className='semibold'>
                                <i className="bi bi-geo-alt-fill"></i>
                                55 East Birchwood Ave.Brooklyn,
                                New York 11201,United States
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl bold">Social Links</h1>
                            <div className="flex items-center gap-2">
                                <span className='bg-[#e6e8e7] rounded-full px-3 py-2'>
                                    <i className="bi bi-facebook"></i>
                                </span>
                                <span className='bg-[#e6e8e7] rounded-full px-3 py-2'>
                                    <i className="bi bi-google"></i>
                                </span>
                                <span className='bg-[#e6e8e7] rounded-full px-3 py-2'>
                                    <i className="bi bi-linkedin"></i>
                                </span>
                                <span className='bg-[#e6e8e7] rounded-full px-3 py-2'>
                                    <i className="bi bi-youtube"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full flex items-center px-6 gap-3 border-t border-gray-400 py-3">
                        <i className="bi bi-person text-lg"></i>
                        <span>Account</span>
                    </div>
                </div>
            </div>
        </>

    )
}



{/* */ }

{/*  */ }