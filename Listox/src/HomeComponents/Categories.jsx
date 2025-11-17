import React from 'react'
import { Heading } from '../Components/Heading';

export const Categories = () => {
    const Cat = [
        { id: 1, listing: "4", title: "Restuarant", icon: "fork-knife" },
        { id: 2, listing: "2", title: "Nightlife", icon: "cup-straw" },
        { id: 3, listing: "8", title: "Traveling", icon: "globe" },
        { id: 4, listing: "4", title: "Beauty", icon: "scissors" },
        { id: 5, listing: "2", title: "Fitness", icon: "lightning-charge" },
        { id: 6, listing: "5", title: "Shopping", icon: "bag-heart" },
        { id: 7, listing: "8", title: "Places", icon: "pin-map" },
        { id: 8, listing: "5", title: "Enjoyment", icon: "person-standing" },
    ];
    return (
        <div className="flex flex-col items-center gap-5 max-w-7xl mx-auto w-full my-25">
            <Heading
                span='SEARCH BY CATEGORIES'
                heading='Browsing by category makes finding things simpler.'
                center='text-center'
                items='center'
            />

            <div className="flex items-center flex-wrap gap-5 w-full max-lg:px-5">
                {
                    Cat.map((item) => (


                        <div key={item.id} className="flex gap-5 items-center bold border border-[#e2e2e2] hover:border-[#ed5548] transition duration-300 w-[23%] max-lg:w-[48%] rounded-xl p-6">
                            <div className="flex flex-col border-r border-[#e2e2e2] flex-1/2 w-full">
                                <span className='text-xs text-[#2222229a]'> {item.listing} Listings</span>
                                <h1 className='text-lg'>{item.title}</h1>
                            </div>
                            <i className={`bi bi-${item.icon} text-[#ED5548] text-4xl`}></i>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
