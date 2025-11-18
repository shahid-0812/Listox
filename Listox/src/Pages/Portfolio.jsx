import React from 'react'
import { PageBanner } from '../Components/PageBanner'
import { Heading } from '../Components/Heading'

export const Portfolio = () => {
    const PorfolioCard = [
        {
            id: 1,
            title: "Modern villa",
        },
        {
            id: 2,
            title: "Minimalist art house",
        },
        {
            id: 3,
            title: "Luxury interior",
        },
        {
            id: 4,
            title: "Luxury house interior",
        },
        {
            id: 5,
            title: "Luxury art house",
        },
        {
            id: 6,
            title: "Family apartment",
        },
    ];
    return (
        <div className='m-5'>
            <PageBanner />
            <div className="relative max-w-7xl mx-auto flex justify-between gap-10 items-center w-full py-15 z-10 group">
                <img src="/home/bg-03.png" alt="" className="absolute top-0 left-0" />
                <img src="/home/bg-04.png" alt="" className="absolute -bottom-50 right-0" />
                <div className="w-1/2">
                    <div className="relative">
                        <img src="/home/image-06.jpg" className="rounded-4xl w-full h-full object-cover" alt="" />
                        <div className="flex items-center justify-center absolute bottom-10 left-10 border-2 border-white rounded-full px-2 py-3">
                            <div className="backdrop-blur-lg flex flex-col items-center gap-2 rounded-full px-5 py-6 group-hover:bg-[#ed5548] transition duration-300">
                                <span className="text-5xl text-white bold ">26</span>
                                <span className="text-sm text-white max-w-28 text-center semibold">YEAR OF EXPERIENCE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-8">
                    <Heading
                        span='GET TO KNOW US'
                        heading='Work Together for a Business Success'
                    />
                    <span className="text-[#8b8b8b]">
                        In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful track record of helping brands scale
                    </span>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#6053f0] rounded-full rounded-tl-none p-1 text-white text-2xl">
                            <i className="bi bi-check "></i>
                        </span>
                        <span className="bold">Discover global business in dubai</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#6053f0] rounded-full rounded-tl-none p-1 text-white text-2xl">
                            <i className="bi bi-check "></i>
                        </span>
                        <span className="bold">Get the authorized Listings</span>
                    </div>
                    <button className="bg-[#ed5548] px-8 py-3 rounded-full text-sm text-white w-fit semibold hover:opacity-80 transition duration-300 cursor-pointer">More About Us</button>
                </div>

            </div>
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-5 items-center justify-center">
                <Heading
                    span='our portfolio'
                    heading='Checkout our recently completed work'
                    center='text-center'
                    items='center'
                />
                <div className="flex justify-center gap-8 items-center medium">
                    <span>All</span>
                    <span>Business</span>
                    <span>Finance</span>
                    <span>Insurance</span>
                    <span>Strategy</span>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col rounded-xl"></div>
                </div>
            </div>
        </div>
    )
}
