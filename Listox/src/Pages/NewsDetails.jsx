import React from 'react'
import { PageBanner } from '../Components/PageBanner';

export const NewsDetails = () => {
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
    const Categories = [
        {
            id: 1,
            cat: "Fitness Zone",
        },
        {
            id: 2,
            cat: "Job & Feed",
        },
        {
            id: 3,
            cat: "Restaurant",
        },
        {
            id: 4,
            cat: "Tours & Travel",
        },

    ];
    const Tag = [
        {
            id: 1,
            cat: "Adventure",
        },
        {
            id: 2,
            cat: "Beach",
        },
        {
            id: 3,
            cat: "Lifestyle",
        },
        {
            id: 4,
            cat: "Parks",
        },
        {
            id: 4,
            cat: "Tourisms",
        },

    ];
    return (
        <div >
            <div className='mx-5 mt-5'>
                <PageBanner />
            </div>

            <div className="flex max-w-7xl mx-auto w-full gap-10 py-5 max-lg:px-5 max-lg:flex-col">
                <div className='w-2/3 flex flex-col gap-5 max-lg:w-full'>
                    <div className="flex w-full overflow-hidden rounded-lg">
                        <img src="/home/post-02.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <span className='text-[#8b8b8b] text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <div className="flex items-center gap-5 text-[#8b8b8b]">
                        <span>
                            <i className="bi bi-person text-[#ed5548] mr-1"></i>
                            Admin</span>
                        <span>
                            <i className="bi bi-folder text-[#ed5548] mr-1"></i>
                            Restaurant</span>
                    </div>
                    <div className="flex flex-col gap-2 text-[#8b8b8b]">
                        <h1 className='text-black bold text-3xl'>Things to see and do when visiting New York</h1>
                        <span>
                            The Spring is a passionate and determined group of monthly givers on a mission to end the water crisis in our lifetime. People like you, from more than 100 countries around the world, giving anything they can to prove how unstoppable we are when we work together.
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 text-[#8b8b8b]">
                        <h1 className='text-black bold text-3xl'>Clean water helps keep kids in school, especially girls.</h1>
                        <span>
                            Less time collecting water means more time in class. Clean water and proper toilets at school means teenage girls don’t have to stay home for a week out of every month.
                        </span>
                    </div>
                    <div className="flex flex-col justify-center gap-5 bg-[#f2f2f2] border-l-2 border-[#ed5548] p-10">
                        <i className="bi bi-quote text-5xl text-[#ed5548]"></i>
                        <h1 className='text-xl text-[#313131] semibold italic'>Before Natalia’s village had a clean water tap, she often didn’t have time for school. Now, she goes to school every day and she’s the President of her local Water Committee. And she’s just getting started.
                        </h1>
                        <span className='semibold'>said Polito</span>
                    </div>
                    <div className="flex flex-col gap-5">

                        <div className="flex flex-col gap-5">
                            <span className="bold text-xl">Tags</span>
                            <div className="flex items-center gap-2 flex-wrap">
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
                    <div className="flex border border-[#e2e2e2] max-sm:flex-col">
                        <div className="w-1/3 flex items-center justify-center flex-col border-r border-[#e2e2e2] py-10 max-sm:w-full">
                            <span className='text-6xl medium'>
                                3.5
                                <span className='text-2xl text-[#8b8b8b]'>/5</span>
                            </span>
                            <span className='text-[#ED5548] semibold'>Very Good</span>
                            <span className='text-[#8b8b8b] medium'>3 verified reviews</span>
                        </div>
                        <div className="w-2/3 py-10 flex gap-5 flex-col items-center justify-center px-10 max-sm:w-full">
                            <div className="flex items-center gap-8">
                                <span className="semibold w-20">Quality</span>
                                <div className="w-80 h-2.5  bg-[#e2e2e2] rounded-full relative  before:content-[''] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:bg-[#ed5548] before:rounded-full max-sm:w-50"></div>
                            </div>
                            <div className="flex items-center gap-8">
                                <span className="semibold w-20">Hospitality</span>
                                <div className="w-80 h-2.5  bg-[#e2e2e2] rounded-full relative  before:content-[''] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:bg-[#ed5548] before:rounded-full max-sm:w-50"></div>
                            </div>
                            <div className="flex items-center gap-8">
                                <span className="semibold w-20">Service</span>
                                <div className="w-80 h-2.5  bg-[#e2e2e2] rounded-full relative  before:content-[''] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:bg-[#ed5548] before:rounded-full max-sm:w-50"></div>
                            </div>
                            <div className="flex items-center gap-8">
                                <span className="semibold w-20">Pricing</span>
                                <div className="w-80 h-2.5  bg-[#e2e2e2] rounded-full relative  before:content-[''] before:absolute before:w-[70%] before:h-full before:top-0 before:left-0 before:bg-[#ed5548] before:rounded-full max-sm:w-50"></div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <span className="relative before:content-[''] before:absolute before:w-15 before:h-0.5 before:-bottom-1 before:left-0 before:bg-[#ed5548] text-2xl bold">3 Reviews</span>
                        <div className="flex gap-5 border-b border-[#e2e2e2] pb-5 max-sm:flex-col">
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
                <div className="w-2/6 flex flex-col gap-10 max-lg:w-full">

                    <div className="flex flex-col gap-5 p-5 border border-[#e2e2e2] rounded-lg">
                        <h1 className='text-xl bold uppercase'>Recent posts</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <img src="/home/post-02.jpg" alt="" className='w-20 h-20 object-cover' />
                                <div className="flex flex-col  gap-1">
                                    <span className=' uppercase text-[#8b8b8b] text-sm  cursor-pointer'>
                                        <i className="bi bi-chat-dots text-[#ed5548] mr-1"></i>
                                        0 comments
                                    </span>
                                    <h1 className='bold max-w-[250px]'>Things to see and do when visiting New York</h1>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/home/post-01.jpg" alt="" className='w-20 h-20 object-cover' />
                                <div className="flex flex-col  gap-1">
                                    <span className=' uppercase text-[#8b8b8b] text-sm  cursor-pointer'>
                                        <i className="bi bi-chat-dots text-[#ed5548] mr-1"></i>
                                        0 comments
                                    </span>
                                    <h1 className='bold max-w-[250px]'>Things to see and do when visiting New York</h1>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/home/post-03.jpg" alt="" className='w-20 h-20 object-cover' />
                                <div className="flex flex-col  gap-1">
                                    <span className=' uppercase text-[#8b8b8b] text-sm  cursor-pointer'>
                                        <i className="bi bi-chat-dots text-[#ed5548] mr-1"></i>
                                        0 comments
                                    </span>
                                    <h1 className='bold max-w-[250px]'>Things to see and do when visiting New York</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 p-5 border border-[#e2e2e2] rounded-lg">
                        <h1 className='text-xl bold'>All Categories</h1>


                        {
                            Categories.map((time) => (
                                <span className="text-[#8b8b8b]">{time.cat}</span>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-5 p-5 border border-[#e2e2e2] rounded-lg">
                        <h1 className='text-xl bold'>Tags</h1>

                        <div className="flex gap-2 flex-wrap">

                            {
                                Tag.map((time) => (
                                    <span className="text-[#8b8b8b] bg-[#ededed] w-fit px-3 py-2 text-sm rounded-sm bold">{time.cat}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full h-[500px] overflow-hidden rounded-lg relative flex flex-col px-5 justify-center gap-4">
                        <img src="/home/image-11-1.jpg" alt="" className='w-full rounded-lg object-cover absolute top-0 left-0 -z-1' />
                        <h1 className='bold text-white text-2xl max-w-[100px]'>Get Free Consultations</h1>
                        <span className="text-white">SPECIAL ADVISORS</span>
                        <span className='text-white max-w-[150px]'>Quis autem vel eum iure repreh ende</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
