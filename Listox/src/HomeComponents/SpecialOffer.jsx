import React, { useState } from 'react'
import { Heading } from '../Components/Heading'

export const SpecialOffer = () => {
    const [position, setPosition] = useState("center");

    const handleMouseMove = (e) => {
        const { offsetX, target } = e.nativeEvent;
        const width = target.clientWidth;
        const edgeSize = 100; // how close to edge to trigger

        if (offsetX < edgeSize) setPosition("left");
        else if (offsetX > width - edgeSize) setPosition("right");
        else setPosition("center");
    };

    // very small shift (15px)
    const boxPosition = {
        left: "left-[calc(50%-15px)] top-1/2 -translate-y-1/12",
        right: "left-[calc(50%+15px)] top-1/2 -translate-y-1/12",
        center: "left-1/2 top-1/2 -translate-x-1/12 -translate-y-1/12",
    };
    return (
        <div className='w-full relative h-[700px] max-lg:h-[500px] bg-[#6053f0] flex items-center justify-center overflow-hidden max-lg:px-5'>
            <img src="/home/bg-0301.png" alt="" className='w-full h-full absolute top-0 left-0 ' />
            <div className="flex items-center justify-center max-w-7xl py-15 z-100">
                <div className="flex w-1/2 flex-col gap-5">
                    <Heading
                        span='SPECIAL OFFER FOR YOU'
                        heading='Let’s Make Your Travel Dreams Come True'
                        bgColor='bg-[#ed5548]'
                        textColor='text-white'
                        width='max-w-[450px]'
                        headingColor='text-white'

                    />
                    <span className="text-white max-w-[450px]">There are many variations of passages of Lorem Ipsum available but the majority.</span>
                    <button className='rounded-full px-8 py-3 bg-white w-fit'>Start Booking</button>
                </div>
                <img src="home/image-05.png" className='absolute top-0 right-1/6' alt="" />
                <div className="w-1/2 flex" onMouseMove={handleMouseMove}>

                    <img src="home/image-04.png" alt="" className={`w-full h-full object-cover z-2 transition duration-500 ${boxPosition[position]}  scale-animation`} />
                </div>
            </div>
        </div >
    )
}
