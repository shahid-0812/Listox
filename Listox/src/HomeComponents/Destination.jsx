import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Heading } from "../Components/Heading";
import { motion } from "framer-motion";

export const Destination = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const Places = [
        { id: 1, img: "/home/banner-01.jpg", title: "Bangkok" },
        { id: 2, img: "/home/banner-02.jpg", title: "Japan" },
        { id: 3, img: "/home/banner-03.jpg", title: "Dubai" },
        { id: 4, img: "/home/banner-04.jpg", title: "Rome" },
        { id: 5, img: "/home/banner-05.jpg", title: "New York" },
    ];

    return (
        <div className="flex flex-col gap-10 max-w-7xl mx-auto w-full py-15 mb-60 max-lg:mb-0 max-lg:px-5">
            <Heading
                span="NEW DESTINATION"
                heading="Explore the world's favorite places to visit"
                items="center"
                center="text-center"
                width="max-w-[550px]"
            />

            <div className="w-full relative group/btn">
                {/* Buttons only visible when hovering on outer container */}
                <div className="flex absolute z-10 justify-between top-1/2 -translate-y-1/2 w-full gap-3 mb-4 opacity-0 group-hover/btn:opacity-100 transition duration-300">
                    <button
                        ref={prevRef}
                        className="cursor-pointer px-3 py-2 bg-white rounded-lg border-2 border-white hover:text-white shadow hover:bg-[#6053f0] transition"
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button
                        ref={nextRef}
                        className="cursor-pointer px-3 py-2 bg-white rounded-lg border-2 border-white hover:text-white shadow hover:bg-[#6053f0] transition"
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>

                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={4}
                    speed={500}
                    onSwiper={(swiper) => swiper.autoplay.start()}
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
                >
                    {Places.map((place) => (
                        <SwiperSlide key={place.id}>
                            {/* Inner group for hover scale & border */}
                            <div className="relative rounded-full overflow-hidden group/card border-4 border-transparent hover:border-[#ed5548] transition duration-300">
                                <img
                                    src={place.img}
                                    alt={place.title}
                                    className="w-full h-full object-cover group-hover/card:scale-110 transition duration-3000"
                                />
                                <div className="absolute bottom-10 rounded-full px-10 py-8 backdrop-blur-lg left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                                    <span
                                        className="text-white text-4xl whitespace-nowrap"
                                        style={{ fontFamily: "'Just Another Hand', cursive" }}
                                    >
                                        {place.title}
                                    </span>
                                    <span className="bg-[#f2f2f2] group-hover/card:bg-[#ed5548] group-hover/card:text-white transition duration-300 text-[#8b8b8b] text-[10px] rounded-full px-2 py-2 whitespace-nowrap uppercase font-semibold">
                                        3 listings
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="relative flex justify-between gap-10 items-center w-full py-15 z-10 group max-sm:flex-col">
                <img src="/home/bg-03.png" alt="" className="absolute top-0 left-0 max-lg:hidden" />
                <img src="/home/bg-04.png" alt="" className="absolute -bottom-50 right-0 max-lg:hidden" />
                <div className="w-1/2 max-sm:w-full">
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                                duration: 3,
                            }}
                            className="absolute top-5 left-10" >
                            <img src="/home/image-star.png" alt="" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                                duration: 3,
                            }} className="absolute bottom-5 right-3">
                            <img src="/home/image-star-2.png" alt="" />
                        </motion.div>
                        <div className="mask-poly">
                            <img src="/home/image-06.jpg" className="rounded-4xl w-full h-full object-cover" alt="" />
                        </div>
                        <div className="flex items-center justify-center absolute bottom-10 left-10 border-2 border-white rounded-full px-2 py-3">
                            <div className="backdrop-blur-lg flex flex-col items-center gap-2 rounded-full px-5 py-6 group-hover:bg-[#ed5548] transition duration-300">
                                <span className="text-5xl text-white bold ">26</span>
                                <span className="text-sm text-white max-w-28 text-center semibold">YEAR OF EXPERIENCE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-8 max-sm:w-full">
                    <Heading
                        span='WHY CHOOSE US'
                        heading='See why you should choose our listox'
                    />
                    <span className="text-[#8b8b8b]">
                        In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful track record of helping brands scale
                    </span>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#6053f0] rounded-full rounded-tl-none p-1 text-white text-2xl">
                            <i className="bi bi-check "></i>
                        </span>
                        <span className="bold">Discover global business in dubai</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#6053f0] rounded-full rounded-tl-none p-1 text-white text-2xl">
                            <i className="bi bi-check "></i>
                        </span>
                        <span className="bold">Get the authorized Listings</span>
                    </div>
                    <button className="bg-[#ed5548] px-8 py-3 rounded-full text-sm text-white w-fit semibold hover:opacity-80 transition duration-300 cursor-pointer">More About Us</button>
                </div>

            </div>
        </div >
    );
};
