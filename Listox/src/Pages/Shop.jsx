import React from 'react'
import { PageBanner } from '../Components/PageBanner'
import { Link } from 'react-router-dom';

export const Shop = () => {
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
            <div className="flex justify-between gap-10 max-w-7xl w-full mx-auto py-15 max-lg:flex-col">
                <div className="w-3/4 flex flex-col gap-5 max-lg:w-full">
                    <div className="flex w-full justify-between items-center">
                        <span className='text-[#858585]'>Showing all 6 results</span>
                        <select name="" id="" className='bg-[#f2f2f2] text-[#8b8b8b] px-5 py-3'>
                            <option value="">Default sorting</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center flex-wrap gap-5">
                        {
                            Product.map((item) => (

                                <Link to="/productDetails">
                                    <div key={item.id} className="flex flex-col gap-3 w-[31%] p-5 shadowCard rounded-2xl group cursor-pointer max-sm:w-full">


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
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='w-3/12 flex flex-col gap-5 max-lg:w-full'>
                    <div className="flex flex-col gap-5 border border-[#e2e2e2] rounded-lg p-5">
                        <h1 className='text-lg bold uppercase border-b pb-2 border-[#e2e2e2]'>Categories</h1>
                        <div className="flex flex-col gap-5 text-[#8b8b8b] medium">
                            <span>Design & Tech</span>
                            <span>Film & Videos</span>
                            <span>Medical & Health</span>
                            <span>Organic Foods</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 border border-[#e2e2e2] rounded-lg p-5">
                        <h1 className='text-lg bold uppercase border-b pb-2 border-[#e2e2e2]'>Products</h1>
                        <div className="flex flex-col gap-5  medium">
                            <div className="flex items-center gap-5">
                                <img src="/home/product-6.jpg" alt="" className='w-20 h-20 border border-[#e2e2e2]' />
                                <div className="flex flex-col ">
                                    <span className="bold">Tropical Print Front Mini Night Dress</span>
                                    <span className="text-[#ED5548] bold">$800.00</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <img src="/home/product-6.jpg" alt="" className='w-20 h-20 border border-[#e2e2e2]' />
                                <div className="flex flex-col ">
                                    <span className="bold">Tropical Print Front Mini Night Dress</span>
                                    <span className="text-[#ED5548] bold">$800.00</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <img src="/home/product-6.jpg" alt="" className='w-20 h-20 border border-[#e2e2e2]' />
                                <div className="flex flex-col ">
                                    <span className="bold">Tropical Print Front Mini Night Dress</span>
                                    <span className="text-[#ED5548] bold">$800.00</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 border border-[#e2e2e2] rounded-lg p-5">
                        <h1 className='text-lg bold uppercase border-b pb-2 border-[#e2e2e2]'>Products tags</h1>
                        <div className="flex  gap-3  semibold">
                            <span className="bg-[#f2f2f2] text-sm px-3 py-2">Classic</span>
                            <span className="bg-[#f2f2f2] text-sm px-3 py-2">Decor</span>
                            <span className="bg-[#f2f2f2] text-sm px-3 py-2">Kitchen</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
