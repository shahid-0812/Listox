import React, { useRef, useState } from 'react'
import { Heading } from '../Components/Heading'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
export const Team = () => {
    const [showSocial, setshowSocial] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
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
    const images = [
        '/home/brand-1.png',
        '/home/brand-2.png',
        '/home/brand-3.png',
        '/home/brand-4.png',
        '/home/brand-5.png',
        '/home/brand-6.png',
        '/home/brand-1.png',
        '/home/brand-2.png',
        '/home/brand-3.png',
        '/home/brand-4.png',
        '/home/brand-5.png',
        '/home/brand-6.png',

    ];
    return (
        <div className="flex flex-col gap-5 py-15 ">
            <Heading
                span='EXPERT PROFESSIONAL'
                heading='Meet the professional our team members'
                center='text-center'
                items='center'
            />
            <div className=" w-full px-20  group flex flex-col gap-5 max-w-360 mx-auto">

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    speed={500}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2
                            ,
                        },
                        1025: {
                            slidesPerView: 4,
                        },
                    }}
                    className="w-full">


                    {
                        Member.map((team) => (
                            <SwiperSlide key={team.id}>
                                <div className="flex items-center flex-col  relative">


                                    <img src={`/home/team-${team.id}.jpg`} alt="" className='rounded-t-[150px] w-[90%] rounded-b-[50px]' />
                                    <div className="flex flex-col gap-2 absolute bottom-22">
                                        {
                                            showSocial &&
                                            <motion.div
                                                initial={{ opacity: 0, y: 25 }}
                                                animate={{ opacity: 1, y: 0 }}
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
                                        <span onMouseUp={() => setshowSocial(!showSocial)} className='rounded-full px-4 py-3 bg-[#ed5548] text-white'>
                                            <i className="bi bi-share"></i>
                                        </span>
                                    </div>
                                    <div className="flex w-full -mt-10 -z-1 flex-col items-center rounded-[50px] border border-[#e2e2e2]  pt-15 pb-8">
                                        <h1 className='text-2xl bold'>{team.name}</h1>
                                        <span className='text-[#8b8b8b]'>Assistant Manager</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="flex  z-10 justify-between gap-3 mb-4   group-hover:opacity-100 transition duration-300">
                    <button ref={prevRef} className="cursor-pointer px-3 py-2 bg-white rounded-lg border-2 border-white hover:text-white shadow hover:bg-[#6053f0] transition">
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button ref={nextRef} className="cursor-pointer px-3 py-2 bg-white rounded-lg border-2 border-white hover:text-white shadow hover:bg-[#6053f0] transition">
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className="border-t border-[#E2E2E2] mt-20 ">
                <div className="flex items-center  max-w-360 mx-auto w-full overflow-hidden">
                    <div className="flex items-center text-xl border-r pr-6 py-15 border-[#E2E2E2] w-3/12">
                        <span className='semibold text-center max-w-[150px]'>
                            Trusted by top companies
                        </span>
                        <i className="bi bi-arrow-up-right text-[#ed5548]"></i>
                    </div>
                    <div className="flex w-full px-5">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 5000 }}
                            loop={true}
                            loopedSlides={images.length}
                            spaceBetween={20}
                            slidesPerView={6}
                            speed={500}
                            onSwiper={(swiper) => swiper.autoplay.start()}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

                            className="w-3/4"
                            breakpoints={{
                                0: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3
                                    ,
                                },
                                1025: {
                                    slidesPerView: 6,
                                },
                            }}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt={`Slide ${index + 1}`} className={`${activeIndex === index ? "opacity-100" : "opacity-30"
                                        } `} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
