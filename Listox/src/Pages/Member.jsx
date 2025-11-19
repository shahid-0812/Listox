import React, { useState } from 'react'
import { PageBanner } from '../Components/PageBanner'
import { Heading } from '../Components/Heading'
import { AnimatePresence, motion } from 'framer-motion'

export const Member = () => {
    const [showSocial, setshowSocial] = useState(null);

    const Member = [
        {
            id: "1",
            name: "Ralph edwards",
        },
        {
            id: "2",
            name: "Kevin martin",
        },
        {
            id: "3",
            name: "Rose albert",
        },
        {
            id: "4",
            name: "John smith",
        },
        {
            id: "2",
            name: "Fred Anrew",
        },
        {
            id: "1",
            name: "Sara Rose",
        },
    ];
    return (
        <div className='m-5'>
            <PageBanner />
            <div className="max-w-7xl mx-auto w-full my-15 bg-white shadow-xl flex items-center">
                <div className="w-1/2">
                    <img src="/home/bg-8.jpg" alt="no" className='w-full h-full object-cover' />
                </div>
                <div className="w-1/2 flex flex-col px-20 gap-5">
                    <Heading
                        span='WE WORK FOR'
                        heading='Insuring your future'
                    />
                    <span className="text-[#8b8b8b] max-w-[450px]">
                        There are many variations of pass of lorem sum available but the majority have suffered alteration in some form. Injected humour randomised words which.
                    </span>
                    <div className="flex items-center gap-15">
                        <div className="flex flex-col  pb-3 border-b border-[#e2e2e2]">
                            <h1 className='text-6xl lineText bold'>
                                6805
                            </h1>
                            <span className="text-[#8b8b8b] semibold">
                                Project Completed
                            </span>
                        </div>
                        <div className="flex flex-col  pb-3 border-b border-[#e2e2e2]">
                            <h1 className='text-6xl lineText bold'>
                                9760
                            </h1>
                            <span className="text-[#8b8b8b] semibold">
                                Happy Customers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <Heading
                    span='EXPERT PROFESSIONAL'
                    heading='Meet the professional our team members'
                    center='text-center'
                    items='center'
                />
                <div className="flex flex-wrap gap-8 max-w-7xl mx-auto w-full">




                    {
                        Member.map((team, index) => (
                            <div className="flex items-center flex-col w-[31%] relative">


                                <img src={`/home/team-${team.id}.jpg`} alt="" className='rounded-t-[200px] w-[90%] rounded-b-[50px]' />
                                <div className="flex flex-col gap-2 absolute bottom-22">
                                    <AnimatePresence>
                                        {
                                            showSocial == index &&
                                            <motion.div
                                                initial={{ opacity: 0, y: 25 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 25 }}
                                                transition={{ duration: 0.4 }}
                                                className="flex items-center flex-col gap-2">
                                                <span className='rounded-full px-3 py-2 bg-white'>
                                                    <i className="bi bi-twitter"></i>
                                                </span>
                                                <span className='rounded-full px-3 py-2 bg-white'>
                                                    <i className="bi bi-facebook"></i>
                                                </span>
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                    <span onClick={() => setshowSocial(showSocial === index ? null : index)} className='rounded-full px-4 py-3 bg-[#ed5548] text-white'>
                                        <i className="bi bi-share"></i>
                                    </span>
                                </div>
                                <div className="flex w-full -mt-10 -z-1 flex-col items-center rounded-[50px] border border-[#e2e2e2]  pt-15 pb-8">
                                    <h1 className='text-2xl bold'>{team.name}</h1>
                                    <span className='text-[#8b8b8b]'>Assistant Manager</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
