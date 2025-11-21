import React from 'react'
import { PageBanner } from '../Components/PageBanner'

export const EventDetails = () => {
    return (
        <div className='m-5'>
            <PageBanner />
            <div className="max-w-7xl mx-auto w-full py-15 flex flex-col items-center gap-5">
                <div className="flex gap-5 items-center border-b border-[#e2e2e2] pb-5">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <span className='text-black semibold'>
                                    <i className="bi bi-chevron-double-left text-sm"></i>
                                    All Events</span>
                                <h1 className='bold text-black text-3xl'>
                                    Designing Club Culture
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span>
                                <i className="bi bi-clock text-[#ed5548] mr-2"></i>
                                May 9, 2025 - May 9, 2028</span>
                            <span className="text-[#8b8b8b]">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                            </span>
                            <span className="text-[#8b8b8b]">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </span>
                        </div>
                        <select name="" id="">
                            <option value="">
                                <div>
                                    <i className="bi bi-node-plus-fill"></i>
                                    Add to calender
                                </div>
                            </option>
                        </select>
                    </div>
                    <img src="/home/listing-2.jpg" alt="" />
                </div>
                <div className="w-full flex items-center gap-5 border border-[#e2e2e2] p-5">
                    <div className='flex items-center gap-2'>
                        <i className="bi bi-clock text-[#ed5548]"></i>
                        <span className="semibold">May 9 - May 9, 2028</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className="bi bi-list text-red-1000"></i>
                        <span className="text-[#8b8b8b]">Seminars</span>
                    </div>
                </div>
                <div className="flex items-center gap-5 w-full">
                    <div className="flex-1/3 w-full h-[300px] flex flex-col gap-5 bg-[#222] text-white p-15">
                        <h1 className='uppercase medium text-xl'>
                            Organizer
                        </h1>
                        <div className="flex flex-col gap-3">
                            <span>Gary Jones</span>
                            <span className='medium'>
                                <i className="bi bi-telephone-fill text-[#ed5548] mr-2"></i>
                                0123 456 789
                            </span>
                            <span className='medium'>
                                <i className="bi bi-envelope-fill text-[#ed5548] mr-2"></i>
                                contact@example.com
                            </span>
                            <span className='medium'>
                                <i className="bi bi-globe text-[#ed5548] mr-2"></i>
                                View Organizer Website
                            </span>
                        </div>
                    </div>
                    <div className="flex-1/3 w-full h-[300px]">
                        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d24189.261887662415!2d-74.0069622!3d40.7255505!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763637372444!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex-1/3 w-full h-[300px] flex flex-col gap-5 bg-[#ed5548] text-white p-13">
                        <h1 className='uppercase medium text-xl'>
                            venue
                        </h1>
                        <div className="flex flex-col">
                          
                            <span className='medium'>
                                New York
                            </span>
                            <span className='medium'>
                                8 King Street
                            </span>
                            <span className='medium'>
                                Queens, NY United States + Google Map
                            </span>
                            <div className="mt-5">
                                <i className="bi bi-telephone mr-2"></i>
                                0123456789
                            </div>
                            <div className="">
                                <i className="bi bi-globe mr-2"></i>
                                View Venue Website
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
