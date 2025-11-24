import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Heading } from '../Components/Heading';

export const AboutLocal = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const Businesses = [
        {
            id: "1",
            img: "home/listing-1.jpg",
            tagicon: "person-standing-dress",
            tag: "beauty",
            title: "Silver Rose Store",
            subtitle: "Outdoor, luxury for you",
            icon: "/home/logo-listing-1.jpg",
            city: "Bangkok",
            price: "$80"
        },
        {
            id: "2",
            img: "home/listing-2.jpg",
            tagicon: "person-standing-dress",
            tag: "beauty",
            title: "Riki Hotel in Broklyn",
            subtitle: "Outdoor, luxury for you",
            icon: "/home/logo-listing-2.jpg",
            city: "Japan",
            price: "$150"
        },
        {
            id: "3",
            img: "home/listing-3.jpg",
            tagicon: "fork-knife",
            tag: "Restaurants",
            title: "Foodie Restaurant",
            subtitle: "One of the best Restaurant",
            icon: "/home/logo-listing-3.jpg",
            city: "Dubai",
            price: "$200"
        },
        {
            id: "4",
            img: "home/listing-4.jpg",
            tagicon: "bicycle",
            tag: "Fitness",
            title: "Shape gym training",
            subtitle: "Best Traveling in The UK",
            icon: "/home/logo-listing-4.jpg",
            city: "Bangkok",
            price: "$100"
        },
        {
            id: "5",
            img: "home/listing-5.jpg",
            tagicon: "bicycle",
            tag: "Fitness",
            title: "Get into Fitness",
            subtitle: "We Care for you",
            icon: "/home/logo-listing-5.jpg",
            city: "Rome",
            price: "$100"
        },
        {
            id: "6",
            img: "home/listing-6.jpg",
            tagicon: "person-standing-dress",
            tag: "beauty",
            title: "Beauty hairsalon",
            subtitle: "Modern Hair Style Salon",
            icon: "/home/logo-listing-1.jpg",
            city: "New York",
            price: "$80"
        },
    ];
    const images = [
        '/home/brand-white-1.png',
        '/home/brand-white-2.png',
        '/home/brand-white-3.png',
        '/home/brand-white-4.png',
        '/home/brand-white-5.png',
        '/home/brand-white-6.png',
        '/home/brand-white-1.png',
        '/home/brand-white-2.png',
        '/home/brand-white-3.png',
        '/home/brand-white-4.png',
        '/home/brand-white-5.png',
        '/home/brand-white-6.png',

    ];
    return (
        <div className=" py-15 rounded-3xl overflow-hidden border border-[#e2e2e2] relative max-lg:px-5">
            <img src="/home/bg-02.jpg" alt="" className='w-full h-full object-cover absolute top-0 left-0 -z-1' />
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-center gap-10">
                <div className="flex justify-between items-center max-sm:flex-col">
                    <Heading
                        span='local businesses'
                        heading='Let’s discover our hottest featured listings'
                        textColor='text-[#fff]'
                        bgColor='bg-[#4e4e4e]'

                        headingColor='text-white'
                    />
                    <div className="flex items-center gap-5">
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
                <div className="w-full relative group">

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
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
                                slidesPerView: 3,
                            },
                        }}
                        className="w-full"
                    >

                        {
                            Businesses.map((item) => (
                                <SwiperSlide key={item.id} >
                                    <div className="bg-white p-6 flex flex-col  gap-8 rounded-2xl">
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
                                                <img src="/home/testimonial.jpg" alt="" className='rounded-full w-[58px] h-[63px]' />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-xl bold">Christine Eve</span>
                                                <span className='text-xs uppercase text-[#6053f0]'></span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="flex items-center gap-10">

                    <div className="flex  gap-3  transition duration-300">
                        <button ref={prevRef} className="cursor-pointer px-3 py-2 bg-white rounded-lg border-2 border-white hover:text-white shadow hover:bg-[#6053f0] transition">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button ref={nextRef} className="cursor-pointer px-3 py-2 bg-white rounded-lg border-2 border-white hover:text-white shadow hover:bg-[#6053f0] transition">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                    <div className="w-full h-px bg-white opacity-20"></div>
                    <div className="px-8 py-3 rounded-full bg-[#2d2d2d] text-white flex gap-2 shadow-2xl">
                        <span className='border border-[#ed5548] w-5 h-5 rounded-full  flex items-center justify-center'>
                            <div className='w-1.5 h-1.5 rounded-full bg-[#ed5548]'></div>
                        </span>
                        <span className='w-5 h-5 rounded-full  flex items-center justify-center'>
                            <div className='w-1.5 h-1.5  rounded-full bg-[#8b8b8b]'></div>
                        </span>
                    </div>
                </div>


            </div>

        </div>
    )
}
