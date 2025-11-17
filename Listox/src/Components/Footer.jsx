import React from 'react'

export const Footer = () => {
    return (
        <div className='flex flex-col m-5 rounded-3xl'>
            <footer className='bg-[#222222] flex items-center justify-center py-15'>
                <div className="w-2/3 flex flex-col gap-8 items-end">
                    <div className="w-full  flex items-center justify-center gap-5 border border-[#e2e2e2]"></div>
                </div>
                <div className="w-2/6"></div>
            </footer>
        </div>
    )
}
