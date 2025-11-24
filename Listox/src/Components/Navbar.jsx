import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [pageOpen, setPageOpen] = useState(false);
    const [pageMobileOpen, setPageMobileOpen] = useState(false);

    const hover = 'hover:text-[#ed5548] transition semibold';
    const hover2 = 'px-6 py-3 border-b border-gray-300 hover:text-[#ed5548] transition semibold text-[#8b8b8b]'

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
                        : 'left-1/2 transform -translate-x-1/2 w-[90%] top-15  rounded-full bg-gray-100 bg-opacity-90 my-10 max-lg:top-12 max-sm:w-[80%]'
                    }
                    ${menuOpen ? "hidden" : "flex"}
                    `}
            >
                <div className="flex justify-between items-center gap-5 px-8 max-lg:w-full  max-lg:p-0 max-lg:pl-6">

                    <img src="/logo.png" alt="logo" className='h-8 max-lg:h-6' />
                    <div className="flex items-center gap-3">

                        <i className="bi bi-list text-4xl text-[#ed5548] lg:hidden max-sm:flex" onClick={() => setMenuOpen(!menuOpen)}></i>
                        <div className="flex bg-[#6053f0]  items-center px-8 gap-2  rounded-full py-6 lg:hidden max-sm:flex max-sm:px-4 max-sm:py-3">
                            <button className='px-8 bg-[#8075f3] text-white  text-sm rounded-full py-3 semibold max-sm:hidden'>Add Listings</button>
                            <span className='bg-[#8075f3] text-white rounded-full px-3 py-2 relative'>
                                <i className="bi bi-cart-fill"></i>
                                <span className="absolute text-xs -top-1 -right-1 bg-white text-black rounded-full px-1">0</span>
                            </span>
                            <span className='bg-[#8075f3] text-white rounded-full px-3 py-2'>
                                <i className="bi bi-search"></i>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 px-10 max-lg:hidden uppercase text-sm">
                        <NavLink to="/" className={hover}>Home</NavLink>
                        <NavLink to="/listing" className={hover}>listings</NavLink>
                        <NavLink to="/pricing" className={hover}>pricing</NavLink>
                        <div onMouseEnter={() => setPageOpen(true)} onMouseLeave={() => setPageOpen(false)} className="relative cursor-pointer  py-8">
                            <span className={hover}>Pages

                                <i
                                    className={`bi bi-chevron-down ml-2 inline-block transform transition-transform duration-300 ${pageOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                ></i>
                            </span>
                            <AnimatePresence>
                                {pageOpen && <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.2, 0, 0.2, 1]  // fast start, slow end
                                    }}
                                    className="absolute left-1/2 -translate-x-1/2 bg-white shadow-lg capitalize rounded-lg w-50 mt-8  flex flex-col py-3 overflow-hidden"
                                >
                                    <NavLink to="/about" className={hover2}>
                                        About
                                    </NavLink>

                                    <NavLink to="/portfolio" className={hover2}>
                                        Portfolio
                                    </NavLink>

                                    <NavLink to="/shop" className={hover2}>
                                        Shop
                                    </NavLink>

                                    <NavLink to="/gallery" className={hover2}>
                                        Gallery
                                    </NavLink>

                                    <NavLink to="/howitworks" className={hover2}>
                                        How It Works
                                    </NavLink>

                                    <NavLink to="/events" className={hover2}>
                                        Events
                                    </NavLink>

                                    <NavLink to="/testimonials" className={hover2}>
                                        Testimonials
                                    </NavLink>

                                    <NavLink to="/member" className="px-6 py-2 hover:text-[#ed5548] transition semibold text-[#8b8b8b]">
                                        Our Member
                                    </NavLink>

                                </motion.div>}
                            </AnimatePresence>
                        </div>
                        <NavLink to="/news" className={hover}>news</NavLink>
                        <NavLink to="/contact" className={hover}>Contact</NavLink>

                    </div>
                </div>
                <div className="flex bg-[#6053f0]  items-center px-8 gap-2 max-lg:hidden rounded-full py-6">
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
                    className="fixed inset-0 bg-[#6053F0] z-40"
                ></div>
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full max-w-xl  bg-white shadow-lg transform transition-transform duration-300 z-500
      ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
            >
                <div className="flex flex-col h-full relative gap-5 p-6">
                    <div className="flex justify-between items-center ">
                        <img src="/logo.png" alt="logo" className='h-8' />

                        <i
                            onClick={() => setMenuOpen(false)}
                            className="bi bi-x-lg self-end text-3xl cursor-pointer text-[#ed5548]"
                        ></i>
                    </div>

                    <div className="flex flex-col  uppercase text-sm  semibold ">
                        <NavLink to="/" className="border-b border-[#e2e2e2] py-4 ">Home</NavLink>
                        <NavLink to="/listing" className="border-b border-[#e2e2e2] py-4 ">listings</NavLink>
                        <NavLink to="/pricing" className="border-b border-[#e2e2e2] py-4 ">pricing</NavLink>
                        <div onClick={() => setPageMobileOpen(!pageMobileOpen)} className="flex flex-col border-b border-[#e2e2e2] py-4 ">
                            <div className="flex justify-between items-center">
                                <span>Pages</span>
                                <i className={`bi bi-chevron-right ${pageMobileOpen ? "rotate-90" : ""} transition duration-300`}></i>
                            </div>
                            <AnimatePresence>
                                {pageMobileOpen && <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.5,

                                    }}
                                    className="flex flex-col gap-4 pt-5 px-5 text-[#8b8b8b]"
                                >
                                    <NavLink to="/about">
                                        About
                                    </NavLink>

                                    <NavLink to="/portfolio">
                                        Portfolio
                                    </NavLink>

                                    <NavLink to="/shop">
                                        Shop
                                    </NavLink>

                                    <NavLink to="/gallery">
                                        Gallery
                                    </NavLink>

                                    <NavLink to="/howitworks">
                                        How It Works
                                    </NavLink>

                                    <NavLink to="/events">
                                        Events
                                    </NavLink>

                                    <NavLink to="/testimonials">
                                        Testimonials
                                    </NavLink>

                                    <NavLink to="/member">
                                        Our Member
                                    </NavLink>
                                </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                        <NavLink to="/news" className="border-b border-[#e2e2e2] py-4 ">news</NavLink>
                        <NavLink to="/contact" className="border-b border-[#e2e2e2] py-4 ">Contact</NavLink>


                    </div>
                    <div className="flex flex-col gap-3">

                    </div>

                    <div className="absolute bottom-0 left-0 w-full flex items-center  gap-5 text-white p-4 bg-black">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter-x"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-youtube"></i>
                    </div>
                </div>
            </div>
        </>

    )
}



{/* */ }

{/*  */ }