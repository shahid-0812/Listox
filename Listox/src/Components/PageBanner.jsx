import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { NavHead } from './NavHead';

export const PageBanner = () => {
    const images = ["/home/breadcrumb.jpg", "/home/breadcrumb-01.jpg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <div className="flex flex-col rounded-4xl">
            <NavHead />
            <div className="relative w-full h-[450px] overflow-hidden flex flex-col items-center justify-center gap-10 rounded-b-3xl">
                <div className="absolute top-0 left-0 bg-black/40 w-full h-full z-10"></div>
                {images.map((img, index) => (
                    <motion.img
                        key={img}
                        src={img}
                        alt="slideshow"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: current === index ? 1 : 0,
                            scale: current === index ? 1 : 1.1,
                        }}
                        transition={{
                            opacity: { duration: 1 },
                            scale: { duration: 5, ease: "easeOut" },
                        }}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                ))}
                <div className="flex flex-col items-center z-10 uppercase text-white">
                    <h1 className="text-5xl bold leading-10">Explore The Worlds</h1>
                    <span className="text-xl mt-5">People Don’t Take, Trips Take People</span>

                </div>
            </div>
        </div>
    )
}
