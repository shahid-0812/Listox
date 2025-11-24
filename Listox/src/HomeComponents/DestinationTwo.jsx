import React from 'react'
import { Heading } from '../Components/Heading'

export const DestinationTwo = () => {
    const Places = [
        "Tokyo, Japan",
        "Rome, Italy",
        "Sydney, Austrailia",
        "Marina, Dubai",
    ];

    return (
        <div className='max-w-7xl w-full mx-auto py-15 flex -translate-y-40 max-lg:translate-y-0 max-lg:px-5 max-sm:flex-col max-sm:gap-5'>
            <div className="w-1/2 flex flex-col justify-between  gap-5 px-18 pt-18 bg-white max-sm:w-full max-lg:px-0 ">
                <Heading
                    span='New Destination'
                    heading='Explore the best places to visit'
                    width='max-w-[500px]'
                />
                <span className="text-[#8b8b8b] max-w-[500px]">It is a long established fact that a distracted by the readable content of a page.</span>
                <div className="flex flex-col gap-2">

                    {
                        Places.map((place, index) => (
                            <div key={index} className="flex justify-between items-center bg-[#f0f0f0] pr-5 rounded-lg overflow-hidden hover:bg-[#6053f01c] transition duration-300 cursor-pointer">
                                <div className="flex items-center gap-5 ">
                                    <img src={`/home/gallery-${index + 1}.jpg`} alt="" className='rounded-lg object-cover w-[100px] h-[78px]' />
                                    <h1 className='text-xl bold max-sm:text-[16px]'>{place}</h1>
                                </div>
                                <span className='rounded-full px-3 py-2 bg-white text-black text-lg'>
                                    <i className="bi bi-arrow-right"></i>
                                </span>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="w-1/2 relative max-sm:w-full">
                <img src="/home/gallery-1.jpg" alt="" className="w-full h-full object-cover max-sm:h-[400px]" />
                <div className="absolute bottom-0 left-0 rounded-r-full backdrop-blur-lg flex flex-col gap-3 px-10 text-white py-15 max-sm:p-5">
                    <h1 className='text-2xl bold'>Tokyo, Japan</h1>
                    <span className='max-w-[400px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </span>
                    <button className='bg-[#ed5548] text-white px-8 py-3 rounded-full w-fit text-sm cursor-pointer hover:opacity-80 transition duration-300'>Read More</button>
                </div>
            </div>
        </div>
    )
}
