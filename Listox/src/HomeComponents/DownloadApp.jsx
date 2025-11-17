import React from 'react'

export const DownloadApp = () => {
    return (
        <div className='max-w-7xl  mx-auto w-full  bg-[#6053f0] flex items-end justify-between rounded-4xl translate-y-10'>
            <div className='w-3/5 flex flex-col gap-5 p-20 max-lg:p-10'>
                <span className="text-5xl cursive text-white">Get it now for free</span>
                <h1 className='text-5xl text-white bold max-lg:text-3xl'>
                    Download our Listox mobile app
                    <span className='text-[#ED5548]'> 15% off</span>
                </h1>
                <div className="flex items-center gap-3 max-lg:flex-col max-lg:items-start">
                    <button className='flex gap-3 items-center text-white rounded-full border border-white px-8 py-2.5'>
                        <i className="bi bi-apple text-2xl"></i>
                        <div className="flex flex-col items-start">
                            <span className='text-xs semibold'>Get in on</span>
                            <span className='text-lg semibold'>Apple Store</span>
                        </div>
                    </button>
                    <button className='flex gap-3 items-center bg-[#ED5548] text-white rounded-full px-8 py-2.5'>
                        <i className="bi bi-google-play text-2xl"></i>
                        <div className="flex flex-col items-start">
                            <span className='text-xs semibold'>Get in on</span>
                            <span className='text-lg semibold'>Google Play</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="w-2/5 px-12">
                <img src="/home/image-07.png" alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
