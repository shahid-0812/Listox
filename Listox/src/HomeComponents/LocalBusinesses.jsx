import React, { useRef, useState } from 'react'
import { Heading } from '../Components/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
export const LocalBusinesses = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
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
        <div className=" py-15 m-5 rounded-3xl overflow-hidden border border-[#e2e2e2] relative max-lg:px-5">
            <img src="/home/bg-02.jpg" alt="" className='w-full h-full object-cover absolute top-0 left-0 -z-1' />
            <div className="max-w-360 mx-auto w-full flex flex-col justify-center items-center gap-10">
                <Heading
                    span='local businesses'
                    heading='Let’s discover our hottest featured listings'
                    textColor='text-[#fff]'
                    bgColor='bg-[#4e4e4e]'
                    center='text-center'
                    items='center'
                    headingColor='text-white'
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
                                <SwiperSlide key={item.id} cla>
                                    <div className="flex flex-col overflow-hidden rounded-3xl">
                                        <div className='relative'>
                                            <img src={item.img} alt="" className='object-cover h-[250px] w-full' />
                                            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-between px-5 pt-5">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <span className=' text-[10px] px-3 py-1 rounded-full text-white semibold uppercase bg-[#26a84d]'>Open</span>
                                                        <span className=' text-[10px] px-3 py-1 rounded-full text-white semibold uppercase bg-[#6053f0]'>Featured</span>
                                                    </div>
                                                    <span className="border border-white p-2 py-1 text-white rounded-full">
                                                        <i className="bi bi-suit-heart"></i>
                                                    </span>
                                                </div>
                                                <div className="flex">
                                                    <span className='bg-[#6053f0] px-3 py-1 rounded-tl-lg text-white hover:text-[#ed5548] transition duration-300 cursor-pointer border-r border-[#ffffffa6]'>
                                                        <i className="bi bi-camera-fill"></i>
                                                    </span>
                                                    <span className='bg-[#6053f0] px-3 py-1 rounded-tr-lg text-white hover:text-[#ed5548] transition duration-300 cursor-pointer'>
                                                        <i className="bi bi-camera-reels-fill"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col p-6 gap-3 bg-[#f2f2f2] text-black">
                                            <div className="flex items-center gap-1">
                                                <span className='bg-white rounded-full p-0.5 flex items-center gap-1'>
                                                    <i className={`bi bi-${item.tagicon} text-[#ED5548]`}></i>
                                                    <span className='text-[10px] semibold uppercase'>{item.tag}</span>
                                                    <span className='rounded-full bg-[#6053f0] px-1 py-0.5 text-[10px] text-white'>+1</span>
                                                </span>
                                                <div className="flex items-center gap- text-[#febb02] text-xs">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </div>
                                                <span className="text-xs text-[#8b8b8b]">(2 Reviews)</span>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <h1 className='text-xl bold'>{item.title}</h1>
                                                <span className="text-[#8b8b8b] text-sm">{item.subtitle}</span>
                                                <span className='text-[#8b8b8b] text-sm semibold'>
                                                    <i className="bi bi-geo-alt-fill text-[#ED5548] mr-1"></i>
                                                    {item.city}
                                                </span>
                                                <span className='text-[#8b8b8b] text-sm semibold'>
                                                    <i className="bi bi-telephone-fill text-[#ED5548] mr-1"></i>
                                                    +84-666-888-99
                                                </span>
                                                <div className="flex justify-between items-center bg-white  rounded-full">
                                                    <span className='text-[#8b8b8b] text-xs px-4'>From
                                                        <span className='text-sm text-[#ED5548] bold'> {item.price}</span>
                                                    </span>
                                                    <button className='bg-black text-white semibold text-sm px-4 py-3 rounded-full hover:bg-[#ed5548] cursor-pointer transition duration-300'>
                                                        Details <i className="bi bi-arrow-right ml-1 rounded-full"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>


            </div>
            <div className="border-t border-[#E2E2E233] mt-20 ">
                <div className="flex items-center  max-w-360 mx-auto w-full max-sm:flex-col">
                    <div className="flex items-center text-xl border-r pr-6 py-15 border-[#E2E2E233] w-3/12 max-sm:w-full max-sm:border-0 max-sm:justify-center">
                        <span className='text-white semibold text-center max-w-[150px]'>
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
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1025: {
                                    slidesPerView: 5,
                                },
                            }}
                            className="w-3/4"
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


        </div>
    )
}

