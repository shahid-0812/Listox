import React from 'react'
import { Heading } from '../Components/Heading';
export const Plans = () => {
    const Plans = [
        {
            id: 1,
            plan: "basic",
            price: "30.00",
            post: "10",
            expire: "20",
        },
        {
            id: 2,
            plan: "standard",
            price: "50.00",
            post: "20",
            expire: "30",
        },
        {
            id: 3,
            plan: "standard",
            price: "50.00",
            post: "30",
            expire: "60",
        },
    ];
    return (
        <div className="flex flex-col gap-10 py-15 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between w-full">
                <Heading
                    span='affordable price'
                    heading='Choose our package'
                />
                <button className="text-white text-sm max-lg:w-full bg-[#ED5548] px-6 py-3 rounded-full  flex items-center gap-2 cursor-pointer hover:opacity-80 transition duration-300">
                    <span>Add Listing</span>
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>
            <div className="flex items-center justify-center gap-5 flex-wrap">
                {
                    Plans.map((plan) => (


                        <div key={plan.id} className="flex flex-col rounded-xl shadow-xl overflow-hidden w-[32%]">
                            <div

                                style={{
                                    backgroundImage: "url('/home/bg-price.png')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center top",
                                    backgroundColor: "#ED5548",
                                    backgroundBlendMode: "multiply",
                                }}

                                className="flex flex-col items-center p-8 gap-3  rounded-t-lg text-white">
                                <span className='text-sm uppercase'>{plan.plan} pack</span>
                                <h1 className='text-4xl bold'>
                                    <span className='text-lg'>$</span>
                                    {plan.price}
                                </h1>
                                <span className="semibold">
                                    Suitable For Any IT Solutions.
                                </span>
                            </div>
                            <div className="flex flex-col gap-3 bg-white p-8">
                                <div className="flex items-center gap-2">
                                    <i className="bi bi-check text-xl text-[#ED5548]"></i>
                                    <span className='text-[#8b8b8b] semibold'>{plan.post} listing Post</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="bi bi-check text-xl text-[#ED5548]"></i>
                                    <span className='text-[#8b8b8b] semibold'>{plan.expire} days expiration</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="bi bi-check text-xl text-[#ED5548]"></i>
                                    <span className='text-[#8b8b8b] semibold'>Featured Listing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="bi bi-check text-xl text-[#ED5548]"></i>
                                    <span className='text-[#8b8b8b] semibold'>Edit Your Listing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="bi bi-check text-xl text-[#ED5548]"></i>
                                    <span className='text-[#8b8b8b] semibold'>24/7 Email Support</span>
                                </div>
                                <button className="text-white text-sm w-fit max-lg:w-full bg-[#ED5548] mt-5 px-6 py-3 rounded-lg cursor-pointer hover:opacity-80 transition duration-300">
                                    Add Listing
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
