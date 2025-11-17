import React from 'react'

export const Heading = ({ span, heading, center, items, width = 'max-w-[700px]', textColor = 'text-[#6053F0]', bgColor = 'bg-[#6053f01a]', headingColor }) => {
    return (
        <div className={`flex flex-col gap-3 items-${items}`}>
            <span className={`${textColor} ${bgColor} px-5 py-2 text-[10px] w-fit rounded-full bold uppercase`}>
                {span}
            </span>
            <h1 className={`text-5xl bold ${center} ${width} ${headingColor} max-lg:text-3xl max-lg:max-w-[800px]`}>
                {heading}
            </h1>
        </div>
    )
}
