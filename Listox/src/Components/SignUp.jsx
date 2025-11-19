import React from 'react'

export const SignUp = () => {
    return (
        <div className='max-w-7xl mx-auto w-full rounded-2xl bg-[#ed5548] flex items-center justify-evenly mt-30'>
            <div className="flex items-center gap-5">
                <div className="self-end flex items-end overflow-visible relative">
                    <img
                        src="/home/image-28.jpg"
                        alt=""
                        className="rounded-t-full object-cover  h-[150%] absolute bottom-0 -left-20"
                    />

                    <img
                        src="/home/image-27.jpg"
                        alt=""
                        className="rounded-t-full object-cover w-full h-full relative z-10"
                    />
                </div>


                <div className="text-white flex flex-col gap-3">
                    <span className='cursive text-4xl'>Signup to get</span>
                    <span className='bold text-4xl'>Get special offers everyday</span>
                </div>
            </div>
            <button className="text-white text-sm w-fit max-lg:w-full bg-black mt-5 px-6 py-3 rounded-lg cursor-pointer hover:opacity-80 transition duration-300">
                Start Your Listing
            </button>
        </div>
    )
}
