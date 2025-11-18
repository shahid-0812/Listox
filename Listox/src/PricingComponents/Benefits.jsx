import React from 'react'
import { Heading } from '../Components/Heading'

export const Benefits = () => {
    return (
        <div className='max-w-7xl w-full mx-auto py-15 flex justify-  items-center gap-50'>
            <div className="relative">
                <img src="/home/image-34.jpg" alt="" className='rounded-xl hover:scale-110 transition duration-1000 hover:rotate-5' />
                <img src="/home/image-35.jpg" alt="" className='rounded-xl absolute top-1/2 -translate-y-1/2 -right-1/3 hover:scale-110 transition duration-1000 hover:rotate-5' />
            </div>
            <div className="flex flex-col gap-5">
                <Heading
                    span='listing benefits'
                    heading='Why you should use Listox platform'
                    width='max-w-[500px]'
                />
                <span className="text-[#8b8b8b] medium max-w-[500px]">
                    There are many variations of passages of available but the majority have suffered. Alteration in some form, lipsum is simply free text by injected humou or randomised words even believable.
                </span>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center gap-5 border-b pb-5 border-[#e2e2e2]">
                        <div className="flex items-center gap-3 ">
                            <i className="bi bi-phone text-[#ed5548] text-3xl"></i>
                            <div className="flex flex-col">
                                <span className="text-[#8b8b8b] uppercase text-sm meidum">benefit 01</span>
                                <h1 className='semibold text-xl'>Easy & Fast Listings</h1>
                            </div>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                    <div className="flex justify-between items-center gap-5 border-b pb-5 border-[#e2e2e2]">
                        <div className="flex items-center gap-3 ">
                            <i className="bi bi-geo-alt text-[#ed5548] text-3xl"></i>
                            <div className="flex flex-col">
                                <span className="text-[#8b8b8b] uppercase text-sm meidum">benefit 02</span>
                                <h1 className='semibold text-xl'>
                                    Many Different Locations
                                </h1>
                            </div>
                        </div>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
