import React, { useState } from 'react'
import { PageBanner } from '../Components/PageBanner'
import { Heading } from '../Components/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { SignUp } from '../Components/SignUp';


export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const Review = [
        {
            id: 1,
            img: "/home/testimonial.jpg",
            name: "Christine Eve",
        },
        {
            id: 2,
            img: "/home/testimonial-1.jpg",
            name: "Kevin Smith",
        },
        {
            id: 3,
            img: "/home/testimonial-2.jpg",
            name: "Jessica Brown",
        },
        {
            id: 4,
            img: "/home/testimonial-3.jpg",
            name: "David Anderson",
        },
        {
            id: 5,
            img: "/home/testimonial-3.jpg",
            name: "Susan Neill",
        },
    ];
    return (
        <div className='m-5'>
            <PageBanner />
            <div className="flex flex-col gap-5">
                <div className=" py-25 my-5 rounded-t-3xl h-full border border-[#e2e2e2] relative max-lg:px-5 max-lg:py-15">

                    <img src="/home/bg-05.jpg" alt="" className='w-full h-full rounded-3xl object-cover absolute top-0 left-0 -z-1 opacity-50' />
                    <div className="flex justify-between gap-5 max-w-7xl w-full mx-auto ">
                        <div className="flex flex-col gap-5 w-1/2">
                            <Heading
                                span='local businesses'
                                heading='What our customers feel about our services!'
                                width='max-w-[500px]'
                            />

                            <div className="flex items-center gap-2">
                                <img src="/home/image-08.png" alt="" />
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1 text-[#ed5548]">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <span className="text-sm text-[#8b8b8b]">Satisfied Client Ratings​</span>
                                </div>
                            </div>

                        </div>


                        <div className="flex relative w-1/2">
                            <div className="square">

                            </div>
                            <div className='content-inner'>
                                <img src="/home/image-09.jpg" alt="" />
                            </div>
                        </div>


                    </div>
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full  flex gap-5 flex-col items-center max-lg:static max-lg:translate-x-0">
                        <div className='flex max-w-7xl w-full mx-auto relative'>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                speed={500}
                                loop={true}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1025: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {
                                    Review.map((item) => (
                                        <SwiperSlide key={item} >


                                            <div className="bg-white p-6 flex flex-col  gap-8 rounded-2xl  justify-center ">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-1 text-[#ed5548]">
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                    </div>
                                                    <span className='bg-[#6053f0] text-white px-4 py-3 rounded-xl'>
                                                        <i className="bi bi-quote"></i>
                                                    </span>
                                                </div>
                                                <span className='text-[#8b8b8b]'>
                                                    Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id sit amet justo hendrerit sagittis.
                                                </span>
                                                <div className="flex items-center gap-3">
                                                    <div className='px-1 py-1 rounded-full border border-[#ed5548]'>
                                                        <img src={item.img} alt="" className='rounded-full w-[58px] h-[63px]' />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-xl bold">{item.name}</span>
                                                        <span className='text-xs uppercase text-[#6053f0]'></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                        </div>
                        <div className="flex gap-2 px-8 py-3 rounded-full bg-white shadow-2xl">
                            {Review.map((_, i) => (
                                <span
                                    key={i}
                                    className={`w-5 h-5 rounded-full flex items-center justify-center border 
                                ${activeIndex === i ? "border-[#ed5548]" : "border-transparent"}`}
                                >
                                    <div
                                        className={`w-1.5 h-1.5 rounded-full 
                                    ${activeIndex === i ? "bg-[#ed5548]" : "bg-[#8b8b8b]"}`}
                                    ></div>
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 max-w-7xl w-full mx-auto py-15">
                    <div className="w-3/4 flex flex-col gap-5 max-lg:w-1/2">
                        <Heading
                            span='LOCAL BUSINESSES'
                            heading='What our customers feel about our services!'
                        />
                        <div className="w-full border-t border-[#e2e2e2] py-5">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-1 text-[#ed5548] text-xl">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <span className="text-[#8b8b8b] text-xl">
                                    Contrary to popular belief, lorem Ipsum is not simply random text. It has roots in a piece of classical latin literature from 45 BC, making it over 2000 years old. Richard McClintock and its stubalist charity lorem ipsum!
                                </span>
                                <div className="flex items-center gap-2 relative ">

                                    <div className="w-20 h-20 mask-test2">
                                        <img
                                            src="/home/testimonial.jpg"
                                            alt=""
                                            className="w-20 h-20 object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="bold text-lg">Jessica Brown</span>
                                        <span className="text-[#ED5548] text-sm uppercase">Co Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/12 flex flex-col max-lg:w-1/2 items-center">
                        <div className='rounded-t-[150px] rounded-b-[20px] overflow-hidden w-[80%]'>
                            <img src="/home/image-12.jpg" alt=" h-full object-cover" />
                        </div>
                        <div className="flex flex-col items-center py-12 gap-3 rounded-t-[150px] rounded-b-[20px] bg-[#ed5548] text-white w-full ">
                            <div className="flex items-center gap-1 text-xl">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <span className="semibold">Satisfied Client Ratings
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <SignUp />
        </div>
    )
}
