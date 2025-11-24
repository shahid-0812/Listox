import React, { useEffect, useState } from 'react'
import { PageBanner } from '../Components/PageBanner';
import { Heading } from '../Components/Heading';


export const Contact = () => {
    const ContactDetails = [
        {
            id: 1,
            icon: "geo-alt-fill",
            title: "Our Address",
            contact: "4517 Washington Ave. Manchester, Kentucky 39495",
        },
        {
            id: 2,
            icon: "envelope",
            title: "contact@example.com",
            contact: "Email us anytime for any kind ofquety.",
        },
        {
            id: 3,
            icon: "telephone",
            title: "+208-666-01112",
            contact: "24/7/365 priority Live Chat and ticketing support.",
        },
        {
            id: 4,
            icon: "clock",
            title: "Opening Hour",
            contact: "Sunday-Fri: 9 AM – 6 PM Saturday: 9 AM – 4 PM.",
        },
    ];


    return (
        <div className="flex flex-col  rounded-4xl m-5">

            <PageBanner />
            <div className="flex flex-col rounded-3xl mt-5 relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8353.144344522152!2d-0.12738773690856853!3d51.505791434741774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1763098250669!5m2!1sen!2sin"

                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full  h-[450px] rounded-3xl'
                ></iframe>
                <div className="flex max-w-7xl w-full mx-auto absolute -bottom-30 -translate-x-1/2  left-1/2 gap-5 max-lg:static max-lg:translate-0 max-lg:flex-wrap max-sm:py-5">
                    {
                        ContactDetails.map((detail) => (


                            <div key={detail.id} className="flex flex-col items-center justify-center bg-white rounded-2xl w-[24%] max-lg:w-[48%] px-8 py-10 gap-3 border border-[#e2e2e2] max-sm:w-full">
                                <span className='bg-[#f2f2f2] text-4xl p-5 rounded-2xl y'>
                                    <i className={`bi bi-${detail.icon} text-[#ed5548]`}></i>
                                </span>
                                <h1 className='text-lg semibold'>{detail.title}</h1>
                                <span className="text-[#8b8b8b] text-center">{detail.contact}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col gap-15 pt-55 max-w-4xl mx-auto w-full pb-15 max-sm:pt-10">
                <Heading
                    span='CONTACT WITH US'
                    heading='Ready to start? Send us a message anytime'
                    center='text-center'
                    items='center'
                />
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 max-sm:flex-col">
                        <input type="text" placeholder='Your Name' className='border border-[#e2e2e2] rounded-full px-5 py-4 w-full placeholder:text-sm' />
                        <input type="text" placeholder='Phone Number' className='border border-[#e2e2e2] rounded-full px-5 py-4 w-full placeholder:text-sm' />
                    </div>
                    <div className="flex items-center gap-3 max-sm:flex-col">
                        <input type="text" placeholder='Email Address' className='border border-[#e2e2e2] rounded-full px-5 py-4 w-full placeholder:text-sm' />
                        <input type="text" placeholder='Subject' className='border border-[#e2e2e2] rounded-full px-5 py-4 w-full placeholder:text-sm' />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Write a Message' className='border border-[#e2e2e2] rounded-3xl px-5 py-4 w-full placeholder:text-sm'></textarea>
                    <button className="bg-[#ed5548] px-8 py-4 rounded-full text-sm text-white w-fit semibold hover:opacity-80 transition duration-300 cursor-pointer">Send a Message</button>
                </div>

            </div>

        </div>
    )
}
