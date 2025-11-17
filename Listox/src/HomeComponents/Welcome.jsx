import { motion } from 'framer-motion';
import React from 'react'
import { Heading } from '../Components/Heading';

export const Welcome = () => {
    const Checked = [
        "Easy & fast listings",
        "Get instant access to listings",
        "Many different locations",
        "Professional & certified experts",
    ];
    return (
        <div className=" py-15 m-5 rounded-3xl overflow-hidden border border-[#e2e2e2] relative ">
            <img src="/home/bg-01-scaled.jpg" alt="" className='w-full h-full object-cover absolute top-0 left-0 -z-1' />
            <div className="max-w-360 mx-auto w-full flex justify-between items-center gap-10 max-lg:flex-col max-lg:px-5">
                <div className="flex flex-col gap-5 w-full max-lg:max-w-xl">
                    <div className="rounded-full overflow-hidden">
                        <img src="/home/image-01.jpg" alt="" className='w-full h-full' />
                    </div>
                    <div className='rounded-b-full bg-[#6053f0]  flex flex-col gap-5 py-15 items-center justify-center bold text-white'>
                        <span className="text-[80px] leading-15">36k</span>
                        <span>Active listings here</span>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <Heading
                        span='WELCOME TO LISTOX'
                        heading='Get to know about our best listox directory platform'
                    />

                    <span className='text-[#8b8b8b] max-w-[500px]'>
                        The a long established fact that a reader will be distracted the readable content of page when looking at layout the point of using lorem Ipsum less normal distribution of letters.
                    </span>
                    <div className="flex flex-wrap gap-3">

                        {
                            Checked.map((check, index) => (
                                <span key={index} className='text-black semibold w-[45%]'>
                                    <i className="bi bi-check-circle-fill text-[#622520] mr-2"></i>
                                    {check}
                                </span>
                            ))
                        }


                    </div>
                </div>
                <div className="flex w-full relative">
                    <div className="overflow-hidden rounded-t-full max-lg:w-full max-lg:max-h-[480px]">
                        <img src="/home/image-02.jpg" alt="" className='w-full h-full object-cover' />
                    </div>

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                            duration: 1.5
                        }}
                        className='absolute -top-10 right-10 '>
                        <img src="/home/image-03.png" alt="" className='w-full h-full object-cover' />
                    </motion.div>
                </div>
            </div>

        </div>
    )
}
