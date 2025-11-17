import React from 'react'
import { PageBanner } from '../Components/PageBanner'


export const Listing = () => {
    const Amenities = [
        {
            id: 1,
            icon: "bell-fill",
            amenities: "Alarm System",
        },
        {
            id: 2,
            icon: "p-square-fill",
            amenities: "Car Parking",
        },
        {
            id: 3,
            icon: "arrow-down-up",
            amenities: "Elevator",
        },
        {
            id: 4,
            icon: "bounding-box",
            amenities: "Outdoor Seating",
        },
        {
            id: 5,
            icon: "house-heart",
            amenities: "Pet Friendly",
        },
        {
            id: 6,
            icon: "camera-video-fill",
            amenities: "Security Cameras",
        },
        {
            id: 7,
            icon: "fire",
            amenities: "Smoking Allowed",
        },
        {
            id: 8,
            icon: "wifi",
            amenities: "Wireless Internet",
        },
    ];
    const ContactDetails = [
        {
            id: 1,
            icon: "telephone",
            contact: "+84-666-888-99",
        },
        {
            id: 2,
            icon: "envelope",
            contact: "contact@example.com",
        },
        {
            id: 3,
            icon: "geo-alt-fill",
            contact: "22 Broklyn Street New York USA",
        },


        {
            id: 4,
            icon: "globe",
            contact: "https://example.com",
        },
    ]
    const Tags = [
        "FOOD",
        "HOME DELIVERY",
        "restaurant",
        "shopping",
        "traving",
    ];
    const OpeninHours = [
        {
            id: 1,
            day: "Monday",
            time: "01:03 - 11:30",
        },
        {
            id: 2,
            day: "Tuesday",
            time: "13:00 - 23:00",
        },
        {
            id: 3,
            day: "Wednesday",
            time: "11:00 - 22:00",
        },
        {
            id: 4,
            day: "Thursday",
            time: "01:00 - 11:30",
        },
        {
            id: 5,
            day: "Friday",
            time: "01:03 - 11:30 <br/> 13:00 - 23:30",
        },
        {
            id: 6,
            day: "Saturday",
            time: "Open",
        },
        {
            id: 7,
            day: "Sunday",
            time: "Closed",
        },
    ];
    return (
        <div >
            <div className='mx-5'>
                <PageBanner />
            </div>
            <div className="py-10 bg-[#f7f7f7]">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="/home/logo-listing-1.jpg" alt="" />
                        <div className="flex flex-col gap-2">
                            <h1 className='text-3xl bold'>Shape gym training</h1>
                            <div className="flex items-baseline gap-2">
                                <span className='text-[#8b8b8b] text-sm semibold'>
                                    <i className="bi bi-check-circle-fill text-[#11d06b] mr-2"></i>
                                    Open Now
                                </span>
                                <div className="flex items-center gap-2 text-[#FEBB02]">
                                    <div className="flex items-center text-[#FEBB02]">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <span className="semibold text-[#8b8b8b]">3.5 by 3 reviews</span>
                                </div>
                            </div>
                            <span className='text-[#8b8b8b]'>Best Traveling in the UK</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className='bg-white flex items-center gap-3 rounded-sm px-4 py-3 bold text-sm hover:bg-[#ed5548] hover:text-white transition duration-300 cursor-pointer'>
                            <i className="bi bi-share"></i>
                            <span>
                                Share
                            </span>
                        </button>
                        <button className='bg-white flex items-center gap-3 rounded-sm px-4 py-3 bold text-sm hover:bg-[#ed5548] hover:text-white transition duration-300 cursor-pointer'>
                            <i className="bi bi-share"></i>
                            <span>
                                Reviews
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex max-w-7xl mx-auto w-full gap-10 py-15">
                <div className='w-3/5 flex flex-col gap-5'>
                    <div className="flex w-full">
                        <img src="/home/listing-14.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className="flex flex-col gap-5 text-[#8b8b8b] border-b border-[#e2e2e2] pb-5">
                        <span>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui etiam rhoncus maecenas tempus tellus eget.</span>
                        <span>Nullam quis ante tiam sit amet orci eget eros faucibus tincidunt. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className='text-xl bold'>Listing Amenities</h1>
                        <div className="flex gap-10 flex-wrap">
                            {
                                Amenities.map((item) => (



                                    <div key={item.id} className="flex items-center gap-2 text-[#8b8b8b] medium w-[200px]">
                                        <i className={`bi bi-${item.icon} text-[#ed5548] text-2xl`}></i>
                                        {item.amenities}
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="w-full">
                            <iframe width="774" height="435" src="https://www.youtube.com/embed/MtCMtC50gwY" title="New York City Vacation Travel Guide | Expedia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="bold text-xl">Tags</span>
                            <div className="flex items-center gap-2">
                                {
                                    Tags.map((tag, index) => (


                                        <span key={index} className='text-sm bg-[#f2f2f2] text-[#8b8b8b] uppercase rounded-sm px-4 py-2 hover:bg-[#ED5548] hover:text-white semibold transition duration-300 cursor-pointer'>
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex"></div>
                    </div>
                    <div className="flex border border-[#e2e2e2]">
                        <div className="w-1/3 flex items-center justify-center flex-col border-r border-[#e2e2e2] py-10">
                            <span className='text-6xl medium'>
                                3.5
                                <span className='text-2xl text-[#8b8b8b]'>/5</span>
                            </span>
                            <span className='text-[#ED5548] semibold'>Very Good</span>
                            <span className='text-[#8b8b8b] medium'>3 verified reviews</span>
                        </div>
                        <div className="w-2/3 py-10 flex gap-5 flex-col items-center justify-center px-10">
                            <div className="flex items-center gap-8">
                                <span className="semibold w-20">Quality</span>
                                <div className="w-80 h-2.5  bg-[#e2e2e2] rounded-full relative  before:content-[''] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:bg-[#ed5548] before:rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-8">
                                <span className="semibold w-20">Hospitality</span>
                                <div className="w-80 h-2.5  bg-[#e2e2e2] rounded-full relative  before:content-[''] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:bg-[#ed5548] before:rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-8">
                                <span className="semibold w-20">Service</span>
                                <div className="w-80 h-2.5  bg-[#e2e2e2] rounded-full relative  before:content-[''] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:bg-[#ed5548] before:rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-8">
                                <span className="semibold w-20">Pricing</span>
                                <div className="w-80 h-2.5  bg-[#e2e2e2] rounded-full relative  before:content-[''] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:bg-[#ed5548] before:rounded-full"></div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <span className="relative before:content-[''] before:absolute before:w-15 before:h-0.5 before:-bottom-1 before:left-0 before:bg-[#ed5548] text-2xl bold">3 Reviews</span>
                        <div className="flex gap-5 border-b border-[#e2e2e2] pb-5">
                            <img src="/home/avatar.jpeg" alt="no" className='w-[70px] h-[70px] rounded-full' />
                            <div className="flex flex-col gap-3 ">
                                <span className='text-lg'>admin</span>
                                <div className="flex items-center gap-1">
                                    <span className='text-lg text-[#ed5548]'>-</span>
                                    <span className="text-sm text-[#8b8b8b]">July 25, 2023</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="flex flex-col">
                                        <span className='text-sm text-[#8b8b8b] semibold'>Quality</span>
                                        <div className="text-sm text-[#febb02] gap-1">
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className='text-sm text-[#8b8b8b] semibold'>Hospitality</span>
                                        <div className="text-sm text-[#febb02] gap-1">
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star "></i>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className='text-sm text-[#8b8b8b] semibold'>Service</span>
                                        <div className="text-sm text-[#febb02] gap-1">
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star "></i>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className='text-sm text-[#8b8b8b] semibold'>Pricing</span>
                                        <div className="text-sm text-[#febb02] gap-1">
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star-fill "></i>
                                            <i className="bi bi-star "></i>
                                        </div>
                                    </div>
                                </div>

                                <span className='text-[#8b8b8b]'>It was amazing and I’ll book it again soon, Every thing was perfect except the water of bathroom was little hot.
                                </span>
                                <span className='text-[#ed5548] text-sm self-end semibold cursor-pointer'>
                                    <i className="bi bi-chat-dots mr-2"></i>
                                    Reply
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="relative before:content-[''] before:absolute before:w-15 before:h-0.5 before:-bottom-1 before:left-0 before:bg-[#ed5548] text-2xl bold">Write a Review
                        </span>
                        <div className="flex flex-col gap-3">
                            <span className='text-[#8b8b8b]'>Your email address will not be published.</span>
                            <div className="flex gap-3">
                                <input type="text" className='bg-[#f2f2f2] p-5 rounded-lg w-full' placeholder='Your Name *' />
                                <input type="text" className='bg-[#f2f2f2] p-5 rounded-lg w-full' placeholder='Email *' />
                            </div>
                            <span className='text-[#8b8b8b]'>
                                <input type="checkbox" name="" id="" className='me-2' />
                                Your email address will not be published.
                            </span>
                            <textarea name="" rows={10} id="" className='bg-[#f2f2f2] p-5 rounded-lg w-full' placeholder='Add Review'></textarea>
                            <button className='bg-[#ed5548] px-8 py-2 text-white w-fit rounded-full hover:opacity-80 transition duration-300 cursor-pointer'>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 flex flex-col gap-10">
                    <div className="flex flex-col shadow-2xl">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464675033077!2d-0.12209412310046139!3d51.503189711010585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1763382660556!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='h-[400px]'></iframe>
                        <div className="flex flex-col gap-5 px-8 py-6 justify-center">
                            {
                                ContactDetails.map((contact) => (


                                    <div key={contact.id
                                    } className="flex items-center gap-2">
                                        <i className={`bi bi-${contact.icon} text-[#ed5548]`}></i>
                                        <span className='text-[#8b8b8b]'>
                                            {contact.contact}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5 border border-[#e2e2e2] rounded-lg">
                        <h1 className='text-xl bold'>Contact Business</h1>
                        <input type="text" className='rounded-full border border-[#e2e2e2] px-5 py-4' placeholder='Your Name' />
                        <input type="text" className='rounded-full border border-[#e2e2e2] px-5 py-4' placeholder='Your Email' />
                        <input type="text" className='rounded-full border border-[#e2e2e2] px-5 py-4' placeholder='Your Phone' />
                        <textarea rows={5} type="text" className='rounded-xl border border-[#e2e2e2] px-5 py-4' placeholder='Your Message' />
                        <button className="bg-[#ed5548] px-8 py-3 rounded-full text-sm text-white w-fit semibold hover:opacity-80 transition duration-300 cursor-pointer">Send message</button>
                    </div>
                    <div className="flex flex-col gap-5 p-5 border border-[#e2e2e2] rounded-lg">
                        <h1 className='text-xl bold'>Contact Business</h1>
                        <div className="w-full flex justify-between border-b border-dashed border-[#e2e2e2] pb-5">
                            <span className='text-[#8b8b8b]'>Now</span>
                            <span className='text-[#ed5548]'>Closed Now</span>
                        </div>

                        {
                            OpeninHours.map((time) => (
                                <div className="w-full flex justify-between border-b border-dashed border-[#e2e2e2] pb-5">
                                    <span className="text-[#8b8b8b]">{time.day}</span>

                                    <span className={time.id === 6 || time.id === 7 ? "text-[#8b8b8b]" : ""}>
                                        {time.time}
                                    </span>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div >

    )
}
