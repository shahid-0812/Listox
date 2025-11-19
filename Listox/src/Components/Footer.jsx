import React from 'react'

export const Footer = () => {
    return (
        <div className='flex flex-col m-5 rounded-3xl'>
            <footer className='bg-[#222222] flex items-center justify-center py-15'>
                <div className="w-2/3 flex flex-col gap-8 items-end">
                    <div className="  flex items-center justify-center gap-5 border border-[#FFFFFF26] px-20 py-5 rounded-2xl">
                        <div className="flex items-center text-white gap-3">
                            <i className="bi bi-envelope-fill text-[#ED5548]"></i>
                            <span className="semibold">
                                contact@example.com
                            </span>
                        </div>
                        <div className="flex items-center text-white gap-3">
                            <i className="bi bi-telephone-fill text-[#ED5548]"></i>
                            <span className="semibold">
                                +208-6666-0112
                            </span>
                        </div>
                        <div className="flex items-center text-white gap-3">
                            <i className="bi bi-geo-alt-fill text-[#ED5548]"></i>
                            <span className="semibold">
                                59 Main Street, USA
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-3">
                            <img src="/logo-white.png" alt="" className='h-[40px]'/>
                            <span className="text-[#8e8e8e]"></span>
                        </div>
                    </div>
                </div>
                <div className="w-2/6"></div>
            </footer>
        </div>
    )
}
