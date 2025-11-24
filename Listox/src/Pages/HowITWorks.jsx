import React, { useState } from 'react'
import { PageBanner } from '../Components/PageBanner'
import { Heading } from '../Components/Heading';
import { AnimatePresence, motion } from 'framer-motion';

export const HowITWorks = () => {
    const Works = [
        {
            id: 1,
            img: "/home/image-30.jpg",
            sub: "Let’s do it now",
            title: "Create your new account",
        },
        {
            id: 2,
            img: "/home/image-31.jpg",
            sub: "ready for best results",
            title: "Add your first listings",
        },
        {
            id: 3,
            img: "/home/image-32.jpg",
            sub: "just a click away",
            title: "Let’s publish your listings",
        },
        {
            id: 4,
            img: "/home/image-33.jpg",
            sub: "Get the best outcome",
            title: "Enjoy the best exposure",
        },
    ];

    const FAQ = [
        "What is business consulting?",
        "What do business consultants do?",
        "Why do companies hire business consultants?",
        "How much do business consultants charge?",
    ];
    const [showAnswer, setShowAnswer] = useState(null);
    return (
        <div className='m-5'>
            <PageBanner />
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-center items-center gap-20 py-15 max-lg:items-start max-lg:justify-start">
                {
                    Works.map((item) => (
                        <div key={item.id} className="flex  items-end justify-center even:flex-row-reverse relative">

                            <img
                                src="/home/bg-04.png"
                                alt=""
                                className="absolute right-0 even:left-0 even:right-auto max-lg:hidden"
                            />

                            <div className="flex flex-col gap-5 w-1/2 ">
                                <span className='text-[#ed5548] border-b border-[#e2e2e2] semibold uppercase pb-1'>
                                    {item.sub}
                                </span>
                                <div className="flex flex-col gap-5 ">
                                    <h1 className='text-3xl semibold'>{item.title}</h1>
                                    <span className="text-[#8b8b8b]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                    </span>
                                    <span className="text-[#8b8b8b]">If you are going to use a passage of lorem ipsum simply free text you need to be sure.
                                    </span>
                                </div>
                            </div>
                            <div className="w-1/2 flex items-center justify-center relative">
                                <img src={item.img} alt="" className=' h-full object-cover rounded-t-[90%] w-[70%] rounded-b-[50px]' />
                                <div className="absolute top-0 left-1/12 border-2 border-[#6053f0] h-full rounded-t-[90%] w-[70%] rounded-b-[50px] flex items-start justify-start">
                                    <span className='text-6xl bold bg-[#6053f0] rounded-full px-8 py-9 text-white'>0{item.id}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>












            <div className="max-w-400 mx-auto w-full  flex items-center justify-center flex-col relative py-25 gap-10 rounded-3xl">
                <img src="/home/bg-12.png" alt="" className='w-full h-full object-cover -z-1 absolute top-0 left-0 opacity-70' />
                <Heading
                    span='CHECK OUR FAQS'
                    heading='Have any question? check the faqs'
                    center='text-center'
                    items='center'
                />
                <div className="flex justify-center gap-25 items-center w-full relative max-lg:flex-col max-lg:px-5">
                    <img src="/home/bg-19.png" alt="" className='absolute  right-0' />
                    <div className="flex flex-col gap-5 w-1/4 max-lg:w-full">
                        {
                            FAQ.map((que, index) => (
                                <div key={index}
                                    onClick={() => setShowAnswer(showAnswer === index ? null : index)}
                                    className={`flex flex-col bg-white ${showAnswer == index ? "rounded-2xl" : "rounded-4xl"} p-3 cursor-pointer transition-all duration-500`}
                                >

                                    <div className="flex items-center ">
                                        <span className={`px-3 py-2  rounded-full ${showAnswer == index ? "bg-[#ed5548] text-white" : "bg-black text-white"} transition-all duration-500`}>
                                            <i className="bi bi-plus-lg"></i>
                                        </span>
                                        <h1 className={`bold px-5 ${showAnswer == index ? "text-[#ed5548]" : ""} transition-all duration-500`}>
                                            {que}
                                        </h1>
                                    </div>
                                    <AnimatePresence>
                                        {
                                            showAnswer == index && <motion.span
                                                initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                                                animate={{ height: "auto", opacity: 1, paddingTop: 12, paddingBottom: 12 }}
                                                exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                                                transition={{ duration: 0.4, opacity: { delay: 0.3 } }}
                                                className='text-[#8b8b8b] pl-15 py-3 overflow-hidden'>
                                                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the
                                            </motion.span>
                                        }
                                    </AnimatePresence>
                                </div>
                            ))
                        }

                    </div>
                    <div className="w-1/4 relative max-lg:w-full max-lg:hidden">

                        <div className='rounded-tl-[50%] rounded-tr-3xl rounded-bl-3xl overflow-hidden max-lg:w-[50%]'>
                            <img src="/home/image-34.jpg" alt="" className='w-full h-full object-cover object-bottom' />
                        </div>
                        <div className='rounded-br-[70%]  rounded-tl-3xl overflow-hidden absolute bottom-0 -right-50 max-lg:w-[30%] max-lg:right-0'>
                            <img src="/home/image-35.jpg" alt="" className='w-full h-full object-cover object-bottom' />
                        </div>
                        <img src="/home/image-03.png" alt="" className='absolute top-0 -right-70' />
                    </div>
                </div>
            </div>
        </div>
    )
}
