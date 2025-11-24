import React, { useRef, useState } from 'react'
import { PageBanner } from '../Components/PageBanner'
import ReactPaginate from "react-paginate/dist/react-paginate";
import { Link } from 'react-router-dom';

export const News = () => {

    const Businesses = [
        {
            id: "1",
            img: "home/post-01.jpg",
            title: "A place where start new life with adventure travel",

        },
        {
            id: "2",
            img: "home/post-02.jpg",
            title: "Things to see and do when visiting New York",

        },
        {
            id: "3",
            img: "home/post-03.jpg",
            title: "Journeys are best measured with friends",


        },
        {
            id: "4",
            img: "home/post-04.jpg",
            title: "Travel the most beautiful places in the world",


        },
        {
            id: "5",
            img: "home/post-05.jpg",
            title: "Top 5 destinations & adventure travel",


        },
        {
            id: "6",
            img: "home/post-06.jpg",
            title: "The surfing man will adventure your mind",


        },
    ];
    const itemsPerPage = 4;

    const [page, setPage] = useState(0);

    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = Businesses.slice(start, end);

    const changePage = (data) => {
        setPage(data.selected);
    };
    return (
        <div className='m-5'>
            <PageBanner />
            <div className="w-full max-w-7xl mx-auto flex gap-5 flex-wrap py-15">


                {
                    currentItems.map((item) => (

                        <div className='border border-[#e2e2e2] rounded-4xl p-5 hover:shadow-lg transition duration-300 w-[48%] max-sm:w-full'>
                            <Link to='/newsdetails'>
                                <div className="flex flex-col overflow-hidden rounded-3xl">
                                    <div className='relative '>
                                        <img src={item.img} alt="" className='w-full rounded-3xl' />
                                        <div className='absolute top-5 right-5 flex flex-col items-center text-white bg-[#6053f0] rounded-2xl px-4 py-3'>
                                            <span className='text-2xl bold'>
                                                20
                                            </span>
                                            <span className="text-sm semibold">JUL</span>
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-4 flex items-center gap-5 text-sm text-[#8b8b8b] whitespace-nowrap">
                                            <span>
                                                <i className="bi bi-person-fill mr-2 text-[#ed5548]"></i>
                                                Admin
                                            </span>
                                            <span>
                                                <i className="bi bi-chat-fill mr-2 text-[#ed5548]"></i>
                                                0 Comments
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center px-10 py-5 pt-10 gap-3 ">
                                        <h1 className='hover:text-[#ed5548] transition duration-300 cursor-pointer semibold text-2xl text-center'>{item.title}</h1>
                                        <span className="medium text-[#8b8b8b] text-center">There are many variations of but the majority have simply free text.</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    ))
                }


                <ReactPaginate
                    previousLabel={
                        <i className='bi bi-chevron-left'></i>
                    }

                    nextLabel={null}  // remove next button

                    pageCount={Math.ceil(Businesses.length / itemsPerPage)}
                    onPageChange={changePage}

                    containerClassName="flex gap-2  items-center"

                    pageClassName="border-2 border-[#e2e2e2] px-4 py-1 rounded-sm cursor-pointer hover:border-[#ed5548] hover:text-[#ed5548] hover:shadow-xl transition duration-400"
                    pageLinkClassName="block"

                    activeClassName="text-white bg-[#ed5548] border-[#ed5548]"

                    previousClassName="border-2 border-[#e2e2e2] px-3 py-1 rounded-sm cursor-pointer hover:border-[#ed5548] hover:text-[#ed5548] hover:shadow-xl transition duration-400"
                    previousLinkClassName="block"
                />

            </div>
        </div >
    )
}
