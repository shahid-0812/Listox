import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactCurvedText from 'react-curved-text';
import { Navbar } from "../Components/Navbar";
import { NavHead } from "../Components/NavHead";
export const HeroSection = () => {
    const images = ["/home/slider-1.jpg", "/home/slider-2.jpg"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);



    return (
        <div className="flex flex-col relative rounded-3xl overflow-hidden m-5">
            <NavHead />



            <div className="relative w-full h-[950px] overflow-hidden flex flex-col items-center justify-center gap-10 rounded-b-3xl max-lg:justify-start max-lg:pt-20">
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
                <div className="flex flex-col items-center gap-8 z-10 uppercase text-white">
                    <span className="text-sm px-5 py-2 rounded-full bold backdrop-blur-sm max-sm:text-sm">
                        find things you’ll love to have</span>
                    <h1 className="text-[140px] leading-25 max-lg:text-[100px] max-sm:text-4xl max-sm:leading-0">rediscover</h1>
                    <span className="text-4xl mt-5 max-lg:text-3xl max-sm:text-[16px]">the soul of your hometown</span>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="bg-[#ED5548] z-10 rounded-full  w-[122px] h-[122px] flex items-center justify-center">

                        <ReactCurvedText
                            width={120}
                            height={120}
                            cx={60}
                            cy={60}
                            rx={48}
                            ry={48}
                            startOffset={0}
                            reversed={false}
                            text="-  EXPLORE  MORE  -  EXPLORE  MORE"
                            textProps={{
                                className: "fill-white text-sm uppercase tracking-[5px]",
                            }}
                        />
                    </motion.div>
                </div>


            </div>
            <div className="flex flex-col gap-10  bg-white px-19 z-10 max-w-7xl mx-auto w-full rounded-3xl py-15 absolute left-1/2 -translate-x-1/2 -bottom-15 max-sm:px-5 max-sm:w-fit max-sm:py-5 max-lg:py-5 max-lg:bottom-0" >
                <div className="w-full flex justify-between">
                    <div className="corner-curve absolute -left-7.5 bottom-13"></div>
                    <div className="corner-curve absolute -right-7.5 bottom-13 scale-x-[-1]"></div>
                </div>
                <div className="flex items-center rounded-full border border-[#e2e2e2] max-lg:overflow-hidden max-lg:gap-3 max-lg:flex-col max-lg:p-5 text-[#8b8b8b] max-lg:rounded-2xl">
                    <input type="text" placeholder="What are you looking for?" className="flex-1 border-none outline-none px-5 max-lg:w-full max-lg:text-center max-lg:py-3" />
                    <div className="flex justify-between items-center flex-1 border-x max-lg:border-x-0 max-lg:border-y border-[#e2e2e2] py-6 px-5 max-lg:w-full max-lg:py-3 max-lg:justify-center">
                        <span>All Categories</span>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                    <div className="flex justify-between items-center flex-1 px-5">
                        <span>All Categories</span>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                    <button className="text-white max-lg:w-full bg-[#ED5548] px-10 py-4 rounded-full m-2 flex items-center gap-3 cursor-pointer max-sm:justify-center hover:opacity-80 transition duration-300">
                        <i className="bi bi-search"></i>
                        <span>Search</span>
                    </button>
                </div>
                <div className="flex items-center gap-3 text-xs uppercase bold mx-5 max-sm:flex-col">
                    <span>or browse the highlights</span>
                    <div className="flex items-center gap-1">
                        <span className="bg-[#6053F0] text-white rounded-full px-4 py-1.5">Traveling</span>
                        <span className="bg-[#f2f2f2] text-[#8b8b8b] rounded-full px-4 py-1.5">Shopping</span>
                        <span className="bg-[#f2f2f2] text-[#8b8b8b] rounded-full px-4 py-1.5">places</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
