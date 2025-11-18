import React from 'react'
import { Heading } from '../Components/Heading'

export const Feedback = () => {
    return (
        <div className='relative py-25 w-full'>
            <img src="/home/bg-10.png" alt="" className="absolute -z-1 top-0 left-0 w-full h-full object-cover" />
            <div className="flex items-center justify-between gap-15 max-w-7xl mx-auto w-full">
                <div className="flex flex-col gap-3 w-2/5">
                    <Heading
                        span='OUR FEEDBACKS'
                        heading='Our feedbacks What they’re talking about us'
                        width='max-w-[400px]'
                    />
                    <div className="flex items-center gap-2">
                        <span className='bg-[#ed5548] px-3 py-2 text-xl'>
                            <i className="bi bi-star-fill text-white"></i>
                        </span>
                        <span className='bg-[#ed5548] px-3 py-2 text-xl'>
                            <i className="bi bi-star-fill text-white"></i>
                        </span>
                        <span className='bg-[#ed5548] px-3 py-2 text-xl'>
                            <i className="bi bi-star-fill text-white"></i>
                        </span>
                        <span className='bg-[#ed5548] px-3 py-2 text-xl'>
                            <i className="bi bi-star-fill text-white"></i>
                        </span>
                        <span className='bg-[#ed5548] px-3 py-2 text-xl'>
                            <i className="bi bi-star-fill text-white"></i>
                        </span>
                    </div>
                    <span className="text-[#8b8b8b] medium">
                        Trust score 4.5 (Based on 2,500 reviews)
                    </span>
                </div>
                <div className='flex gap-5 w-3/5'>
                    <div className="bg-white  p-6 flex flex-col w-full gap-8 rounded-2xl">
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
                    <div className="bg-white p-6 flex flex-col w-full gap-8 rounded-2xl">
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
            </div>
            <div className="max-w-7xl mx-auto w-full relative h-50 bg-[#ed5548] flex justify-evenly items-center ">
                <img src="/home/bg-cta.png" alt="n" className="absolute z-1 top-0 left-0 w-full h-full object-cover" />
                <div className="flex items-center gap-5 text-white z-100">
                    <i className="bi bi-globe text-2xl"></i>
                    <div className="flex flex-col">
                        <span className='text-lg'>
                            Your story starts from here
                        </span>
                        <span className="bold text-3xl">Let’s visit the best places</span>
                    </div>
                </div>
                <button className='bg-black text-white rounded-full px-3 py-2 text-sm'>
                    Make it Happen
                </button>
            </div>
        </div>
    )
}
