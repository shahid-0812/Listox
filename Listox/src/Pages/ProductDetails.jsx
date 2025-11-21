import React, { useRef, useState } from 'react'
import { PageBanner } from '../Components/PageBanner'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";


export const ProductDetails = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [hover, setHover] = useState(false);

    const Product = [
        {
            id: 1,
            name: "Block Ruffle Hem Plaid Print Color",
            price: "800.00",
        },
        {
            id: 2,
            name: "One Shoulder Cutout High Slit Maxi",
            price: "800.00",
        },
        {
            id: 3,
            name: "Solid Color Sleeveless Rushed Body",
            price: "700.00",
        },
        {
            id: 4,
            name: "Spaghetti Strap High Open Back Maxi",
            price: "120.00",
        },
        {
            id: 5,
            name: "Thick Strap Square Neck Top Hem",
            price: "800.00",
        },
        {
            id: 6,
            name: "Tropical Print Front Mini Night Dress",
            price: "800.00",
        },
    ];
    return (
        <div className='m-5'>
            <PageBanner />
            <div className='max-w-7xl w-full mx-auto flex flex-col gap-10 py-15'>
                <div className="flex gap-5 w-full">
                    <div className="w-1/2 h-full flex flex-col gap-3">
                        <InnerImageZoom
                            src="/home/product-4.jpg"
                            zoomSrc="/home/product-4ZOOM.jpg"
                            zoomType="hover"
                        />
                        <img src="" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="w-1/2 flex flex-col gap-5">
                        <h1 className='text-3xl bold'>
                            Block Ruffle Hem Plaid Print Color
                        </h1>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="flex items-center gap-1 text-[#8B8B8B]">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <span className="text-[#8b8b8b]">
                                (0 customer reviews)
                            </span>
                        </div>
                        <h1 className='text-[#ed5548] text-3xl bold border-b border-[#e2e2e2] pb-5'>$800.00</h1>
                        <div className="flex flex-col gap-5 pt-5">
                            <div className="flex items-center gap-3">
                                <div className="border-2 border-[#e2e2e2] text-[#8b8b8b] px-8 py-3">
                                    13
                                </div>
                                <button className="bg-[#ed5548] px-8 py-4 rounded-lg text-sm text-white w-fit semibold hover:opacity-80 transition duration-300 cursor-pointer uppercase">Add to cart</button>
                            </div>

                            <span>Category:
                                <span className='text-[#8b8b8b]'> Medical & Health</span>
                            </span>
                            <span className='border-b border-[#e2e2e2] pb-5'>Tags:
                                <span className='text-[#8b8b8b]'> Classic, Decor, Kitchen</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 text-lg">
                    <h1 className='uppercase bold'>Related products</h1>
                    <div className="w-full relative  group/arrow">
                        <div className="flex absolute z-10 justify-between top-1/2 -translate-y-1/2 w-full gap-3 mb-4 opacity-0  group-hover/arrow:opacity-100 transition duration-300">
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
                                    slidesPerView: 3,
                                },
                                1025: {
                                    slidesPerView: 4,
                                },
                            }}
                            className="w-full"
                        >

                            {
                                Product.map((item) => (
                                    <SwiperSlide key={item.id} >
                                        <div className="flex flex-col gap-3  p-5 shadowCard rounded-2xl group cursor-pointer">
                                            <div className='relative rounded-xl overflow-hidden'>
                                                <img src={`/home/product-${item.id}.jpg`} alt="" />
                                                <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                                <button className='absolute flex items-center gap-2 px-4 py-2 bg-[#ed5548] bottom-4 left-1/2 -translate-x-1/2 text-white text-center opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0'>
                                                    <i className="bi bi-cart-plus"></i>
                                                    <span className='bold whitespace-nowrap text-sm'>Add to cart</span>
                                                </button>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <span className="uppercase bold text-sm text-[#8b8b8b]">
                                                    medical & health
                                                </span>
                                                <h1 className="text-lg bold">
                                                    {item.name}
                                                </h1>
                                                <span className="text-[#ED5548] bold">$800.00</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
