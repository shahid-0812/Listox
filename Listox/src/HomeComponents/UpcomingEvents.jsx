import React from 'react'
import { Heading } from '../Components/Heading'

export const UpcomingEvents = () => {
    return (
        <div className='max-w-7xl mx-auto w-full flex flex-col items-center gap-8 py-25 max-lg:px-5'>
            <Heading
                span='UPCOMING EVENTS'
                heading='Join our upcoming latest events in 2025'
                center='text-center'
                items='center'
            />
            <div className="flex items-center gap-5 max-lg:flex-col">
                <div className='flex rounded-3xl overflow-hidden relative h-[365px] w-[20%] max-lg:w-full'>
                    <img src="/home/listing-6.jpg" alt="no" className=' top-0 left-0 w-full h-full object-cover' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                    <div className="flex w-full whitespace-nowrap gap-5 items-center justify-between absolute rotate-90 top-1/2 -translate-y-1/2 max-lg:rotate-0 max-lg:justify-center">
                        <span className='text-2xl bold text-white'>Nairobi Design Week</span>
                        <span className='bg-[#ed5548] text-xl rounded-full px-1 text-white w-fit h-fit'>
                            <i className="bi bi-plus"></i>
                        </span>
                    </div>
                </div>
                <div className='flex gap-8 rounded-3xl overflow-hidden h-[365px] w-[60%] border border-[#e2e2e2] p-5 max-lg:w-full'>
                    <div className="relative w-4/10 max-sm:hidden">
                        <img src="/home/listing-2.jpg" alt="no" className=' h-full object-cover rounded-2xl ' />
                        <span className="absolute w-[90%] flex items-center gap-2 justify-center left-1/2 -translate-x-1/2 bottom-5 bg-white rounded-full px-3 py-2">
                            <i className="bi bi-clock text-[#6053f0]"></i>
                            <span className='text-sm text-[#8b8b8b]'>09 May - 12:00 AM</span>
                        </span>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 border-b border-[#e2e2e2] pb-8">
                            <h1 className='text-2xl semibold'>Designing Club Culture</h1>
                            <span className="text-[#8b8b8b]">Dicta sunt explicabo memo enim ipsam ion voluptatem quia voluptas sit odit.</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className='text-lg bold text-[#ed5548]'>Venue</h1>
                            <span className="text-[#8b8b8b]">8 King Street Queens, NY United States<br />
                                <span className='text-black'>+Google Map</span></span>
                        </div>
                        <button className="text-[#6053f0] text-sm w-fit bold group flex items-center">
                            <span>Event Details</span>
                            <i className="bi bi-arrow-right ml-1 transform transition-transform duration-300 group-hover:translate-x-1"></i>
                        </button>
                    </div>
                </div>
                <div className='flex rounded-3xl overflow-hidden relative h-[365px] w-[20%] max-lg:w-full '>
                    <img src="/home/listing-13.jpg" alt="no" className='w-full h-full object-cover' />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
                    <div className="flex w-full  gap-5 items-center justify-between absolute rotate-90 top-1/2 -translate-y-1/2 max-lg:rotate-0 max-lg:justify-center ">
                        <span className='text-2xl bold text-white'>Festival of Architecture and Interior</span>
                        <span className='bg-[#ed5548] text-xl rounded-full px-1 text-white w-fit h-fit'>
                            <i className="bi bi-plus"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
