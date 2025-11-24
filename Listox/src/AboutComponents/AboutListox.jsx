import React, { useEffect, useState } from 'react'
import { Heading } from '../Components/Heading'
import { motion } from 'framer-motion'

export const AboutListox = () => {
    const images = ["/home/image-02.jpg", "/home/image-02.jpg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex justify-center items-center gap-10 relative max-w-7xl mx-auto w-full py-25 max-lg:flex-col ">
            <img src="/home/bg-03.png" className='top-1/2 -translate-y-1/2 absolute -left-50 -z-1 max-lg:hidden' alt="" />
            <img src="/home/bg-04.png" className='-bottom-1/2 -translate-y-1/2 absolute -right-50 -z-1 max-lg:hidden' alt="" />
            <div className="flex  relative">
                <div className="overflow-hidden h-[480px] w-[400px] rounded-b-full max-lg:w-[600px] max-sm:w-[300px]">
                    <img src="/home/image-02.jpg" alt="" className='w-full h-full object-cover' />
                </div>

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 3
                    }}
                    className='absolute -top-10  -right-10 max-sm:right-0'>
                    <img src="/home/image-03.png" alt="" className='w-full h-full object-cover' />
                </motion.div>
            </div>
            <div className="flex flex-col gap-5">
                <Heading
                    span='ABOUT THE LISTOX'
                    heading='Get to know about our listox platform'
                    width='max-w-[550px]'
                />
                <span className='text-[#8b8b8b] max-w-[600px]'>
                    The a long established fact that a reader will be distracted the readable content of page when looking at layout the point of using lorem Ipsum less normal distribution of letters.
                </span>
                <div className="flex items-center gap-5 border-b border-[#e2e2e2] pb-5 max-sm:flex-col max-sm:px-2">
                    <div className="flex items-center gap-3">
                        <span className='bg-[#6053F0] text-white text-4xl rounded-full px-5.5 py-5 max-sm:p-4 max-sm:text-3xl'>
                            <i className="bi bi-file-earmark"></i>
                        </span>
                        <span className="text-xl bold">Select the best places on phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className='bg-[#6053F0] text-white text-4xl rounded-full px-5.5 py-5 max-sm:p-4 max-sm:text-3xl'>
                            <i className="bi bi-house"></i>
                        </span>
                        <span className="text-xl bold tracking-normal">
                            Best hotel selection on tips
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-15 max-sm:flex-col max-sm:gap-5 max-sm:items-start">
                    <button className="bg-[#ed5548] px-8 py-3 rounded-full text-sm text-white w-fit semibold hover:opacity-80 transition duration-300 cursor-pointer">More About Us</button>
                    <div className="flex items-center gap-5">
                        <img src="/home/image-08.png" alt="" />
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1 text-[#ed5548]">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <span className="text-sm text-[#8b8b8b]">Satisfied Client Ratings​</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
