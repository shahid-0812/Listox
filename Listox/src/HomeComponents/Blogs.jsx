import React, { useRef } from 'react'
import { Heading } from '../Components/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
export const Blogs = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const Businesses = [
        {
            id: "1",
            img: "home/post-01.jpg",
            title: "A place where start new life with adventure travel",

        },
        {
            id: "2",
            img: "home/post-02.jpg",
            title: "Things to see and do when visiting New York",

        },
        {
            id: "3",
            img: "home/post-03.jpg",
            title: "Journeys are best measured with friends",


        },
        {
            id: "4",
            img: "home/post-04.jpg",
            title: "Travel the most beautiful places in the world",


        },
        {
            id: "5",
            img: "home/post-05.jpg",
            title: "Top 5 destinations & adventure travel",


        },
        {
            id: "6",
            img: "home/post-06.jpg",
            title: "The surfing man will adventure your mind",


        },
    ];
    return (
        <div className='flex flex-col gap-5 max-w-7xl mx-auto w-full py-15'>
            <Heading
                span='LATEST BLOG POSTS'
                heading='News that matters recent stories & analysis'

                center='text-center'
                items='center'
              
            />
            <div className="w-full relative group">
                <div className="flex absolute z-10 justify-between top-1/2 -translate-y-1/2 w-full gap-3 mb-4 opacity-0  group-hover:opacity-100 transition duration-300">
                    <button ref={prevRef} className="cursor-pointer px-3 py-2 bg-white rounded-lg border-2 border-white hover:text-white shadow hover:bg-[#6053f0] transition">
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button ref={nextRef} className="cursor-pointer px-3 py-2 bg-white rounded-lg border-2 border-white hover:text-white shadow hover:bg-[#6053f0] transition">
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
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
                            slidesPerView: 2,
                        },
                        1025: {
                            slidesPerView: 2,
                        },
                    }}
                    className="w-full"
                >

                    {
                        Businesses.map((item) => (
                            <SwiperSlide key={item.id} className=''>
                                <div className='border border-[#e2e2e2] rounded-4xl p-5 hover:shadow-lg transition duration-300'>

                                    <div className="flex flex-col overflow-hidden rounded-3xl">
                                        <div className='relative '>
                                            <img src={item.img} alt="" className='w-full rounded-3xl' />
                                            <div className='absolute top-5 right-5 flex flex-col items-center text-white bg-[#6053f0] rounded-2xl px-4 py-3'>
                                                <span className='text-2xl bold'>
                                                    20
                                                </span>
                                                <span className="text-sm semibold">JUL</span>
                                            </div>
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-4 flex items-center gap-5 text-sm text-[#8b8b8b]">
                                                <span>
                                                    <i className="bi bi-person-fill mr-2 text-[#ed5548]"></i>
                                                    Admin
                                                </span>
                                                <span>
                                                    <i className="bi bi-chat-fill mr-2 text-[#ed5548]"></i>
                                                    0 Comments
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center px-10 py-5 pt-10 gap-3 ">
                                            <h1 className='hover:text-[#ed5548] transition duration-300 cursor-pointer semibold text-2xl text-center'>{item.title}</h1>
                                            <span className="medium text-[#8b8b8b] text-center">There are many variations of but the majority have simply free text.</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}
