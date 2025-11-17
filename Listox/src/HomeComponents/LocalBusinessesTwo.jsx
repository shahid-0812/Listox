import React from 'react'
import { Heading } from '../Components/Heading'
import { DownloadApp } from './DownloadApp';

export const LocalBusinessesTwo = () => {
    const Stats = [
        {
            id: 1,
            icon: "file-earmark-text",
            number: "250",
            tag: "Successful Listings",
        },
        {
            id: 2,
            icon: "trophy-fill",
            number: "150",
            tag: "Winning Awards",
        },
        {
            id: 3,
            icon: "briefcase",
            number: "25",
            tag: "Years Experience",
        },
        {
            id: 4,
            icon: "people-fill",
            number: "80",
            tag: "Professional Team",
        },
    ];
    return (
        <>
            <div className=" py-15 mx-5 rounded-t-3xl h-full border border-[#e2e2e2] relative ">
                <div className=" absolute -top-60 left-1/2 -translate-x-1/2 w-full max-lg:static max-lg:translate-x-0">
                    <DownloadApp />
                </div>

                <img src="/home/bg-05.jpg" alt="" className='w-full h-full rounded-3xl object-cover absolute top-0 left-0 -z-1 opacity-50' />
                <div className="flex justify-between gap-5 max-w-7xl w-full mx-auto mt-60">
                    <div className="flex flex-col gap-5 w-1/2">
                        <Heading
                            span='local businesses'
                            heading='What our customers feel about our services!'
                            width='max-w-[500px]'
                        />

                        <div className="flex items-center gap-2">
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


                    <div className="flex relative w-1/2">
                        <div className="square">

                        </div>
                        <div className='content-inner'>
                            <img src="/home/image-09.jpg" alt="" />
                        </div>
                    </div>


                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full  flex gap-5 flex-col items-center max-lg:static max-lg:translate-x-0">
                    <div className='flex gap-5 max-w-7xl w-full mx-auto'>
                        <div className="bg-white p-6 flex flex-col w-[32%] gap-8 rounded-2xl">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1 text-[#ed5548]">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <span className='bg-[#6053f0] text-white px-4 py-3 rounded-xl'>
                                    <i className="bi bi-quote"></i>
                                </span>
                            </div>
                            <span className='text-[#8b8b8b]'>
                                Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id sit amet justo hendrerit sagittis.
                            </span>
                            <div className="flex items-center gap-3">
                                <div className='px-1 py-1 rounded-full border border-[#ed5548]'>
                                    <img src="/home/testimonial.jpg" alt="" className='rounded-full w-[58px] h-[63px]' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xl bold">Christine Eve</span>
                                    <span className='text-xs uppercase text-[#6053f0]'></span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 flex flex-col w-[32%] gap-8 rounded-2xl">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1 text-[#ed5548]">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <span className='bg-[#6053f0] text-white px-4 py-3 rounded-xl'>
                                    <i className="bi bi-quote"></i>
                                </span>
                            </div>
                            <span className='text-[#8b8b8b]'>
                                Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id sit amet justo hendrerit sagittis.
                            </span>
                            <div className="flex items-center gap-3">
                                <div className='px-1 py-1 rounded-full border border-[#ed5548]'>
                                    <img src="/home/testimonial.jpg" alt="" className='rounded-full w-[58px] h-[63px]' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xl bold">Christine Eve</span>
                                    <span className='text-xs uppercase text-[#6053f0]'></span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 flex flex-col w-[32%] gap-8 rounded-2xl">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1 text-[#ed5548]">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <span className='bg-[#6053f0] text-white px-4 py-3 rounded-xl'>
                                    <i className="bi bi-quote"></i>
                                </span>
                            </div>
                            <span className='text-[#8b8b8b]'>
                                Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id sit amet justo hendrerit sagittis.
                            </span>
                            <div className="flex items-center gap-3">
                                <div className='px-1 py-1 rounded-full border border-[#ed5548]'>
                                    <img src="/home/testimonial.jpg" alt="" className='rounded-full w-[58px] h-[63px]' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-xl bold">Christine Eve</span>
                                    <span className='text-xs uppercase text-[#6053f0]'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 py-3 rounded-full bg-white text-[#ed5548] flex gap-2 shadow-2xl">
                        <span className='border border-[#ed5548] w-5 h-5 rounded-full  flex items-center justify-center'>
                            <div className='w-1.5 h-1.5 rounded-full bg-[#ed5548]'></div>
                        </span>
                        <span className='w-5 h-5 rounded-full  flex items-center justify-center'>
                            <div className='w-1.5 h-1.5  rounded-full bg-[#8b8b8b]'></div>
                        </span>
                    </div>

                </div>
            </div>
            <div className="py-15 bg-[#ed5548] text-white mx-5 rounded-b-3xl">
                <div className='w-full max-w-7xl mx-auto flex justify-center items-center gap-15 max-lg:flex-wrap'>
                    {
                        Stats.map((item) => (
                            <div key={item.id} className="flex items-center gap-5">
                                <i class={`bi bi-${item.icon} text-6xl`}></i>
                                <div className="flex flex-col gap-2 ">
                                    <span className='text-6xl bold'>{item.number}+</span>
                                    <span className='semibold border-b border-[#FFFFFF4D] pb-4'>{item.tag}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
