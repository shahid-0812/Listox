import React from 'react'

export const NavHead = () => {
    const hover = "hover:text-white transition duration-300 cursor-pointer";
    const hover2 = "hover:text-[#ED5548] transition duration-300 cursor-pointer";
    return (
        <div className="flex justify-between rounded-t-4xl items-center bg-[#222] px-20 p-3 max-lg:px-8 ">
            <div className="flex items-center gap-5 text-[#cacaca] text-sm medium">
                <div className="flex items-center gap-2">
                    <i className="bi bi-envelope-fill text-[#ED5548]"></i>
                    <span className={hover}>contact@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <i className="bi bi-telephone-fill text-[#ED5548]"></i>
                    <span className={hover}>+92 (8800) 6830</span>
                </div>
            </div>

            <div className="flex items-center gap-5 text-[#cacaca] text-sm medium">
                <div className="flex items-center gap-1">
                    <i className="bi bi-person-circle"></i>
                    <span>
                        <span className={`mx-1 ${hover2}`}>Sign</span>
                        or
                        <span className={`mx-1 ${hover2}`}>Register</span>
                    </span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-4 text-lg">
                    <i className={`bi bi-facebook ${hover}`}></i>
                    <i className={`bi bi-twitter ${hover}`}></i>
                    <i className={`bi bi-instagram ${hover}`}></i>
                    <i className={`bi bi-youtube ${hover}`}></i>
                </div>
            </div>
        </div>
    )
}
