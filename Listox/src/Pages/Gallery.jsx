import React, { useState } from 'react'
import { PageBanner } from '../Components/PageBanner'
export const Gallery = () => {

    const GalleryImage = [
        {
            id: 1,
            country: "Hotel in Broklyn",
            place: "Hotel",
        },
        {
            id: 2,
            country: "Food in New York",
            place: "Retaurants",
        },
        {
            id: 3,
            country: "Shopping Mall",
            place: "Shopping",
        },
        {
            id: 4,
            country: "Baloon Adventure",
            place: "Travel",
        },
        {
            id: 5,
            country: "Food in New York",
            place: "Retaurants",
        },
        {
            id: 6,
            country: "Baloon Adventure",
            place: "Travel",
        },
        {
            id: 1,
            country: "Baloon Adventure",
            place: "Travel",
        },
        {
            id: 2,
            country: "Hotel in Broklyn",
            place: "Hotel",
        },
        {
            id: 3,
            country: "Baloon Adventure",
            place: "Travel",
        },
    ];

    return (
        <div className="m-5">
            <PageBanner />
            <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-8 py-15">
                {GalleryImage.map((item) => (
                    <div key={item.id} className="relative w-[31%] rounded-2xl overflow-hidden cursor-crosshair group max-lg:w-[47%] max-sm:w-full">
                        <img src={`home/listing-${item.id}.jpg`} alt="no" className="w-full" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500">
                            <span className="bold text-2xl">{item.country}</span>
                            <span>{item.place}</span>
                        </div>
                    </div>
                ))}
            </div>
    
        </div>

    )
}
