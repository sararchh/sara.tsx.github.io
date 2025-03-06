import Image from 'next/image'
import React from 'react'

interface Props {
    className?: string
    width?: number
    height?: number
    url: string
}

export const Thumb: React.FC<Props> = ({ className, url, width = 14, height = 14 }) => {
    return (
        <div className={`w-[${width}px] h-[${height}px] flex justify-center items-center`}>
            <Image src={url} width={width} height={height} className={`${className} object-cover`} alt='image' />
        </div>
    )
}
