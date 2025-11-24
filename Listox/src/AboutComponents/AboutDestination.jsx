import React from 'react'
import { Heading } from '../Components/Heading'

export const AboutDestination = () => {
    return (
        <div className='max-w-7xl w-full mx-auto border border-[#e2e2e2] rounded-3xl mt-10 flex overflow-hidden items-stretch gap-5  max-sm:flex-col'>
            <div className='w-1/2 h-full max-sm:w-full'>
                <img src="/home/image-15.jpg" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-col gap-5 w-1/2 px-15 max-lg:px-5 max-lg:py-10 self-center max-sm:w-full">
                <Heading
                    span='NEW DESTINATION'
                    heading='Benefits of listox'
                    width='max-w-[550px]'
                />
                <span className='text-[#8b8b8b] max-w-[600px]'>
                    It is a long established fact that a distracted by the readable content of a page.
                </span>
                <div className="flex flex-col ">
                    <div className="flex gap-3 border-b border-[#e2e2e2] pb-8">
                        <span className='bg-[#ed5548] h-fit text-white text-3xl rounded-full px-5.5 py-5'>
                            <i className="bi bi-hand-index"></i>
                        </span>
                        <div className="flex flex-col gap-2">
                            <h1 className='text-xl semibold'>Easy quick to start</h1>
                            <span className="text-sm medium text-[#adadad]">Lorem ipsum dolor sit amet, consectetur adipisicing readable content of a page.</span>
                        </div>
                    </div>
                    <div className="flex gap-3  pt-8">
                        <span className='bg-[#ed5548] h-fit text-white text-3xl rounded-full px-5.5 py-5'>
                            <i className="bi bi-emoji-laughing"></i>
                        </span>
                        <div className="flex flex-col gap-2">
                            <h1 className='text-xl semibold'>Best response ever</h1>
                            <span className="text-sm medium text-[#adadad]">Lorem ipsum dolor sit amet, consectetur adipisicing readable content of a page.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
