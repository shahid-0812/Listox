import React from 'react'
import { PageBanner } from '../Components/PageBanner'
import { Heading } from '../Components/Heading'
import { Benefits } from '../PricingComponents/Benefits';
import { Link } from 'react-router-dom';

export const Events = () => {
    const EventName = [
        "Festival of Architecture and Interior",
        "International Architecture 2022",
        "Nairobi Design Week",
        "Designing Club Culture",
    ];
    return (
        <div className='m-5'>
            <PageBanner />
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-5 py-15">
                <Heading
                    span='UPCOMING EVENTS'
                    heading='Upcoming Events'
                    center='text-center'
                    items='center'
                />
                <div className="flex gap-8 flex-wrap items-center justify-center">
                    {
                        EventName.map((name, index) => (

                            <Link to='/eventdetails'>
                                <div key={index} className="flex flex-col gap-5 shadow-lg rounded-xl py-7 pl-7 w-[48%] max-lg:w-full ">
                                    <div className="flex w-full justify-between items-center">
                                        <span className='rounded-full bg-[#ED5548] text-white px-4 py-2'
                                        >
                                            <i className="bi bi-clock mr-2"></i>
                                            12:00 AM - 11:59 PM</span>
                                        <div className="ribbon">
                                            09 May
                                        </div>
                                    </div>
                                    <span className='bold text-2xl max-sm:pr-5'>
                                        {name}
                                    </span>
                                    <span className="text-[#8b8b8b] max-w-[80%]">
                                        Dicta sunt explicabo memo enim ipsam ion voluptatem quia voluptas sit odit.
                                    </span>
                                    <div className="flex items-center gap-5">
                                        <div className="flex flex-col pr-5 border-r border-[#e2e2e2]">
                                            <span className="semibold text-[#ed5548]">
                                                Organizer
                                            </span>
                                            <span className="text-[#8b8b8b]">
                                                Gary Jones
                                            </span>
                                        </div>
                                        <div className="flex flex-col pr-5">
                                            <div className=" text-[#ed5548] flex gap-2 items-center">
                                                <i className="bi bi-geo-alt-fill text-[#6053F0]"></i>
                                                <span className='semibold'>Venue</span>
                                                <span className='text-[#8b8b8b]'>+</span>
                                                <span className='text-[#8b8b8b]'>Google Map</span>
                                            </div>
                                            <span className="text-[#8b8b8b]">
                                                8 King Street Queens, NY United States
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Benefits />
        </div>
    )
}
